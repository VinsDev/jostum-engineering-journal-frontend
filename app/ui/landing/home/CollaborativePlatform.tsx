import Link from "next/link";
import { lusitana } from "../../fonts";
import Image from "next/image";

export default function CollaborativePlatform() {
    return <div className="flex grow flex-col gap-4 md:flex-row my-2">
        <div className="flex items-center justify-center md:w-1/2 md:px-28 mb-8 mt-2 mx-4 md:mx-0">
            <Image
                src="/platform.png"
                width={500}
                height={600}
                className="mix-blend-multiply rounded-lg"
                alt="Desktop"
            />
        </div>
        <div className="flex flex-col justify-center gap-6 px-6 md:w-1/2 md:px-20">
            <p className={`${lusitana.className}  text-gray-800 text-4xl md:leading-normal`}>
                <strong>A Collaborative Platform</strong>
            </p>
            <p className={`${lusitana.className} text-xl text-gray-800 md:leading-normal`}>Our platform brings together researchers, engineers, and students from around the world to collaborate on groundbreaking projects. Share your research, get feedback from peers, and work together to advance the field of engineering.</p>
            <div className="container mx-auto">
                <div className="flex justify-start">
                    <div className="inline-flex">
                        <Link
                            href="/about"
                            className="flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 hover:shadow-xl px-6 py-3 text-white text-sm font-semibold transition-colors duration-300 ease-in-out shadow-md"
                        >
                            <span>Learn More</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div >;
}