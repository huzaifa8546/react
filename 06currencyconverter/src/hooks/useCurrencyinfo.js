import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://api.allorigins.win/raw?url=https://open.er-api.com/v6/latest/${currency}`
    )
      //   .then((res) => res.json())
      //   .then((res) => setData(res[currency]));
      .then((res) => res.json())
      .then((res) => setData(res.rates))
      .catch((err) => console.error("Error fetching data:", err));
  }, [currency]);

  console.log(data);

  return data;
}

export default useCurrencyInfo;
