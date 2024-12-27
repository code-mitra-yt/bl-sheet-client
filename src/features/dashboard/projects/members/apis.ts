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
  inviteMember: ({ authToken, data }: RequestType) =>
    request({
      method: "POST",
      url: urls.inviteMember,
      authToken,
      data,
    }),
  changeInvitationStatus: ({ authToken, data }: RequestType) =>
    request({
      method: "PATCH",
      url: urls.changeInvitationStatus,
      authToken,
      data,
    }),
  removeMember: ({ authToken, data }: RequestType) =>
    request({
      method: "DELETE",
      url: urls.removeMember,
      authToken,
      data,
    }),
  updateMembr: ({ authToken, data }: RequestType) =>
    request({
      method: "PATCH",
      url: urls.updateMember,
      authToken,
      data,
    }),
};

export default apis;
