export function convertTime(inputDate) {
  const dateObject = new Date(inputDate);

  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const seconds = dateObject.getSeconds();

  //   const formattedResult = `${hours < 10 ? "0" : ""}${hours}:${
  //     minutes < 10 ? "0" : ""
  //   }${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  const formattedResult = `${hours < 10 ? "0" : ""}${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;

  return formattedResult;
}
