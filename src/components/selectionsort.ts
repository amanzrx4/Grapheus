import { State } from "./reducers";

export class SelectionSortAlgo {
  // public async sort(
  //   i: number,
  //   j: number,
  //   arr: number[],
  //   setSort: any,
  //   state: State,
  //   dispatch: any
  // ) {
  //   async function sleep(millis: number) {
  //     return new Promise((resolve) => setTimeout(resolve, millis));
  //   }

  //   const n = arr.length;
  //   for (let k = i; k < n - 1; k++) {
  //     // await sleep(0);

  //     setTimeout(() => {
  //       dispatch({
  //         payload: {
  //           i: k,
  //         },
  //       });

  //       for (let x = k + 1; x < n; x++) {
  //         dispatch({
  //           payload: {
  //             j: x,
  //           },
  //         });

  //         if (arr[x] < arr[k]) {
  //           let temp = arr[k];
  //           arr[k] = arr[x];
  //           arr[x] = temp;
  //         }
  //       }
  //     }, k * 1000);
  //   }
  // }

  public *sortGenerator(arr: number[], dispatch: any) {
    let k = 0;
    while (k < arr.length - 1) {
      yield dispatch({
        payload: {
          i: k,
        },
      });
      // yield 1;

      // console.log("ho yield");

      for (let x = k + 1; x < arr.length; x++) {
        yield dispatch({
          payload: {
            j: x,
          },
        });
        // yield 2;

        // console.log("x", x);

        if (arr[x] < arr[k]) {
          // swap the two array elements
          let temp = arr[k];
          arr[k] = arr[x];
          arr[x] = temp;
          yield dispatch({
            payload: {
              swap: [k, x],
            },
          });
          // yield 3;
        }
      }

      k++;
    }

    yield 1;
  }

  public *bubbleSort(arr: number[], dispatch: any) {
    let len = arr.length;
    let k = 0;
    while (k < len) {
      yield dispatch({
        payload: {
          i: k,
        },
      });

      for (let x = 0; x < len - k - 1; x++) {
        yield dispatch({
          payload: {
            j: x,
          },
        });

        if (arr[x] > arr[x + 1]) {
          let tmp = arr[x];
          arr[x] = arr[x + 1];
          arr[x + 1] = tmp;
          yield dispatch({
            payload: {
              swap: [k, x],
            },
          });
        }
      }
      k++;
    }
  }
}
