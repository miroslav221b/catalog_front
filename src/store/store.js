import { configureStore} from "@reduxjs/toolkit";
import shopSlice from "./slices/shopSlice";
import BlogSlice from "./slices/BlogSlice";
import ContactSlice from "./slices/ContactSlice";

export const store = configureStore({
    reducer:{
      shop:shopSlice,
      blog:BlogSlice,
      contact:ContactSlice
    },
    devTools:false
})