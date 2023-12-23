// import logo from "../../assets/logo-pv.png";
import { FaFacebookF , FaGithub ,FaLinkedinIn  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#222935]  md:p-6 p-6">
      <footer className="footer md:p-6 text-white max-w-7xl mx-auto">
        <aside>
          <p className="hidden md:block text-white">
            <span className="text-3xl font-bold">Task Tool</span>
          </p>
          <p>
            <span className="text-xl">Task Submission Inc</span>
            <br />
            <address>Uttar bishil, block-D, section-1, Mirpur Dhaka-1207</address>
          </p>
        </aside>
        <nav className="">
          <header className="footer-title text-white">Company</header>
          <a className="/home">Home</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Blog</a>
          <a className="/login">Login</a>
          <a className="link link-hover">Register</a>
        </nav>
        <nav>
          <header className="footer-title text-white">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title text-white">Social</header>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.facebook.com/wdmamun75" target="blank" className="border p-2 rounded-full cursor-pointer"><FaFacebookF></FaFacebookF></a>
            <a href="https://github.com/almamun168652" target="blank" className="border p-2 rounded-full"><FaGithub></FaGithub></a>
            <a href="https://www.linkedin.com/in/al-mamun-30a5842a4/" target="blank" className="border p-2 rounded-full"><FaLinkedinIn></FaLinkedinIn></a>
          
          </div>
        </nav>
      </footer>
      <p className="text-center text-sm text-white pb-3">
        Copyright © 2023 - All right reserved by Task Tool Inc Ltd
      </p>
    </div>
  );
};

export default Footer;
