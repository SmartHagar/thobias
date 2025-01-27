/** @format */

import axios from "axios";

const BASE_URL = "http://localhost:8000";
// const BASE_URL = "https://d9c9-182-3-166-192.ngrok-free.app";
const url_auth = `${BASE_URL}/auth`;
const url_api = `${BASE_URL}/api`;
const url_crud = `${BASE_URL}/crud`;
const url_storage = `${BASE_URL}/storage`;
const MIDTRANS_CLIENT_KEY = "SB-Mid-client-5OBFIAQmrykHG7-9";

const auth = axios.create({
  baseURL: url_auth,
});
const crud = axios.create({
  baseURL: url_crud,
});
const api = axios.create({
  baseURL: url_api,
});

const storage = axios.create({
  baseURL: url_storage,
});

export {
  auth,
  crud,
  api,
  storage,
  BASE_URL,
  url_auth,
  url_api,
  url_crud,
  url_storage,
  MIDTRANS_CLIENT_KEY,
};
