import { useState } from "react";
import { MoneyWrapper } from "./style";

export const Money = () => {
  const [price, setPrice] = useState(
    Math.floor((Math.random() * 500) / 10) * 10
  );
  const [total, setTotal] = useState(0);

  const noteClickHandler = (amt) => {
    setTotal(total + amt);
  };

  const fruit = ["🍌", "🫐", "🍒", "🥥", "🍇", "🍏", "🥝"];

  return (
    <div>
      <MoneyWrapper>
        <div className="price">
          {price
            ? `Buy${
                fruit[Math.floor(Math.random() * fruit.length)]
              } for ₹${price}`
            : null}
        </div>
        <div className="total">
          {price > total ? "Balance" : "Change"} = {Math.abs(price - total)}
        </div>
        <div className="note-container">
          <div className="notes" id="n1" onClick={() => noteClickHandler(10)}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/India_new_10_INR%2C_MG_series%2C_2018%2C_obverse.jpg"
              alt="Rs. 10 Note"
            />
          </div>
          <div className="notes" id="n2" onClick={() => noteClickHandler(20)}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/India_new_20_INR%2C_MG_series%2C_2019%2C_obverse.jpg"
              alt="Rs. 20 Note"
            />
          </div>
          <div className="notes" id="n3" onClick={() => noteClickHandler(50)}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3f/India_new_50_INR%2C_MG_series%2C_2018%2C_obverse.jpg"
              alt="Rs. 50 Note"
            />
          </div>
          <div className="notes" id="n4" onClick={() => noteClickHandler(100)}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/88/India_new_100_INR%2C_Mahatma_Gandhi_New_Series%2C_2018%2C_obverse.png"
              alt="Rs. 100 Note"
            />
          </div>
        </div>
      </MoneyWrapper>
    </div>
  );
};
