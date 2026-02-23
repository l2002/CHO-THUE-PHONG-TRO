import icons from "./icons";

const { AddCircleIcon, EditNoteIcon, AccountCircleIcon } = icons;

const menuSidebar = [
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
    text: "Sửa thông tin cá nhân",
    path: "/he-thong/sua-thong-tin-ca-nhan",
    icon: <AccountCircleIcon />,
  },
  {
    id: 4,
    text: "Liên hệ",
    path: "/lien-he",
    icon: <AccountCircleIcon />,
  },
];

export default menuSidebar;
