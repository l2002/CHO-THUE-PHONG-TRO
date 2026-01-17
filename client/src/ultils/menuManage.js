import icons from "./icons";

const { AddCircleIcon, EditNoteIcon, AccountCircleIcon } = icons;

const menuMange = [
  {
    id: 1,
    text: "Đăng tin cho thuê",
    path: "/system/create-new",
    icon: <AddCircleIcon />,
  },
  {
    id: 2,
    text: "Quản lý tin đăng",
    path: "/system/manage-post",
    icon: <EditNoteIcon />,
  },
  {
    id: 3,
    text: "Thông tin tài khoản",
    path: "/system/profile",
    icon: <AccountCircleIcon />,
  },
];

export default menuMange;
