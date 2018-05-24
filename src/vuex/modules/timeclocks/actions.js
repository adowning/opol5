import { fetchClocks } from "@/api";

const getTimeClocks = async context => {
  let clocks = await fetchClocks();
  context.commit("SET_TIMECLOCKS", clocks);
};

const getTimeClockStatus = async (context, value) => {
  console.log(value);
  context.commit("SET_TIMECLOCK_STATUS", value);
  return value;
};

export default {
  getTimeClocks,
  getTimeClockStatus
};
