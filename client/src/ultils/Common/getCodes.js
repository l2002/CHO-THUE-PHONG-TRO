import { getNumbersPrice, getNumbersArea } from "./getNumbers";

export const getCodePrices = (totals, min, max) => {
  return totals?.map((item) => {
    let arrMaxMin = getNumbersPrice(item.value);
    return {
      ...item,
      min:
        arrMaxMin.length === 2
          ? arrMaxMin[0]
          : arrMaxMin[0] === min
            ? 0
            : arrMaxMin[0],
      max:
        arrMaxMin.length === 2
          ? arrMaxMin[1]
          : arrMaxMin[0] === max
            ? 99999
            : arrMaxMin[0],
    };
  });
};

export const getCodeAreas = (totals, min, max) => {
  return totals?.map((item) => {
    let arrMaxMin = getNumbersArea(item.value);

    return {
      ...item,
      min:
        arrMaxMin.length === 2
          ? arrMaxMin[0]
          : arrMaxMin[0] === min
            ? 0
            : arrMaxMin[0],
      max:
        arrMaxMin.length === 2
          ? arrMaxMin[1]
          : arrMaxMin[0] === max
            ? 99999
            : arrMaxMin[0],
    };
  });
};

export const getCodesPrice = (entry, prices, min, max) => {
  const pricesWithMaxMin = getCodePrices(prices, min, max);
  // console.table(
  //   pricesWithMaxMin.map((i) => ({
  //     code: i.code,
  //     min: i.min,
  //     max: i.max,
  //     valid: i.min < i.max,
  //   })),
  // );
  return pricesWithMaxMin.filter(
    (item) => item.min <= entry && entry < item.max,
  );
};

export const getCodesAreas = (entry, areas, min, max) => {
  const areasWithMaxMin = getCodeAreas(areas, min, max);
  // console.table(
  //   areasWithMaxMin.map((i) => ({
  //     code: i.code,
  //     min: i.min,
  //     max: i.max,
  //     valid: i.min < i.max,
  //   })),
  // );
  return areasWithMaxMin.filter(
    (item) => item.min <= entry && entry < item.max,
  );
};
