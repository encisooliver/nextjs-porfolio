import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-7">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {/* Column 1: Logo/Brand */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold">OLIVER</h2>
            <p className="text-gray-400 mt-2">SOFTWARE ENGINEER</p>
          </div>

          {/* Column 2: Navigation Menu */}
          <div className="flex flex-col md:items-center">
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link href="/">
                    <span className="hover:text-gray-300">Projects</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className="hover:text-gray-300">Skills</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className="hover:text-gray-300">Contact</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Column 3: Social Media Icons */}
          <div className="flex justify-start md:justify-end space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.778-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.772-1.63 1.563v1.873h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.348 3.608 1.324.975.975 1.261 2.242 1.324 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.07 4.85c-.062 1.366-.348 2.633-1.324 3.608-.975.975-2.242 1.261-3.608 1.324-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.07c-1.366-.062-2.633-.348-3.608-1.324-.975-.975-1.261-2.242-1.324-3.608C2.174 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.348-2.633 1.324-3.608C4.532 2.511 5.799 2.225 7.165 2.163 8.431 2.105 8.811 2.094 12 2.094m0-2.163C8.691 0 8.273.011 7.052.07 5.845.127 4.74.464 3.86 1.344c-.88.88-1.217 1.986-1.275 3.192-.059 1.221-.07 1.639-.07 4.848s.011 3.627.07 4.848c.058 1.206.395 2.312 1.275 3.192.88.88 1.986 1.217 3.192 1.275 1.221.059 1.639.07 4.848.07s3.627-.011 4.848-.07c1.206-.058 2.312-.395 3.192-1.275.88-.88 1.217-1.986 1.275-3.192.059-1.221.07-1.639.07-4.848s-.011-3.627-.07-4.848c-.058-1.206-.395-2.312-1.275-3.192-.88-.88-1.986-1.217-3.192-1.275C15.627.011 15.209 0 12 0z" />
                <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-8.002 3.999 3.999 0 0 1 0 8.002zM18.406 4.594a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()} My Brand. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
