import { Button, InputForm } from "../../components";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as actions from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import validate from "../../ultils/Common/validateFields";

const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, msg, update } = useSelector((state) => state.auth);
  const [invalidFields, setInvalidFields] = useState([]);
  const [isRegister, setIsRegiter] = useState(location.state?.flag);

  const [payload, setPayload] = useState({
    name: "",
    phone: "",
    password: "",
  });

  useEffect(() => {
    setIsRegiter(location.state?.flag);
  }, [location.state?.flag]);

  useEffect(() => {
    isLoggedIn && navigate("/");
  }, [isLoggedIn]);

  useEffect(() => {
    msg && Swal.fire("Oops !", msg, "error");
  }, [msg, update]);

  const handleSubmit = async () => {
    let finnalPayload = isRegister
      ? payload
      : {
          phone: payload.phone,
          password: payload.password,
        };
    let invalids = validate(finnalPayload, setInvalidFields);

    if (invalids === 0)
      isRegister
        ? dispatch(actions.register(payload))
        : dispatch(actions.login(payload));
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
        <h3 className="font-semibold text-2xl mb-3">
          {isRegister ? "Đăng ký tài khoản" : "Đăng nhập"}
        </h3>
        <div className="w-full flex flex-col gap-5">
          {isRegister && (
            <InputForm
              invalidFields={invalidFields}
              setInvalidFields={setInvalidFields}
              label={"Họ tên"}
              value={payload.name}
              setValue={setPayload}
              keyPayload="name"
            />
          )}
          <InputForm
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
            label={"Số điện thoại"}
            value={payload.phone}
            setValue={setPayload}
            keyPayload="phone"
          />
          <InputForm
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
            label={"Mật khẩu"}
            value={payload.password}
            setValue={setPayload}
            keyPayload="password"
            type="password"
          />

          <Button
            text={isRegister ? "Đăng ký" : "Đăng nhập"}
            bgColor="bg-secondary2"
            textColor="text-white"
            fullWidth
            onClick={handleSubmit}
          />
        </div>
        <div className="mt-7 flex items-center justify-between">
          {isRegister ? (
            <small>
              Bạn đã có tài khoản?
              <span
                onClick={() => {
                  setIsRegiter(false);
                  setPayload({
                    phone: "",
                    password: "",
                    name: "",
                  });
                }}
                className="text-blue-500 hover:underline cursor-pointer"
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
                  setPayload({
                    phone: "",
                    password: "",
                    name: "",
                  });
                }}
                className="text-[blue] hover:text-[orange] cursor-pointer"
              >
                Tạo tài khoản mới
              </small>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
