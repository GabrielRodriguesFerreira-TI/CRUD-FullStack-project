import Link from "next/link";
import Image from "next/image";
import "../Sass/global/responsiviness.scss";
import clientHub from "../assets/ClientHub logo.svg";

export default function Home() {
  return (
    <main className="flex flex-col window">
      <nav className="flex justify-between items-center bg-[#ffffffd5] fixed top-0 left-0 right-0">
        <div>
          <Image className="md:w-[250px]" src={clientHub} alt="Logo do site" />
        </div>
        <Link
          className="font-size-text text-[#1A4CC7] font-bold relative"
          href="/login"
        >
          Login
        </Link>
      </nav>
      <section className="flex w-full h-full justify-center items-center">
        <div className="relative flex flex-col items-center gap-10 border-2 border-black homePageDescription rounded-md bg-[#ffffffb0] w-full max-w-[550px] lg:max-w-[650px] md:left-[120px] md:top-[100px] lg:left-[150px] lg:top-[100px] lg:gap-16">
          <h1 className="text-black font-bold">
            Simplifique sua gestão de clientes e contatos com o ClientHub.
          </h1>
          <Link
            className="flex justify-center border-2 border-[#1A4CC7] rounded-md w-full font-bold text-[#1A4CC7] md:w-[70%] hover:bg-[#1A4CC7] hover:text-white hover:shadow-blue transition-all duration-300 ease-in-out"
            href="/register"
          >
            Registre-se
          </Link>
        </div>
      </section>
      <span className="absolute bottom-2 left-0 flex items-center justify-center w-full">
        <p className="text-black text-sm">
          © 2023-2023 Todos os direitos reservados
        </p>
      </span>
    </main>
  );
}
