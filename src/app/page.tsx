import { Button } from "@/components/ui/button";
import Image from "next/image";


async function getStrapiData(url: string ) {

  const baseUrl = "http://localhost:1337"

  try {

    const res = await fetch(baseUrl+url);
    const data = await res.json();
  
    return data;

  } catch (error) {
    console.error(error)
    
  }
  
}
export default async function Home() {

  const strapiData = await getStrapiData("/api/home-page")
  const { title , description } = strapiData.data.attributes


  return (
    <main className="container mx-auto py-6 ">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-xl mt-4">{description}</p>
    </main>
  );
}
