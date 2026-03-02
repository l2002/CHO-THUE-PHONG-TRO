import anonAvatar from "../assets/avatar-facebook-mac-dinh-2.jpg";
import icons from "../ultils/icons";

const { FiberManualRecordIcon, PhoneIcon, WhatsAppIcon } = icons;

const BoxInfo = ({ userData }) => {
  return (
    <div className="w-full rounded-md flex flex-col items-center p-4 gap-4 bg-yellow-500">
      <img
        src={anonAvatar}
        alt="avatar"
        className="w-16 h-16 object-contain rounded-full"
      />
      <h3 className="font-medium text-xl">{userData?.name}</h3>
      <span className="flex items-center">
        <FiberManualRecordIcon fontSize="inherit" color="success" />
        <span>Đang hoạt động</span>
      </span>

      <a
        className="bg-[#10b981] py-2 flex items-center justify-center gap-2 w-full rounded-md text-white font-bold text-xl"
        href="#"
      >
        <PhoneIcon />
        {userData?.phone}
      </a>

      <a
        className="bg-[#0d6efd] py-2 flex items-center justify-center gap-2 w-full rounded-md text-white font-bold text-xl"
        href={userData?.zalo}
        target="_blank"
      >
        <WhatsAppIcon />
        Nhắn zalo
      </a>
    </div>
  );
};

export default BoxInfo;
