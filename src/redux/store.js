import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers/idea";

export default configureStore({
  devTools: true,
  reducer: reducers,
});
