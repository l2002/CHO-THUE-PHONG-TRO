export const path = {
  HOME: "/*",
  LOGIN: "login",
  NHA_NGUYEN_CAN: "nha-nguyen-can",
  CAN_HO_MINI: "can-ho-mini",
  CAN_HO_DICH_VU: "can-ho-dich-vu",
  CAN_HO_CHUNG_CU: "can-ho-chung-cu",
};

export const formatVietnameseToString = (keyword) => {
  return keyword
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(" ")
    .join("-");
};
