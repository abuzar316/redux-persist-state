# redux-persist-state

Redux Persist State is a package that helps you persist your Redux store data across page reloads. It ensures that the state data is not visible in any web storage, automatically restoring the Redux data after reloading the page.

# Unique Features of Redux Persist State
- **State Persistence**: Automatically persists Redux store state across page reloads.
- **Invisible Storage**: Ensures state data is not visible in any web storage like localStorage or sessionStorage.
- **Seamless Restoration**: Restores Redux state automatically upon page reload, providing a consistent user experience.
- **Simple Integration**: Easy to initialize with your Redux store without needing to manage the persistence logic manually.

## Installation

To install the package, you can use npm:

```sh
npm install redux-persist-state
```

Here’s a basic example of how to use redux-persist-state in your Redux setup.

## Quickstart

Configure the Redux Store
First, create your Redux store and configure it to use persistReducer from redux-persist-state.

```sh
// store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';

import { persistReducer, persistInitialize } from 'redux-persist-state';

const rootReducer = combineReducers({
  counter: counterSlice,
});

const persistedReducer = persistReducer(rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

persistInitialize(store);

```

# API
`persistReducer`
```sh
persistReducer(rootReducer: any): any
```
Enhances the root reducer to handle rehydration from persist store.

`persistInitialize`
```
persistInitialize(store: any): void
```
persistInitialize the mechanism for persisting Redux state data. This function ensures that your Redux store's state persists across page reloads without being visible in any web storage options, including localStorage, sessionStorage, or any other web storage. The internal algorithm handles the persistence and restoration of the state automatically.

# License
This project is licensed under the [MIT](LICENSE) License.

# Contributing
Contributions are welcome! If you have any ideas, suggestions, or find any issues, please open an issue or submit a pull request on [GitHub](https://github.com/abuzar316/redux-persist-state/).
- Fork the repository.
- Create your feature branch (git checkout -b feature/your-feature).
- Commit your changes (git commit -m 'Add some feature').
- Push to the branch (git push origin feature/your-feature).
- Open a pull request.