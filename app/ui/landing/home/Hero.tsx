import Link from "next/link";
import { lusitana } from "../../fonts";
import Image from "next/image";

export default function Hero() {
    return <div className="flex grow flex-col gap-4 md:flex-row ">
        <div className="flex flex-col justify-center gap-6 px-6 md:w-1/2 md:px-20">
            <p className={`${lusitana.className}  text-gray-800 text-4xl md:leading-normal`}>
                <strong>Advancing Engineering Knowledge</strong>
            </p>
            <p className={`${lusitana.className} text-xl text-gray-800 md:leading-normal`}>Explore our collections, submit, track, and publish your research with ease</p>
            <div className="flex space-x-4">
                <Link
                    href="/journals"
                    className="flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 px-6 py-3 text-white text-sm font-semibold transition-colors duration-300 ease-in-out shadow-md"
                >
                    <span>Explore Collections</span>
                </Link>
                <Link
                    href="/login"
                    className="flex items-center justify-center rounded-full bg-white border border-blue-500 hover:bg-blue-100 px-6 py-3 text-blue-500 text-sm font-medium transition-colors duration-300 ease-in-out shadow-md"
                >
                    <span>Publish Journal</span>
                </Link>
            </div>
        </div>
        <div className="flex items-center justify-center md:w-1/2 md:px-28 mb-8 mt-2 mx-4 md:mx-0">
            <Image
                src="/books.jpg"
                width={500}
                height={600}
                className="mix-blend-multiply rounded-lg"
                alt="Desktop"
            />
        </div>
    </div>;
}