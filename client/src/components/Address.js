import SelectAddress from "./SelectAddress";
import { apiGetPublicDistrict, apiGetPublicProvinces } from "../services";
import { useEffect, useState } from "react";

const Address = () => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [province, setProvince] = useState();
  const [district, setDistrict] = useState();
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
    setDistrict(null);
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

  console.log();
  return (
    <div>
      <h2 className="font-semibold text-xl py-4">Địa chỉ cho thuê</h2>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <SelectAddress
            value={province}
            setValue={setProvince}
            options={provinces}
            label="Tỉnh/Thành Phố"
          />
          <SelectAddress
            reset={reset}
            value={district}
            setValue={setDistrict}
            options={districts}
            label="Quận/Huyện"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium" htmlFor="exactly-address">
            Địa chỉ chính xác
          </label>
          <input
            value={
              districtName ? `${districtName}, ${provinceName}` : provinceName
            }
            type="text"
            id="exactly-address"
            readOnly
            className="border border-gray-200 bg-gray-100 rounded-md p-2 w-full outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Address;
