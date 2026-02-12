import React, { useState } from "react";
import { Button, InputFormV2, InputReadOnly } from "../../components";
import avatar from "../../assets/avatar-facebook-mac-dinh-2.jpg";
import { useSelector } from "react-redux";
import { apiUpdateUser, apiUploadImages } from "../../services";
import Swal from "sweetalert2";

const EditAccount = () => {
  const { currentData } = useSelector((state) => state.user);
  const [payload, setPayload] = useState({
    name: currentData?.name || "",
    avatar: currentData?.avatar || "",
    fbUrl: currentData?.fbUrl || "",
    zalo: currentData?.zalo || "",
  });

  const handleSubmit = async () => {
    const response = await apiUpdateUser(payload);
    if (response?.data.err === 0) {
      Swal.fire("Thành công", "Cập nhật thành công", "success");
    } else {
      Swal.fire("Oops!", "Có lỗi gì đó", "error");
    }
  };

  const handleUploadFile = async (e) => {
    const imgaes = e.target.files[0];
    const formData = new FormData();

    formData.append("file", imgaes);
    formData.append("upload_preset", process.env.REACT_APP_UPLOAD_ASSETS_NAME);
    const response = await apiUploadImages(formData);
    if (response.status === 200) {
      setPayload((prev) => ({
        ...prev,
        avatar: response?.data.secure_url,
      }));
    }
  };
  return (
    <div className="flex flex-col h-full items-center">
      <h1 className="font-medium text-start w-full py-4 text-3xl border-b border-gray-200">
        Chỉnh sửa thông tin cá nhân
      </h1>
      <div className="w-3/5 flex items-center justify-center flex-auto">
        <div className="py-6 flex flex-col gap-4 w-full">
          <InputReadOnly
            direction="flex-row"
            label="Mã thành viên"
            value={`#${currentData?.id?.match(/\d/g).join("").slice(0, 6)}`}
          />
          <InputReadOnly
            direction="flex-row"
            label="Số điện thoại"
            value={currentData?.phone}
            editPhone
          />
          <InputFormV2
            name="name"
            setValue={setPayload}
            label="Tên hiển thị"
            direction="flex-row"
            value={payload.name}
          />
          <InputFormV2
            name="zalo"
            setValue={setPayload}
            label="Zalo"
            direction="flex-row"
            value={payload.zalo}
          />
          <InputFormV2
            name="fbUrl"
            setValue={setPayload}
            label="Facebook"
            direction="flex-row"
            value={payload.fbUrl}
          />
          <div className="flex">
            <label className="w-48 flex-none" htmlFor="password">
              Mật khẩu
            </label>
            <small className="flex-auto h-12 text-blue-500 cursor-pointer">
              Đổi mật khẩu
            </small>
          </div>
          <div className="flex mb-6">
            <label className="w-48 flex-none" htmlFor="avatar">
              Ảnh đại diện
            </label>
            <div>
              <img
                src={payload.avatar || avatar}
                alt="avatar"
                className="w-28 h-28 rounded-full object-cover"
              />
              <input
                onChange={handleUploadFile}
                className="appearance-none my-4"
                type="file"
                id="avatar"
              />
            </div>
          </div>
          <Button
            text="Cập nhật"
            bgColor="bg-blue-600"
            textColor="text-white"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default EditAccount;
