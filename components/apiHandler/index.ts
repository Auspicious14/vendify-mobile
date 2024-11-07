import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IRequestSchema } from "./model";
import { showMessage } from "react-native-flash-message";

// const tokenSecret = process.env.JWT_SECRET;

export const apiReqHandler = async ({
  endPoint,
  payload,
  method,
}: IRequestSchema) => {
  let reqConfig = {
    url: endPoint,
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };

  const bearerAuth: any = await AsyncStorage.getItem("token");
  if (bearerAuth) {
    // @ts-ignore
    reqConfig.headers.Authorization = `Bearer ${bearerAuth}`;
  }

  if (payload) {
    // @ts-ignore
    reqConfig.data = payload;
  }

  try {
    const res = await axios(reqConfig);

    if (!res) showMessage({ message: "Error sending request", type: "danger" });

    if (res && res.data.status === "Error")
      showMessage({ message: res.data.data, type: "danger" });

    if (res?.data?.status === "OK")
      showMessage({ message: "Success", type: "success" });

    return {
      res: res ? res : null,
    };
  } catch (err: any) {
    showMessage({ message: err.response, type: "danger" });
    return { res: null };
  }
};
