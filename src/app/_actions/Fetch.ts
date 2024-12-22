/* eslint-disable @typescript-eslint/no-explicit-any */
import { BASE_URL } from "@/utils/constants.util";

import type { FetchOptions, FetchProps } from "./types";

const request = async ({ url, data, options, method = "GET" }: FetchProps) => {
  const fetchOptions = {
    method,
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  };

  if (method === "GET") {
    const queryParams = new URLSearchParams(data);
    url = `${url}?${queryParams.toString()}`;
  } else {
    fetchOptions.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(`${BASE_URL}${url}`, fetchOptions);
    const responseData = await response.json();

    return responseData;
  } catch (error: any) {
    throw new Error(error);
  }
};

// Fetch Methods
const get = (url: string, params?: any, options: FetchOptions = {}) => {
  return request({ url, data: params, options });
};

const post = (url: string, data?: any, options: FetchOptions = {}) => {
  return request({ url, data, options, method: "POST" });
};

const put = (url: string, data?: any, options: FetchOptions = {}) => {
  return request({ url, data, options, method: "PUT" });
};

const patch = (url: string, data?: any, options: FetchOptions = {}) => {
  return request({ url, data, options, method: "PATCH" });
};

const del = (url: string, data?: any, options: FetchOptions = {}) => {
  return request({ url, data, options, method: "DELETE" });
};

export const generateErrorResponse = (messages: string[]) => {
  return {
    success: false,
    messages,
  };
};

const Fetch = {
  get,
  post,
  put,
  patch,
  delete: del,
};

export default Fetch;
