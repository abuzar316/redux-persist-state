# redux-persist-state

`redux-persist-state` is a package that helps you persist your Redux store data across page reloads.

## Installation

To install the package, you can use npm:

```sh
npm install redux-persist-state
```

Here’s a basic example of how to use redux-persist-state in your Redux setup.

### Step 1:

Configure the Redux Store
First, create your Redux store and configure it to use persistReducer from redux-persist-state.

```sh
// store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistInitialize } from 'redux-persist-state';
import counterSlice from './counterSlice';

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

# License
This project is licensed under the MIT License.

# Contributing
If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.
