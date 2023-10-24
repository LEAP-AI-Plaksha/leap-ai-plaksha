import Image from "next/image";
import leap_logo from "@/media/images/leap_logo.svg";
import Link from "next/link";
const TopNav = () => {
  return (
    <div className="p-3">
      <Link href="/">
        <Image src={leap_logo} width={100} alt="Picture of the author" />
      </Link>
    </div>
  );
};

export default TopNav;
