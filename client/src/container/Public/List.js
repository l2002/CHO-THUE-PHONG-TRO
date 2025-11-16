import { Button } from "../../components";
import { Item } from "../../components";

const List = () => {
  return (
    <div className="w-full border rounded-md p-2 bg-white shadow-md">
      <div className="flex items-center justify-between my-3">
        <h4 className="text-xl font-semibold">Danh sách tin đăng</h4>
        <span>Cập nhật: 13:00 16/11/2025</span>
      </div>
      <div className="flex items-center gap-2 my-2">
        <span>Sắp xếp:</span>
        <Button bgColor="bg-gray-200" text="Đề xuất" />
        <Button bgColor="bg-gray-200" text="Mới đăng" />
        <Button bgColor="bg-gray-200" text="Có video" />
      </div>
      <div>
        <Item />
      </div>
    </div>
  );
};

export default List;
