import Image from "next/image";
import Logo from "../../assets/logo.svg";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { PiFilmSlate } from "react-icons/pi";
import { MdOutlineSportsMartialArts } from "react-icons/md";

// import { TbCategory } from "react-icons/tb";
const Header = () => {
  return (
    <header>
      <Link href="/">
        <Image src={Logo} className="logo" alt="logo" />
      </Link>

      <nav className="mt-5">
        <ul>
          <li>
            <Link href="#">
              <span className="icon">
                <AiOutlineHome />
              </span>
               <span className="title">Home</span>
              
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="icon">
                <IoSearch />
              </span>
              <span className="title">Search</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="icon">
                <PiTelevisionSimpleBold />
              </span>
              <span className="title">Tv</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="icon">
                <PiFilmSlate />
              </span>
              <span className="title">Movies</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className="icon">
                <MdOutlineSportsMartialArts />
              </span>
              <span className="title">Sports</span>
            </Link>
          </li>
          {/* <li>
            <Link href="#"><span><TbCategory/></span>Categories</Link>
        </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
