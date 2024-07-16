import Link from "next/link";
import { lusitana } from "../../fonts";
import Image from "next/image";

export default function RichCollection() {
    return <div className="flex grow flex-col gap-4 md:flex-row mb-2 mt-4">
        <div className="flex flex-col justify-center gap-6 px-6 md:w-1/2 md:px-20">
            <p className={`${lusitana.className}  text-gray-800 text-4xl md:leading-normal`}>
                <strong>Rich Collection of Journals</strong>
            </p>
            <p className={`${lusitana.className} text-xl text-gray-800 md:leading-normal`}>Explore our extensive collection of engineering journals, featuring cutting-edge research and innovative solutions. Our platform provides access to a wealth of knowledge across various engineering disciplines, enabling you to stay updated with the latest advancements and insights in the field.</p>
            <div className="container mx-auto">
                <div className="flex justify-start">
                    <div className="inline-flex">
                        <Link
                            href="/archives"
                            className="flex items-center justify-center rounded-full bg-white border border-blue-500 hover:bg-blue-100 px-6 py-3 text-blue-500 text-sm font-medium transition-colors duration-300 ease-in-out shadow-md"
                        >
                            <span>View Archives</span>
                        </Link>
                    </div>
                </div>
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
    </div >;
}