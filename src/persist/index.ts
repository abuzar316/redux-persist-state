const persistReducer = (rootReducer) => (state, action) => {
  if (action.type === "LOAD") {
    return { ...state, ...action.payload };
  }
  return rootReducer(state, action);
};

const persistInitialize = (store) => {
  window.addEventListener("beforeunload", () => {
    console.log("beforeunload");
    localStorage.setItem("my-store", JSON.stringify(store.getState()));
  });

  window.addEventListener("load", () => {
    console.log("load");
    const myState = JSON.parse(localStorage.getItem("my-store"));
    if (myState) {
      store.dispatch({ type: "LOAD", payload: myState });
      localStorage.removeItem("my-store");
    }
  });

  window.addEventListener("visibilitychange", () => {
    // console.log("visibilitychange", document.visibilityState, event);

    if (document.visibilityState === "hidden") {
      localStorage.setItem("my-store", JSON.stringify(store.getState()));
    }

    if (document.visibilityState === "visible") {
      const data = localStorage.getItem("my-store");
      if (data) {
        let state = JSON.parse(data);
        store.dispatch({ type: "LOAD", payload: state });
        localStorage.removeItem("my-store");
      }
    }
  });
};

export { persistReducer, persistInitialize };
