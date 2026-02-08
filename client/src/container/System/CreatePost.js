import { useEffect, useState } from "react";
import { Address, Button, Loading, Overview } from "../../components";
import icons from "../../ultils/icons";
import { apiCreatePost, apiUploadImages } from "../../services";
import { useSelector } from "react-redux";
import { getCodesAreas, getCodesPrice } from "../../ultils/Common/getCodes";
import Swal from "sweetalert2";
import validate from "../../ultils/Common/validateFields";

const { CameraAltIcon, DeleteIcon } = icons;

const CreatePost = ({ isEdit }) => {
  const { dataEdit } = useSelector((state) => state.post);
  const [payload, setPayload] = useState(() => {
    const initData = {
      categoryCode: dataEdit?.categoryCode || "",
      title: dataEdit?.title || "",
      priceNumber: dataEdit?.priceNumber * 1000000 || 0,
      areaNumber: dataEdit?.areaNumber || 0,
      images: dataEdit?.images || "",
      address: dataEdit?.address || "",
      priceCode: dataEdit?.priceCode || "",
      areaCode: dataEdit?.areaCode || "",
      description: dataEdit?.description || "",
      target: dataEdit?.target || "",
      province: dataEdit?.province || "",
    };
    return initData;
  });

  const [imagePreview, setImagePreview] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { prices, areas, categories } = useSelector((state) => state.app);
  const { currentData } = useSelector((state) => state.user);
  const [invalidFields, setInvalidFields] = useState([]);

  useEffect(() => {
    if (dataEdit) {
      let images = JSON.parse(dataEdit?.images?.image);
      images && setImagePreview(images);
    }
  }, [dataEdit]);

  const handleFiles = async (e) => {
    e.stopPropagation();
    setIsLoading(true);
    let images = [];
    const files = e.target.files;
    const formData = new FormData();

    for (let i of files) {
      formData.append("file", i);
      formData.append(
        "upload_preset",
        process.env.REACT_APP_UPLOAD_ASSETS_NAME,
      );
      let response = await apiUploadImages(formData);
      if (response.status === 200)
        images = [...images, response.data?.secure_url];
    }

    setIsLoading(false);
    setImagePreview((prev) => [...prev, ...images]);
    setPayload((prev) => ({
      ...prev,
      images: [...prev.images, ...images],
    }));
  };

  const handelDelete = (image) => {
    setImagePreview((prev) => prev?.filter((item) => item !== image));
    setPayload((prev) => ({
      ...prev,
      images: prev.images?.filter((item) => item !== image),
    }));
  };

  const handleSubmit = async () => {
    let priceCodeArr = getCodesPrice(
      +payload.priceNumber / Math.pow(10, 6),
      prices,
      1,
      15,
    );
    let priceCode = priceCodeArr[0]?.code;

    let areaCodeArr = getCodesAreas(+payload.areaNumber, areas, 20, 90);
    let areaCode = areaCodeArr[0]?.code;

    let finalPayload = {
      ...payload,
      priceCode,
      areaCode,
      userId: currentData.id,
      priceNumber: +payload.priceNumber / Math.pow(10, 6),
      target: payload.target || "Tất cả",
      label: `${categories?.find((item) => item.code === payload?.categoryCode)?.value} ${payload?.address?.split(",")[0]}`,
    };

    const result = validate(finalPayload, setInvalidFields);
    if (result === 0) {
      const response = await apiCreatePost(finalPayload);
      if (response?.data.err === 0) {
        Swal.fire("Thành công", "Đã thêm bài đăng mới", "success").then(() => {
          setPayload({
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
        });
      } else {
        Swal.fire("Oops!", "Có lỗi gì đó", "error");
      }
    }
  };

  return (
    <div className="px-6">
      <h1 className="font-medium text-3xl py-4 border-b border-gray-200">
        {isEdit ? "Chỉnh sửa tin đăng" : "Đăng tin mới"}
      </h1>
      <div className="flex gap-4">
        <div className="py-4 flex flex-col flex-auto gap-8">
          <Address
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
            payload={payload}
            setPayload={setPayload}
          />
          <Overview
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
            payload={payload}
            setPayload={setPayload}
          />
          <div className="w-full mb-6">
            <h2 className="font-semibold text-xl py-4">Hình ảnh</h2>
            <small>Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn</small>
            <div className="w-full">
              <label
                onFocus={() => setInvalidFields([])}
                htmlFor="file"
                className="w-full gap-4 flex flex-col items-center justify-center border-2 h-[200px] my-4 border-dashed border-gray-400 rounded-md"
              >
                {isLoading ? (
                  <Loading />
                ) : (
                  <div className="flex flex-col items-center">
                    <CameraAltIcon className="text-blue-400" fontSize="large" />
                    Thêm ảnh
                  </div>
                )}
              </label>
              <small className="text-red-500 block w-full">
                {invalidFields?.some((item) => item.name === "images") &&
                  invalidFields?.find((item) => item.name === "images")
                    ?.message}
              </small>
              <input
                onChange={handleFiles}
                hidden
                type="file"
                id="file"
                multiple
              />
              <div className="w-full">
                <h3 className="font-medium">Ảnh đã chọn</h3>
                <div className="flex gap-4 items-center">
                  {imagePreview?.map((item) => {
                    return (
                      <div key={item} className="relative">
                        <img
                          src={item}
                          alt="preview"
                          className="w-52 h-80 object-cover rounded-md"
                        />
                        <span
                          onClick={() => handelDelete(item)}
                          title="Xóa"
                          className="absolute top-0 right-0 p-2 bg-gray-300 hover:bg-gray-400 rounded-full cursor-pointer"
                        >
                          <DeleteIcon />
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <Button
            onClick={handleSubmit}
            text="Tạo mới"
            bgColor="bg-green-600"
            textColor="text-white"
          />
        </div>
        <div className="w-[30%] flex-none">Map</div>
      </div>
    </div>
  );
};

export default CreatePost;
