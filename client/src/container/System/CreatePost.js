import { Address, Overview } from "../../components";

const CreatePost = () => {
  return (
    <div className="px-6">
      <h1 className="font-medium text-3xl py-4 border-b border-gray-200">
        Đăng tin mới
      </h1>
      <div className="flex gap-4">
        <div className="py-4 flex flex-col flex-auto gap-4">
          <Address />
          <Overview />
        </div>
        <div className="w-[30%] flex-none">Map</div>
      </div>
    </div>
  );
};

export default CreatePost;
