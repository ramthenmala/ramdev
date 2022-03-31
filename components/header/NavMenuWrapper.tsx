import NavLink from './Link';

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

const NavMenuWrapper = () => {
  return (
    <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
      <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        {NavItems.map(({ label, path }) => (
          <NavLink key={label} pathTo={path} label={label} />
        ))}
      </ul>
    </div>
  );
};

export default NavMenuWrapper;
