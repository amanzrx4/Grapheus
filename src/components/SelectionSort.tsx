import React, { useMemo } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import { State } from "./reducers";

type Sort = {
  i: number;
  j: number;
};

type Props = {
  sort: Sort;
  arr: number[];
  state: State;
  dispatch: any;
};

const SelectionSort = ({ arr, sort, state }: Props) => {
  const width = useMemo(() => `${1300 / arr.length}px`, [arr]);
  const maxheight = useMemo(() => {
    const arrSlice = arr.slice();
    const sortedArray = arrSlice.sort((a, b) => a - b);
    return sortedArray[sortedArray.length - 1];
  }, [arr]);

  // console.log("heihghht", maxheight);

  return (
    <div className="flex justify-center w-full h-full items-center ">
      <div className="flex items-start space-x-2">
        {arr.map((item, index) => {
          // maxheight =  2400px =97

          let height = `${item * (700 / maxheight)}px`;

          return (
            <motion.div
              // animate={{
              //   height: `${height}`,
              // }}
              // initial={{
              //   height: "0px",
              // }}
              // transition={{ duration: 1 }}
              key={index}
              // initial={{
              //   height: 0,
              // }}
              // animate={{
              //   height: `${height}`,
              // }}
              // transition={{ duration: 1 }}
              style={{
                height: `${height}`,
                width: `${width}`,
              }}
              className={`w-6 ${
                index === state.j + 1 ? "bg-green-400" : "bg-blue-500"
              }   rounded-sm
              ${index === state.j && "bg-yellow-300"}
              
              `}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SelectionSort;
