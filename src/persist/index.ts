import { APP_LAOD } from "../constant";
import { storeTypes } from "../types";

export const persistReducer =
  (rootReducer: any) => (state: any, action: any) => {
    if (action.type === APP_LAOD) {
      return { ...state, ...action.payload };
    }
    return rootReducer(state, action);
  };

export const persistInitialize = (store: storeTypes) => {
  window.addEventListener("beforeunload", () => {
    localStorage.setItem("my-store", JSON.stringify(store.getState()));
  });

  window.addEventListener("load", () => {
    const state = localStorage.getItem("my-store");
    if (state) {
      const myState = JSON.parse(state);
      store.dispatch({ type: APP_LAOD, payload: myState });
      localStorage.removeItem("my-store");
    }
  });

  window.addEventListener("visibilitychange", (event) => {
    if (document.visibilityState === "hidden") {
      localStorage.setItem("my-store", JSON.stringify(store.getState()));
    }

    if (document.visibilityState === "visible") {
      const data = localStorage.getItem("my-store");
      if (data) {
        let state = JSON.parse(data);
        store.dispatch({ type: APP_LAOD, payload: state });
        localStorage.removeItem("my-store");
      }
    }
  });
};
