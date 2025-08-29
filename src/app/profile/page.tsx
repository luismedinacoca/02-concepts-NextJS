"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Profile(){
  const router = useRouter();
  console.log("router: ",router);
  const pathname = usePathname();
  console.log("pathname: ",pathname);
  const searchParams = useSearchParams();
  // searchParams entered: /profile?name=betty&age=20
  console.log("searchParams: ",searchParams);
  //console.log("searchParams.get('name'): ",searchParams.get("name"));
  //console.log("searchParams.get('age'): ",searchParams.get("age"));
  // searchparams entered. /profile?name=betty&name=sofia&name=sandra ==> ["betty", "sofia", "sandra"];
  console.log("searchParams.getAll('name'):", searchParams.getAll("name"));

  const handleNavigate = () => {
    router.push("/");
  }
  return (
    <div>
      <h1>Profile component - client</h1>
      <button className="bg-green-500 text-white p-2 rounded-md hover:bg-blue-600 mt-4" onClick={handleNavigate}>Navigate to home page</button>
    </div>
  )
}

export default Profile;