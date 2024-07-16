import Link from "next/link";
import { lusitana } from "../../fonts";

export default function Hero() {
    return <div className="flex grow flex-col md:flex-row justify-center">
        <div className="flex flex-col justify-center text-center gap-6 px-6 md:px-20 py-10">
            <p className={`${lusitana.className}  text-gray-900 text-4xl md:leading-normal`}>
                <strong>Advancing Engineering Knowledge</strong>
            </p>
            <p className={`${lusitana.className} text-xl text-gray-900 md:leading-normal`}>Explore our collections, submit, track, and publish your research with ease</p>
            <div className="flex space-x-4 justify-center">
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
    </div>;
}