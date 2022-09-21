export type State = {
  i: number;
  j: number;
  swap: number[];
};

type Payload = {
  i?: number;
  j?: number;
};

type Action = {
  payload: Payload;
};

export const reducer = (state: State, action: Action): State => {
  return { ...state, ...action.payload };
};
