//Next13 best practice
import Link from "next/link";

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
  const data = await getPosts();
  console.log(data);
  return (
    <main className="py-8 px-48">
      <Link
        className="bg-blue-500 text-black font-medium py-2 px-4 rounded-md"
        href={"/dashboard"}
      >
        Go to the dashboard
      </Link>
    </main>
  );
}
