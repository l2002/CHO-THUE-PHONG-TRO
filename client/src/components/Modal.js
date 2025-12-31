import { useEffect, useState } from "react";
import icons from "../ultils/icons";

const { ArrowBackIcon } = icons;
const Modal = ({ setIsShowModal, content, name }) => {
  const [percent1, setPercent1] = useState(0);
  const [percent2, setPercent2] = useState(100);
  const [activedEl, setActivedEl] = useState("");

  useEffect(() => {
    const activeTrackEl = document.getElementById("track-active");
    if (!activeTrackEl) return;
    if (percent2 <= percent1) {
      activeTrackEl.style.left = `${percent2}%`;
      activeTrackEl.style.right = `${100 - percent1}%`;
    } else {
      activeTrackEl.style.left = `${percent1}%`;
      activeTrackEl.style.right = `${100 - percent2}%`;
    }
  }, [percent1, percent2]);

  const handleClickTrack = (e, value) => {
    const stackEl = document.getElementById("track");
    const stackRect = stackEl.getBoundingClientRect();

    let percent = value
      ? value
      : Math.round(((e.clientX - stackRect.left) * 100) / stackRect.width);
    if (Math.abs(percent - percent1) <= Math.abs(percent - percent2)) {
      setPercent1(percent);
    } else {
      setPercent2(percent);
    }
  };

  const convert100toTarget = (percent) => {
    // 10% => 1.5
    // 9% => 1.35*10 = 14/5 = 2 dư 4 => 3*5 = 15/10 = 1.5 triệu
    // 11% => 1.65*10 = 17/5 = 3 dư 2 => 4*5 = 20/10 = 2 triệu
    return name === "prices"
      ? (Math.ceil(Math.round(percent * 1.5) / 5) * 5) / 10
      : name === "areas"
      ? Math.ceil(Math.round(percent * 0.9) / 5) * 5
      : 0;
  };
  const convert15to100 = (percent) => {
    let target = name === "prices" ? 15 : name === "areas" ? 90 : 1;
    return Math.floor((percent / target) * 100);
  };

  const getNumbers = (string) =>
    string
      .split(" ")
      .map((item) => +item)
      .filter((item) => !item === false);
  const getNumbersArea = (string) =>
    string
      .split(" ")
      .map((item) => +item.match(/\d+/))
      .filter((item) => item !== 0);

  const handleActive = (code, value) => {
    setActivedEl(code);
    let arrMaxMin =
      name === "prices" ? getNumbers(value) : getNumbersArea(value);
    if (arrMaxMin.length === 1) {
      if (arrMaxMin[0] === 1) {
        setPercent1(0);
        setPercent2(convert15to100(1));
      }
      if (arrMaxMin[0] === 20) {
        setPercent1(0);
        setPercent2(convert15to100(20));
      }
      if (arrMaxMin[0] === 15 || arrMaxMin[0] === 90) {
        setPercent1(100);
        setPercent2(100);
      }
    }
    if (arrMaxMin.length === 2) {
      setPercent1(convert15to100(arrMaxMin[0]));
      setPercent2(convert15to100(arrMaxMin[1]));
    }
  };
  return (
    <div
      onClick={(e) => {
        setIsShowModal(false);
      }}
      className="fixed top-0 bottom-0 left-0 right-0 bg-overlay-30 z-20 flex justify-center items-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          setIsShowModal(true);
        }}
        className="w-2/5 bg-white rounded-md"
      >
        <div className="h-[45px] px-4 flex items-center border-b border-gray-300">
          <ArrowBackIcon
            className="cursor-pointer hover:text-red-600"
            onClick={(e) => {
              e.stopPropagation();
              setIsShowModal(false);
            }}
          />
        </div>
        {(name === "categories" || name === "provinces") && (
          <div className="p-4 flex flex-col">
            {content?.map((item) => {
              return (
                <span
                  key={item.code}
                  className="py-2 flex gap-2 items-center  border-b border-gray-300"
                >
                  <input
                    type="radio"
                    name={name}
                    id={item.code}
                    value={item.code}
                  />
                  <label htmlFor={item.code}>{item.value}</label>
                </span>
              );
            })}
          </div>
        )}
        {(name === "prices" || name === "areas") && (
          <div className="p-12 py-20">
            <div className="flex flex-col items-center justify-center relative">
              <div className="z-30 absolute top-[-48px] font-bold text-xl text-orange-600">
                {`Từ ${
                  percent1 <= percent2
                    ? convert100toTarget(percent1)
                    : convert100toTarget(percent2)
                } - ${
                  percent2 >= percent1
                    ? convert100toTarget(percent2)
                    : convert100toTarget(percent1)
                } ${name === "prices" ? "triệu" : "m2"}`}
              </div>
              <div
                onClick={handleClickTrack}
                id="track"
                className="slider-track h-[5px] w-full absolute top-0 bottom-0 bg-gray-300 rounded-full"
              ></div>
              <div
                onClick={handleClickTrack}
                id="track-active"
                className="slider-track-active h-[5px] absolute top-0 bottom-0 bg-orange-600 rounded-full"
              ></div>
              <input
                max="100"
                min="0"
                step="1"
                type="range"
                value={percent1}
                className="w-full appearance-none pointer-events-none absolute top-0 bottom-0"
                onChange={(e) => {
                  setPercent1(+e.target.value);
                  activedEl && setActivedEl("");
                }}
                id="thumb-left"
              />
              <input
                max="100"
                min="0"
                step="1"
                type="range"
                value={percent2}
                className="w-full appearance-none pointer-events-none absolute top-0 bottom-0"
                onChange={(e) => {
                  setPercent2(+e.target.value);
                  activedEl && setActivedEl("");
                }}
              />
              <div className="absolute z-30 top-6 left-0 right-0 flex justify-between items-center">
                <span
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClickTrack(e, 0);
                  }}
                >
                  0
                </span>
                <span
                  className="mr-[-12px] cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClickTrack(e, 100);
                  }}
                >
                  {`${name === "prices" ? "15 triệu +" : "90 m2"}`}
                </span>
              </div>
            </div>
            <div className="mt-24">
              <h4 className="font-medium mb-4">Chọn nhanh:</h4>
              <div className="flex gap-2 items-center flex-wrap w-full">
                {content?.map((item) => {
                  return (
                    <button
                      key={item.code}
                      onClick={() => handleActive(item.code, item.value)}
                      className={`px-4 py-2 bg-gray-200 rounded-md cursor-pointer ${
                        item.code === activedEl
                          ? "bg-violet-600 text-white"
                          : ""
                      }`}
                    >
                      {item.value}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {(name === "prices" || name === "areas") && (
          <button
            type="button"
            className="w-full bg-orange-400 py-2 font-medium rounded-bl-md rounded-br-md"
          >
            ÁP DỤNG
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;
