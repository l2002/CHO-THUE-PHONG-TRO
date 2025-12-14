import { text } from "../ultils/dataContact";
import Button from "./Button";

const Contact = () => {
  return (
    <div className="bg-white rounded-md shadow-md p-4 w-3/5 flex flex-col justify-center items-center gap-4">
      <img
        src={text.image}
        alt="thumbnail"
        className="w-[300px] h-[300px] object-contain"
      />
      <p className="text-lg font-bold">{text.content}</p>
      <div>
        {text.contact.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-1"
            >
              <span>{item.text}</span>
              {item.phone && (
                <Button
                  text={item.phone}
                  bgColor="bg-orange-500"
                  textColor="text-white"
                />
              )}
              <Button
                text={item?.zalo}
                bgColor="bg-blue-500"
                textColor="text-white"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
