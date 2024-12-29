import { request } from "@/configs";
import { RequestType } from "@/types";

import urls from "./urls";

const apis = {
  getTask: ({ params, authToken }: RequestType) =>
    request({
      method: "GET",
      url: urls.getTask,
      authToken,
      params,
    }),
  getTasks: ({ authToken, params }: RequestType) =>
    request({
      method: "GET",
      url: urls.getTasks,
      authToken,
      params,
    }),
  createTask: ({ authToken, data }: RequestType) =>
    request({
      method: "POST",
      url: urls.createTask,
      authToken,
      data,
    }),
  updateTask: ({ authToken, data }: RequestType) =>
    request({
      method: "PATCH",
      url: urls.updateTask,
      authToken,
      data,
    }),
  deleteTask: ({ authToken, data }: RequestType) =>
    request({
      method: "DELETE",
      url: urls.deleteTask,
      authToken,
      data,
    }),
  assignMember: ({ authToken, data }: RequestType) =>
    request({
      method: "POST",
      url: urls.assignMember,
      authToken,
      data,
    }),
  removeAssignedMember: ({ authToken, data }: RequestType) =>
    request({
      method: "POST",
      url: urls.removeAssignedMember,
      authToken,
      data,
    }),
};

export default apis;