export interface storeTypes {
  getState: () => any;
  dispatch: (arg0: { type: string; payload: any }) => void;
}
