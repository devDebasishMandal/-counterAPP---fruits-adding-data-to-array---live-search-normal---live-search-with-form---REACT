import React, { useState } from "react";

const Fruits = () => {
  const [fruits, setFruits] = useState(["apple", "banana", "peach"]);
  let [val, setVal] = useState("");
// two use state variable because 
// on submission of form we dont get input data
  function handleC(e) {
    setVal((val = e.target.value));
  }
  function handleF(e) {
    e.preventDefault();
    console.log(e.target.value);
    setFruits([...fruits, val]);
  }

  return (
    <div>
      <form onSubmit={handleF}>
        <input onChange={handleC} />
        <button type="submit">Submit</button>
      </form>
      {fruits.join(",")}
    </div>
  );
};

export default Fruits;
