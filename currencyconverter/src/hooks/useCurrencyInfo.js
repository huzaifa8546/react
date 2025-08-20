import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://api.allorigins.win/raw?url=https://open.er-api.com/v6/latest/${currency}`
    )
      .then((res) => res.json()) // return parsed JSON
      .then((res) => {
        setData(res.rates); // rates is the object containing all conversions
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, [currency]);
  console.log(data); // Log the fetched data for debugging
  return data;
}

export default useCurrencyInfo;
