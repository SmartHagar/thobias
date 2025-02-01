/** @format */

import Pusher from "pusher-js";

export const pusher = new Pusher("1d7d4753d6d8e40f6edf", {
  cluster: "ap1",
  forceTLS: true,
});
