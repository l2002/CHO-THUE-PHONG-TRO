import { Button, InputForm } from "../../component";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();

  const [isRegister, setIsRegiter] = useState(location.state?.flag);
  useEffect(() => {
    setIsRegiter(location.state?.flag);
  }, [location.state?.flag]);

  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
      <h3 className="font-semibold text-2xl mb-3">
        {isRegister ? "Đăng ký tài khoản" : "Đăng nhập"}
      </h3>
      <div className="w-full flex flex-col gap-5">
        {isRegister && <InputForm label={"Họ tên"} />}
        <InputForm label={"Số điện thoại"} />
        <InputForm label={"Mật khẩu"} />
        <Button
          text={isRegister ? "Đăng ký" : "Đăng nhập"}
          bgColor="bg-secondary2"
          textColor="text-white"
          fullWidth
        />
      </div>
      <div className="mt-7 flex items-center justify-between">
        {isRegister ? (
          <small>
            Bạn đã có tài khoản?{" "}
            <span
              className="text-blue-500 hover:underline cursor-pointer"
              onClick={() => {
                setIsRegiter(false);
              }}
            >
              Đăng nhập ngay
            </span>
          </small>
        ) : (
          <>
            <small className="text-[blue] hover:text-[orange] cursor-pointer">
              Bạn quên mật khẩu?
            </small>
            <small
              onClick={() => {
                setIsRegiter(true);
              }}
              className="text-[blue] hover:text-[orange] cursor-pointer"
            >
              Tạo tài khoản mới
            </small>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
