import { Address, Overview } from "../../components";
import icons from "../../ultils/icons";

const { CameraAltIcon } = icons;

const CreatePost = () => {
  return (
    <div className="px-6">
      <h1 className="font-medium text-3xl py-4 border-b border-gray-200">
        Đăng tin mới
      </h1>
      <div className="flex gap-4">
        <div className="py-4 flex flex-col flex-auto gap-8">
          <Address />
          <Overview />
          <div className="w-full">
            <h2 className="font-semibold text-xl py-4">Hình ảnh</h2>
            <small>Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn</small>
            <div className="w-full">
              <label
                htmlFor="file"
                className="w-full flex flex-col gap-4 items-center justify-center border-2 h-[200px] my-4 border-dashed border-gray-400 rounded-md"
              >
                <CameraAltIcon className="text-blue-400" fontSize="large" />
                Thêm ảnh
              </label>
              <input hidden type="file" id="file" />
            </div>
          </div>
        </div>
        <div className="w-[30%] flex-none">Map</div>
      </div>
    </div>
  );
};

export default CreatePost;
