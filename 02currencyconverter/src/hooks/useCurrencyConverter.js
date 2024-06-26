import { useState, useEffect } from "react";

const useCurrencyConverter = (currency = "usd") => {
  //* useState:-
  const [data, setData] = useState({});

  //* useEffect:-
  useEffect(() => {
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch((err) => console.log(err));
    // .finally(() => console.log(data));
  }, [currency]);

  return data;
};

export default useCurrencyConverter;
