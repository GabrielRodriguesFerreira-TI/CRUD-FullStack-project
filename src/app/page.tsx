import Link from "next/link";
import Image from "next/image";
import "../Sass/global/responsiviness.scss";
import clientHub from "../assets/ClientHub logo.svg";

export default function Home() {
  return (
    <main className="flex flex-col window">
      <nav className="flex justify-between items-center bg-[#ffffffc1] fixed top-0 left-0 right-0">
        <div>
          <Image src={clientHub} alt="Logo do site" />
        </div>
        <Link className="font-size-text text-black font-bold" href={""}>
          Login
        </Link>
      </nav>
    </main>
  );
}
