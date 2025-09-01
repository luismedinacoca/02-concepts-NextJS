"use client";
import { useRouter } from "next/navigation";

function NotFoundPage() {
  const router = useRouter();
  return (
    <div>
      <h1>The page you are looking for was not found!</h1>
      <button onClick={() => router.push('/')} className="bg-green-500 border-0 border-white p-5 text-white">go to Homepage</button>
    </div>
  )
}

export default NotFoundPage;