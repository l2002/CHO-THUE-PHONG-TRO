export const path = {
  HOME: "/*",
  LOGIN: "login",
  NHA_NGUYEN_CAN: "nha-nguyen-can",
  CAN_HO_MINI: "can-ho-mini",
  CAN_HO_DICH_VU: "can-ho-dich-vu",
  CAN_HO_CHUNG_CU: "can-ho-chung-cu",
};

export const text = {
  HOME_TITLE: "Kênh thông tin Phòng Trọ số 1 Việt Nam",
  HOME_DESCRIPTION:
    "Kênh thông tin Phòng Trọ số 1 Việt Nam - Website dăng tin cho thuê phòng trọ, nhà nguyên căn, căn hộ, ở ghép nhanh, hiệu quả với  100.000+ tin đăng 2.500.000 lượt xem mỗi tháng. và ",
};

export const formatVietnameseToString = (keyword) => {
  return keyword
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(" ")
    .join("-");
};
