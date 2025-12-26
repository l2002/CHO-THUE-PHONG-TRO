import icons from "../ultils/icons";

const { ArrowBackIcon } = icons;
const Modal = ({ setIsShowModal, content, name }) => {
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
        className="w-1/3 bg-white rounded-md"
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
      </div>
    </div>
  );
};

export default Modal;
