import Link from "next/link";

const Footer = ({ title, type }) => {
  return (
    <footer className="max-w-[1040px] mx-[auto] px-[15px] bg-gray-800 text-white p-4 ">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 My Blog. All rights reserved.</p>
        <p>{title}</p>
        <div className="flex justify-center space-x-4">
          {type === "about" ? (
            <Link href="/" className="text-blue-400 hover:text-blue-600">
              Home
            </Link>
          ) : (
            <Link
              href="/about/page"
              className="text-blue-400 hover:text-blue-600"
            >
              About
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
