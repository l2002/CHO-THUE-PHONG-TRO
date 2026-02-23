import React, { useState } from "react";
import { Button, InputForm } from "../../components";
import Swal from "sweetalert2";

const Contact = () => {
  const [payload, setPayload] = useState({ name: "", phone: "", content: "" });

  const handleSubmit = () => {
    Swal.fire(
      `Cảm ơn ${payload.name ? payload.name : ""}`,
      "Phản hồi của bạn đã được chúng tôi ghi nhận",
      "success",
    ).then(() => {
      setPayload({
        name: "",
        phone: "",
        content: "",
      });
    });
  };
  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold mb-6">Liên hệ với chúng tôi</h1>
      <div className="flex gap-4">
        <div className="flex-1 flex flex-col gap-4 rounded-3xl p-8 text-white bg-gradient-to-br from-blue-700 to-cyan-400 text-lg">
          <h4 className="font-bold">Thông tin liên hệ</h4>
          <span>
            Chúng tôi biết bạn có rất nhiều sự lựa chọn. Nhưng cảm ơn vì đã lựa
            chọn Phongtro123.com
          </span>
          <span>Điện thoại: 0917 686 101</span>
          <span>Email: cskh.Phongtro123@gmail.com</span>
          <span>Zalo: 0917 686 101</span>
          <span>Viber: 0917 686 101</span>
          <span>
            Địa chỉ: Văn phòng giao dịch: Căn 02.34, Lầu 2, Tháp 3, The Sun
            Avenue, Số 28 Mai Chí Thọ, Phường Bình Trưng, Thành phố Hồ Chí Minh,
            Việt Nam
          </span>
        </div>
        <div className="flex-1 bg-white shadow-md rounded-md p-4">
          <h4 className="font-medium text-lg mb-4">Liên hệ trực tuyến</h4>
          <div className="flex flex-col gap-6">
            <InputForm
              label="HỌ TÊN CỦA BẠN"
              value={payload.name}
              setValue={setPayload}
              keyPayload="name"
            />
            <InputForm
              label="SỐ ĐIỆN THOẠI"
              value={payload.phone}
              setValue={setPayload}
              keyPayload="phone"
            />
            <div>
              <label htmlFor="desc" className="text-xs">
                NỘI DUNG MÔ TẢ
              </label>
              <textarea
                value={payload.content}
                onChange={(e) =>
                  setPayload((prev) => ({ ...prev, content: e.target.value }))
                }
                name="content"
                className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
                id="desc"
                cols="30"
                rows="3"
              ></textarea>
            </div>
            <Button
              text="Gửi liên hệ"
              bgColor="bg-blue-500"
              textColor="text-white"
              fullWidth
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
