import { text } from "../ultils/dataIntro";
import icons from "../ultils/icons";
import Button from "./Button";

const { StarIcon } = icons;
const star = [1, 2, 3, 4, 5];

const Intro = () => {
  return (
    <div className="w-3/5 bg-white rounded-md shadow-md p-4 flex flex-col justify-center items-center  gap-4">
      <h3 className="font-bold text-lg">{text.title}</h3>
      <p className="text-gray-800 text-center my-4">{text.description}</p>
      <div className="flex items-center justify-around w-full">
        {text.statistic.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <h4 className="font-bold text-lg">{item.value}</h4>
              <p className="text-gray-700">{item.name}</p>
            </div>
          );
        })}
      </div>
      <h3 className="font-bold text-lg py-2">{text.price}</h3>
      <div className="flex items-center justify-center gap-1">
        {star.map((item) => {
          return (
            <span key={item}>
              <StarIcon className="text-yellow-400" />
            </span>
          );
        })}
      </div>
      <p className="text-gray-800 italic text-center">{text.comment}</p>
      <span className="text-gray-500 text-sm">{text.author}</span>
      <h3 className="font-bold text-lg py-2">{text.question}</h3>
      <p>{text.answer}</p>
      <Button text="Đăng tin ngay" bgColor="bg-yellow-300" />
    </div>
  );
};

export default Intro;
