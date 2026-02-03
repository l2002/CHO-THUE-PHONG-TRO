import moment from "moment";

const formateDate = (timeObj) => {
  let day = timeObj.getDay() === 0 ? "Chủ nhật" : `Thứ ${timeObj.getDay() + 1}`;
  let date = `${timeObj.getDate()}/${timeObj.getMonth() + 1}/${timeObj.getFullYear()}`;
  let time = `${timeObj.getHours()}:${timeObj.getMinutes()}`;
  return `${day}, ${time} ${date}`;
};

const generateDate = () => {
  let gapExprire = Math.floor(Math.random() * 29) + 1;
  let today = new Date();
  let expireDay = moment(today).add(gapExprire, "d").toDate();

  return {
    today: formateDate(today),
    expireDay: formateDate(expireDay),
  };
};

export default generateDate;
