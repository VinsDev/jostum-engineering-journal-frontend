'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { lusitana } from '../fonts';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
interface LinkItem {
  name: string;
  href: string;
}

interface LandingPageNavLinksProps {
  open: boolean;
}


const links: LinkItem[] = [
  { name: "Home", href: "/" },
  { name: "Archives", href: "/archives" },
  { name: "Guidelines", href: "/guidelines" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function LandingPageNavLinks({ open }: LandingPageNavLinksProps) {
  const pathname = usePathname();
  return (
    <ul className={`md:flex md:items-center md:static absolute w-full md:w-auto left-0 md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16' : 'top-[-490px]'}`}>
      {links.map((link, index) => (
        <li key={index} className='md:ml-4 my-7 md:my-0'>
          <Link href={link.href} className={clsx(`${lusitana.className}hover:text-blue-400 duration-500 font-sans font-normal text-md`,
            {
              'text-blue-500': pathname === link.href,
            },
          )}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

