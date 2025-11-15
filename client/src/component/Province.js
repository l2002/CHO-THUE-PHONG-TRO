import ProvinceBtn from "./ProvinceBtn";
import { location } from "../ultils/constant";

const Province = () => {
  return (
    <div className="flex items-center justify-center shadow-md py-5 gap-5">
      {location.map((item) => {
        return (
          <ProvinceBtn key={item.id} image={item.image} name={item.name} />
        );
      })}
    </div>
  );
};

export default Province;
