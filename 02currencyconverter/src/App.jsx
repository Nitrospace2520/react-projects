/* eslint-disable no-unused-vars */
import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyConverter from "./hooks/useCurrencyConverter";

function App() {
  //* useState hook:-
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  //* custom hook:-
  const currencyInfo = useCurrencyConverter(from);
  const currencyOptions = Object.keys(currencyInfo ? currencyInfo : []);
  // console.log(amount);

  // * functions:-
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };
  const convertAmount = () => {
    setConvertedAmount(amount * currencyInfo[to]);
    // console.log(currencyOptions);
    // console.log(convertedAmount, amount);
  };

  return (
    <>
      <div
        className="w-full h-screen text-xl  flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://i.pinimg.com/originals/b1/a7/78/b1a778b8e9704e10bdec549ce8494143.jpg')`,
          aspectRatio: "4/3",
          objectFit: "contain",
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convertAmount();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  onAmountChange={(amount) => setAmount(amount)}
                  onCurrencyChange={setFrom}
                  currencyOptions={currencyOptions}
                  selectCurrency={from}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  onClick={() => swap()}
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md  bg-blue-600 text-white px-2 py-0.5"
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  onAmountChange={convertAmount}
                  onCurrencyChange={setTo}
                  currencyOptions={currencyOptions}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
