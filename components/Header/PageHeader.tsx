import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Container from '../PageLayout/Container';

const NavItems = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/about',
    label: 'About',
  },
  {
    path: '/photography',
    label: 'Photography',
  },
  {
    path: '/blog',
    label: 'Blog',
  },
  {
    path: '/contact',
    label: 'Contact',
  },
];

const PageHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonToggle, setButtonToggle] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => setButtonToggle(true), []);

  return (
    <Container>
      <nav className="border-gray-200 pt-10 pb-16 rounded">
        <div className="flex flex-wrap justify-between items-center ">
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          {NavItems.map(({ label, path }) => (
            <li key={path}>
              <Link href={path} passHref>
                <a className="text-base text-slate-700 dark:text-white font-normal block py-2 pr-4 pl-3 md:p-0 dark:hover:text-white ">
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default PageHeader;
