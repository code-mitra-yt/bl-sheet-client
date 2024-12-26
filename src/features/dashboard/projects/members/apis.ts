import { request } from "@/configs";
import { RequestType } from "@/types";

import urls from "./urls";

const apis = {
  getMembers: ({ params, authToken }: RequestType) =>
    request({
      method: "GET",
      url: urls.getMembers,
      authToken,
      params,
    }),
};

export default apis;
