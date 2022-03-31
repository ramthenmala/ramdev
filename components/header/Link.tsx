import Link from 'next/link';

interface NavLink {
  pathTo: string;
  label: string;
}

const NavLink: React.ReactNode = ({ pathTo, label }: NavLink) => {
  return (
    <li>
      <Link href={pathTo} passHref>
        <a className="text-base text-slate-700 dark:text-white font-normal block py-2 pr-4 pl-3 md:p-0 dark:hover:text-white ">
          {label}
        </a>
      </Link>
    </li>
  );
};

export default NavLink;
