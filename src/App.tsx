import { useEffect, useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import SelectionSort from "./components/SelectionSort";
import { SelectionSortAlgo } from "./components/selectionsort";
import { reducer, State } from "./components/reducers";

function generateRandomArray(length: number) {
  let arr = [];

  for (let i = 0; i < length; i++) {
    const number = Math.floor(Math.random() * 100);
    if (number) {
      arr.push(number);
    }
  }

  return arr;
}

let ARR = generateRandomArray(200);

const initialState: State = {
  i: -1,
  j: -1,
  swap: [],
};

function App() {
  const [sort, setSort] = useState({
    i: -1,
    j: -1,
  });

  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   const newObj = new SelectionSortAlgo();
  //   newObj.sort(0, 0, ARR, setSort, state, dispatch);
  // }, []);

  useEffect(() => {
    instializeYield();
  }, []);

  function instializeYield() {
    const newObj = new SelectionSortAlgo();
    let sorting = newObj.bubbleSort(ARR, dispatch);
  }

  // function runYield(fn){
  //   return fn.
  // }

  function runSort() {
    const newObj = new SelectionSortAlgo();
    let sorting = newObj.bubbleSort(ARR, dispatch);
    let someYield = sorting.next();

    // console.log("some", someYield);

    let interval = setInterval(() => {
      // console.log("doing sort", sorting.next());
      const value = sorting.next();
      // console.log("value")
      if (value.done === true) clearInterval(interval);
    }, 1);

    // while (!sorting.next().done) {
    //   console.log("doing sort", sorting.next().done);

    //   sorting.next();
    // }
  }
  return (
    <main className="app">
      <SelectionSort sort={sort} arr={ARR} state={state} dispatch={dispatch} />
      <button
        onClick={() => {
          ARR = generateRandomArray(100);
        }}
        className="bg-blue-500 text-white font-bold px-4 py-2"
      >
        Generate new array
      </button>

      <button
        onClick={runSort}
        className="bg-blue-500 text-white font-bold px-4 py-2"
      >
        Sort the algo
      </button>

      <div className="sliders">
        <div>
          <input type="range" id="array" name="array" min="0" max="11" />
          <label htmlFor="volume">Volume</label>
        </div>
        <div>
          <input type="range" id="speed" name="speed" min="0" max="11" />
          <label htmlFor="volume">Volume</label>
        </div>
      </div>
    </main>
  );
}

export default App;
