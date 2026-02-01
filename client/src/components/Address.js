import Select from "./Select";
import { apiGetPublicDistrict, apiGetPublicProvinces } from "../services";
import { memo, useEffect, useState } from "react";
import InputReadOnly from "./InputReadOnly";

const Address = ({ setPayload, invalidFields, setInvalidFields }) => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [reset, setReset] = useState(false);

  const provinceName =
    provinces.find((item) => Number(item.code) === Number(province))?.name ||
    "";

  const districtName =
    districts.find((item) => Number(item.code) === Number(district))?.name ||
    "";

  useEffect(() => {
    const fetchPublicProvince = async () => {
      const response = await apiGetPublicProvinces();
      if (response.status === 200) {
        setProvinces(response?.data);
      }
    };
    fetchPublicProvince();
  }, []);

  useEffect(() => {
    setDistrict("");
    const fetchPublicDistrict = async () => {
      const response = await apiGetPublicDistrict(province);
      if (response.status === 200) {
        setDistricts(response?.data.districts);
      }
    };
    province && fetchPublicDistrict(province);
    !province ? setReset(true) : setReset(false);
    !province && setDistricts([]);
  }, [province]);

  useEffect(() => {
    setPayload((prev) => ({
      ...prev,
      address: districtName ? `${districtName}, ${provinceName}` : provinceName,
      province: provinceName,
    }));
  }, [province, district]);
  return (
    <div>
      <h2 className="font-semibold text-xl py-4">Địa chỉ cho thuê</h2>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Select
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
            value={province}
            setValue={setProvince}
            options={provinces}
            label="Tỉnh/Thành Phố"
          />
          <Select
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
            reset={reset}
            value={district}
            setValue={setDistrict}
            options={districts}
            label="Quận/Huyện"
          />
        </div>
        <InputReadOnly
          label="Địa chỉ chính xác"
          value={
            districtName ? `${districtName}, ${provinceName}` : provinceName
          }
        />
      </div>
    </div>
  );
};

export default memo(Address);
