import "../../Sass/global/responsiviness.scss";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { serialize } from "cookie";
import { iClient } from "@/interfaces/customers/customers.types";
import { DashboardComponent } from "@/components/dashboard/Dashboard";

async function getData() {
  const cookiesStorage = cookies();
  const accessToken = cookiesStorage.get("accessToken");
  const decodedToken = jwt.decode(accessToken!.value);

  const APIurl = "https://contact-connect-api-prod.herokuapp.com";

  const response = await fetch(`${APIurl}/customers/${decodedToken!.sub}`, {
    next: {
      revalidate: 3600, // 1h
    },
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken!.value}`,
      Cookie: serialize("accessToken", accessToken!.value, {
        sameSite: "strict",
        secure: true,
        maxAge: 86400,
      }),
    },
    credentials: "same-origin",
  });
  const responseJson = await response.json();

  const data = {
    ...responseJson,
    accessToken: accessToken!.value,
  };

  return data;
}

export default async function Dashboard() {
  const data: iClient = await getData();

  return (
    <main className="flex flex-col window_dashboard justify-center">
      <DashboardComponent data={data} />
    </main>
  );
}
