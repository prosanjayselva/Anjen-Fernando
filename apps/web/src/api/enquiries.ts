import axios from "axios";

export type EnquiryPayload = {
  audience: "corporate" | "institution";
  name: string;
  organisation: string;
  designation: string;
  mobile: string;
  email: string;
  programInterest: string;
  message: string;
};

const api = axios.create({
  baseURL: "http://localhost:4000/api"
});

export const submitEnquiry = async (payload: EnquiryPayload) => {
  const { data } = await api.post("/enquiries", payload);
  return data;
};
