import Link from "next/link";
import { lusitana } from "../../fonts";
import Image from "next/image";

export default function SeamlessSubmission() {
    return <div className="flex grow flex-col gap-4 md:flex-row ">
        <div className="flex flex-col justify-center gap-6 px-6 md:w-1/2 md:px-20">
            <p className={`${lusitana.className}  text-gray-800 text-4xl md:leading-normal`}>
                <strong>Seamless Submission Process</strong>
            </p>
            <p className={`${lusitana.className} text-xl text-gray-800 md:leading-normal`}>Submitting your research paper has never been easier. Our user-friendly interface guides you through the process, allowing you to submit, track, and manage your submissions effortlessly. Stay informed with real-time updates and feedback from reviewers.</p>
            <div className="container mx-auto">
                <div className="flex justify-start">
                    <div className="inline-flex">
                        <Link
                            href="/guidelines"
                            className="flex items-center justify-center rounded-full bg-white border border-blue-500 hover:bg-blue-100 px-6 py-3 text-blue-500 text-sm font-medium transition-colors duration-300 ease-in-out shadow-md"
                        >
                            <span>Learn More</span>
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