export interface iClient {
  fullName: string;
  _id: string;
  emails: string[];
  telephones: string[];
  contacts: string[];
  createdAt: string;
  updatedAt: string;
  imageProfile?: string;
  accessToken: string;
}

export interface iProps {
  data: iClient;
}

export interface iLogoutProps {
  accessToken: string;
}
