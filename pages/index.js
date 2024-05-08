import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-center mt-20 m-10 bg-white-600 w-screen h-screen">
    <h1 className="text-4xl font-bold text-indigo-600">Hello Cornex</h1>
    <p className="text-blue-500 text-lg">This was meant to be part of the push request </p>
    
    </div>
  );
}
