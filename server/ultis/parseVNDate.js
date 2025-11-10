const parseVNDate = (str) => {
  if (!str || typeof str !== "string") return null;
  str = str.replace(/^Thứ\s+[0-9A-Za-zÂĂÊÔƠƯâăêôơư]+,\s*/, "");
  const [time, date] = str.split(" ");
  if (!time || !date) return null;

  const [hour, minute] = time.split(":").map(Number);
  const [day, month, year] = date.split("/").map(Number);
  const parsed = new Date(year, month - 1, day, hour, minute);

  return isNaN(parsed.getTime()) ? null : parsed;
};
export default parseVNDate;
