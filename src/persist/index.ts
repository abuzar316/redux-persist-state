import { APP_LAOD, APP_RESET, storeKey } from "../constant";
import { storeTypes } from "../types";

export const persistReducer =
  (rootReducer: any) => (state: any, action: any) => {
    if (action.type === APP_LAOD) {
      return { ...state, ...action.payload };
    }

    if (action.type === APP_RESET) {
      return rootReducer(undefined, action);
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

const storeSetterConfig = (store: any) => () => {
  localStorage.setItem(storeKey, JSON.stringify(store.getState()));
};

export const persistInitialize = (store: storeTypes) => {
  persistStateConfig(store);

  window.addEventListener("beforeunload", storeSetterConfig(store));

  window.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      storeSetterConfig(store);
    }

    if (document.visibilityState === "visible") {
      persistStateConfig(store);
    }
  });

  const resetStore = () => {
    return store.dispatch({
      type: APP_RESET,
      payload: undefined,
    });
  };

  return { resetStore };
};
