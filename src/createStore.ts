import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import tracksReducer from './reducers/tracks';
import marksReducer from './reducers/marks';

const rootReducer = combineReducers({
  trackState: tracksReducer,
  markState: marksReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(
    persistedReducer,
    // window &&
    //   // @ts-ignore
    //   window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //   // @ts-ignore
    //   window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
