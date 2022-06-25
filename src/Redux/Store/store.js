import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import rootReducer from "../Reducer/reducer";

const persisConfig = {
  key: "root",
  storage: AsyncStorage,
};

const perReducer = persistReducer(persisConfig, rootReducer);

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(perReducer, composeEnhancers(applyMiddleware(thunk)));
export const persistor = persistStore(store);
export default store;
