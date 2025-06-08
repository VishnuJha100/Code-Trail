import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-white px-20 font-mono text-gray-700">
      <div>
        <h1 className="text-5xl">Code Trail</h1>
      </div>
      <div className="py-10 flex justify-between">
        <div className="flex flex-col gap-4">
          <div>
            <p>+1 2345 6789</p>
            <p>jhavishnu100@gmail.com</p>
          </div>
          <div>
            <p>500 Terry Franchise</p>
            <p>Street, 1st floor</p>
            <p>Dankuni, 712311</p>
          </div>
          <div className="flex gap-1">
            <Link to="#">
              <FaFacebookF />
            </Link>
            <Link to="#">
              <FaInstagram />
            </Link>
            <Link to="#">
              <FaSquareXTwitter />
            </Link>
            <Link to="#">
              <FaWhatsapp />
            </Link>
          </div>
        </div>
        <div className="">
            <div className="flex flex-col gap-2">
                <Link to='#'>Privacy Policy</Link>
                <Link to='#'>Accessibility statement</Link>
                <Link to='#'>Terms & Condition</Link>
            </div>
            <div className="py-5">
                <p>© 2025 by Code Trail. Developed by Vishnu Jha</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
