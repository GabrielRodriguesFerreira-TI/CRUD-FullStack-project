import Image from "next/image";
import clientHub from "../../assets/ClientHub logo.svg";
import { iProps } from "@/interfaces/customers/customers.types";
import { MenuIconComponent } from "../menuIcon/MenuIcon";
import { AsideBarComponent } from "../asideBar/AsideBar";

export const DashboardComponent = ({ data }: iProps) => {
  return (
    <>
      <nav className="flex justify-between items-center bg-[#ffffffd5] fixed top-0 left-0 right-0 md:hidden">
        <div>
          <Image className="md:w-[250px]" src={clientHub} alt="Logo do site" />
        </div>
        <MenuIconComponent />
      </nav>
      <AsideBarComponent data={data} />
      <h1>{data.fullName}</h1>
    </>
  );
};
