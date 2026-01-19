import icons from "./icons";

const { AddCircleIcon, EditNoteIcon, AccountCircleIcon } = icons;

const menuMange = [
  {
    id: 1,
    text: "Đăng tin cho thuê",
    path: "/he-thong/tao-moi-bai-dang",
    icon: <AddCircleIcon />,
  },
  {
    id: 2,
    text: "Quản lý tin đăng",
    path: "/he-thong/quan-ly-bai-dang",
    icon: <EditNoteIcon />,
  },
  {
    id: 3,
    text: "Thông tin tài khoản",
    path: "/he-thong/thong-tin-tai-khoan",
    icon: <AccountCircleIcon />,
  },
];

export default menuMange;
