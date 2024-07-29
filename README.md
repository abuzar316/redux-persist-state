# react-redux-persist

`react-redux-persist` is a package that helps you persist your Redux store data across page reloads.

## Installation

To install the package, you can use npm:

```sh
npm install react-redux-persist
```

Here’s a basic example of how to use react-redux-persist in your Redux setup.

### Step 1:

Configure the Redux Store
First, create your Redux store and configure it to use persistReducer from react-redux-persist.

```sh
// store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistInitialize } from 'react-redux-persist';
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
