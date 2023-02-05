//Next13 best practice
import FormPost from "./Form";

//Was stuck in a problem using ENV from env.local
// ? const res = await fetch($$process.env.BASE_URL}/api/getPosts')

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/getPosts");
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

//when we add wait on the function we need to check we have an async function
export default async function Home() {
  //lets format the data here-keep in mind this in array
  const data: { id: number; title: string }[] = await getPosts();
  //We get back an array of data that is inside a json
  //how to console log data in an array ?
  console.log(data);
  return (
    <main className="py-8 px-48">
      {/* Here we import a component */}
      <FormPost/>
      {data.map((post) => (
        <h1 key={post.id} className="text-lg text-white py-6">
          {post.title}
        </h1>
      ))}
    </main>
  );
}
