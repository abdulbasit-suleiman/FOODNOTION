"use client ";

import { useState } from "react";
function CalculatorPage() {
  const [input, setInput] = useState("");
  const [display, setDisplay] = useState("");
  const handleSetInput = (e) => {
    setInput(input + e.target.value);
  };
  const handleClearInput = () => {
    setInput('');
    setDisplay('')
  };
  const handleSetOperands = (operands) => {
    setInput(input + operands);
  };
  const handleAnswer = () => {
    try {
      const result = eval(input);
      setDisplay(result);
    } catch (error) {
      setDisplay('error tii wa oo');
    }
  };
  return (
    <>
      <h1 className="calculator-header">Calculator Alata</h1>
      <div className="calculator-container">
      <div className="display-container">
          <span className="answer">{display}</span>
          <span className="input">{input}</span>
        </div>
        <div>
          <button onClick={handleClearInput}>Clr</button>
        </div>
        <div>
          <button value={1} onClick={handleSetInput}>
            1
          </button>
          <button value={2} onClick={handleSetInput}>
            2
          </button>
          <button value={3} onClick={handleSetInput}>
            3
          </button>
          <button value={4} onClick={handleSetInput}>
            4
          </button>
        </div>
        <div>
          <button value={5} onClick={handleSetInput}>
            5
          </button>
          <button value={6} onClick={handleSetInput}>
            6
          </button>

          <button value={7} onClick={handleSetInput}>
            7
          </button>
          <button value={8} onClick={handleSetInput}>
            8
          </button>
        </div>
        <div>
          <button value={9} onClick={handleSetInput}>
            9
          </button>
          <button value={0} onClick={handleSetInput}>
            0
          </button>
          <button
            onClick={() => {
              handleSetOperands("+");
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              handleSetOperands("-");
            }}
          >
            -
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              handleSetOperands(".");
            }}
          >
            .
          </button>
          <button
            onClick={() => {
              handleSetOperands("x");
            }}
          >
            x
          </button>
          <button
            onClick={() => {
              handleSetOperands("÷");
            }}
          >
            ÷
          </button>
          <button onClick={handleAnswer}>=</button>
        </div>
      </div>
    </>
  );
}
export default CalculatorPage;
