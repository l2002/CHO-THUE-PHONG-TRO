import { useState } from "react";
import { Address, Overview } from "../../components";
import icons from "../../ultils/icons";
import { apiUploadImages } from "../../services";

const { CameraAltIcon } = icons;

const CreatePost = () => {
  const [payload, setPayload] = useState({
    categoryCode: "",
    title: "",
    priceNumber: 0,
    areaNumber: 0,
    images: "",
    address: "",
    priceCode: "",
    areaCode: "",
    description: "",
    target: "",
    province: "",
  });

  const [imagePreview, setImagePreview] = useState([]);
  console.log(payload);

  const handleFiles = async (e) => {
    e.stopPropagation();
    let images = [];
    const files = e.target.files;
    const formData = new FormData();

    for (let i of files) {
      formData.append("file", i);
      formData.append(
        "upload_preset",
        process.env.REACT_APP_UPLOAD_ASSETS_NAME,
      );

      const response = await apiUploadImages(formData);
      if (response.status === 200)
        images = [...images, response.data?.secure_url];
      setImagePreview(images);
      setPayload((prev) => ({ ...prev, images: JSON.stringify(images) }));
    }
  };

  return (
    <div className="px-6">
      <h1 className="font-medium text-3xl py-4 border-b border-gray-200">
        Đăng tin mới
      </h1>
      <div className="flex gap-4">
        <div className="py-4 flex flex-col flex-auto gap-8">
          <Address payload={payload} setPayload={setPayload} />
          <Overview payload={payload} setPayload={setPayload} />
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
              <input
                onChange={handleFiles}
                hidden
                type="file"
                id="file"
                multiple
              />
              <div className="w-full">
                <h3 className="font-medium">Preview</h3>
                <div className="flex gap-4 items-center">
                  {imagePreview?.map((item) => {
                    return (
                      <img
                        key={item}
                        src={item}
                        alt="preview"
                        className="w-1/3 h-1/3 object-cover rounded-md"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] flex-none">Map</div>
      </div>
    </div>
  );
};

export default CreatePost;
