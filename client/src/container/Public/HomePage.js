import { text } from "../../ultils/constant";
import Province from "../../component/Province";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold">{text.HOME_TITLE}</h1>
        <p className="text-base text-gray-700">{text.HOME_DESCRIPTION}</p>
      </div>
      <Province />
    </div>
  );
};

export default HomePage;
