import React from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

// Alternative syntax:
// define a constant Square that is a function that takes props as an argument
//
// const Square = props => (
//   <button className="square" onClick={props.onSquareClick}>
//     {props.value}
//   </button>
// );

export default Square;
