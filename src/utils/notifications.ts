import { toast } from "react-hot-toast";

export const successAlert = (msg: string) => {
  toast.success(msg);
};

export const errorAlert = (msg: string) => {
  toast.error(msg);
};
