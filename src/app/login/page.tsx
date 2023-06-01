import "../../Sass/global/responsiviness.scss";
import Image from "next/image";
import Link from "next/link";
import clientHub from "../../assets/ClientHub logo.svg";
import { FormComponent } from "@/components/form/Form";
import { ToastContainer } from "react-toastify";

export default function Dashboard() {
  return (
    <main className="flex flex-col window">
      <nav className="flex justify-between items-center bg-[#ffffffd5] fixed top-0 left-0 right-0">
        <div>
          <Image className="md:w-[250px]" src={clientHub} alt="Logo do site" />
        </div>
        <Link
          className="font-size-text text-[#1A4CC7] font-bold relative"
          href="/"
        >
          Homepage
        </Link>
      </nav>
      <section className="flex w-full h-full justify-center items-center">
        <FormComponent typeForm="login" />
      </section>
      <span className="absolute bottom-2 left-0 flex items-center justify-center w-full">
        <p className="text-black text-sm">
          © 2023-2023 Todos os direitos reservados
        </p>
      </span>
      <ToastContainer position="bottom-right" />
    </main>
  );
}
