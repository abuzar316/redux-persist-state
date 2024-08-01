import { APP_LAOD, storeKey } from "../constant";
import { storeTypes } from "../types";

export const persistReducer =
  (rootReducer: any) => (state: any, action: any) => {
    if (action.type === APP_LAOD) {
      return { ...state, ...action.payload };
    }
    return rootReducer(state, action);
  };

const persistStateConfig = (store: any) => {
  const state = localStorage.getItem(storeKey);
  if (state) {
    const myState = JSON.parse(state);
    store.dispatch({ type: APP_LAOD, payload: myState });
    localStorage.removeItem(storeKey);
  }
};

export const persistInitialize = (store: storeTypes) => {
  persistStateConfig(store);

  window.addEventListener("beforeunload", () => {
    localStorage.setItem(storeKey, JSON.stringify(store.getState()));
  });

  window.addEventListener("visibilitychange", (event) => {
    if (document.visibilityState === "hidden") {
      localStorage.setItem(storeKey, JSON.stringify(store.getState()));
    }

    if (document.visibilityState === "visible") {
      persistStateConfig(store);
    }
  });
};
