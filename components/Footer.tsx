import Link from 'next/link';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-3xl mx-auto w-full">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <h2 className="text-6xl font-bold">R.</h2>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-500 hover:text-gray-600 transition">
              About
            </a>
          </Link>
          <Link href="/photography">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Photography
            </a>
          </Link>
          <Link href="/blog">
            <a className="text-gray-500 hover:text-gray-600 transition">Blog</a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Contact
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/ramthenmala">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/ramthenmala">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/ramdevengineer/">
            Linkedin
          </ExternalLink>
          <ExternalLink href="https://www.instagram.com/ramthenmala/">
            Instagram
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}
