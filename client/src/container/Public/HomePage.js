import { text } from "../../ultils/constant";
import Province from "../../components/Province";
import { List } from "./index";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold">{text.HOME_TITLE}</h1>
        <p className="text-base text-gray-700">{text.HOME_DESCRIPTION}</p>
      </div>
      <Province />
      <div className="w-full flex gap-4">
        <div className="w-[70%]">
          <List />
        </div>
        <div className="w-[30%] border border-green-700">Sidebar</div>
      </div>
    </div>
  );
};

export default HomePage;
