import { request } from "@/configs";
import { RequestType } from "@/types";

import urls from "./urls";

const apis = {
  login: ({ data }: RequestType) =>
    request({
      method: "POST",
      url: urls.login,
      data,
    }),
  register: ({ data }: RequestType) =>
    request({
      method: "POST",
      url: urls.register,
      data,
    }),
  verifyEmailAndCreatePassword: ({ data }: RequestType) =>
    request({
      method: "POST",
      url: urls.verifyEmailAndCreatePassword,
      data,
    }),
  forgotPassword: ({ data }: RequestType) =>
    request({
      method: "POST",
      url: urls.forgotPassword,
      data,
    }),
  resetPassword: ({ data }: RequestType) =>
    request({
      method: "POST",
      url: urls.resetPassword,
      data,
    }),

  getSelf: ({ data }: RequestType) =>
    request({
      method: "POST",
      url: urls.getSelf,
      data,
    }),
};

export default apis;
