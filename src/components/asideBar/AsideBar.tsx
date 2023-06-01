"use client";
import { iProps } from "@/interfaces/customers/customers.types";
import {
  Drawer,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { UserCircleIcon, PowerIcon } from "@heroicons/react/24/solid";
import { Avatar } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { ClientContext } from "@/contexts/clientContext";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";

export const AsideBarComponent = ({ data }: iProps) => {
  const { open, setOpen, setIsMenuOpen } = useContext(ClientContext);
  const closeDrawer = () => {
    setOpen(false);
    setIsMenuOpen(false);
  };

  const router = useRouter();
  const APIurl = "https://contact-connect-api-prod.herokuapp.com";

  const logoutClient = async (accessToken: string) => {
    const cookies = new Cookies();

    try {
      const response = await fetch(
        `${APIurl}/logout?accessToken=${accessToken}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          credentials: "same-origin",
        }
      );
      if (response.ok) {
        cookies.remove("accessToken");
        cookies.remove("refreshToken");
        router.replace("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <aside>
      <Drawer
        open={open}
        onClose={closeDrawer}
        className="flex flex-col justify-between p-4"
      >
        <div>
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Menu
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <XMarkIcon strokeWidth={2} className="h-5 w-5" />
            </IconButton>
          </div>
          <div className="flex flex-row items-center gap-2 w-full">
            <Avatar
              src={
                data.imageProfile
                  ? `${data.imageProfile}`
                  : "https://www.gov.br/cdn/sso-status-bar/src/image/user.png"
              }
              alt="avatar"
              size="lg"
            />
            <Typography variant="h6" color="blue-gray">
              {data.fullName}
            </Typography>
          </div>
        </div>
        <List>
          <ListItem className="p-0 py-4">
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Perfil
          </ListItem>
          <ListItem
            className="p-0 py-3"
            onClick={() => logoutClient(data.accessToken)}
          >
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Sair
          </ListItem>
        </List>
      </Drawer>
    </aside>
  );
};
