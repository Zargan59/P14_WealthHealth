import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from "./reducer"
const store = configureStore({
  reducer: {
    employee : employeeReducer, 
  }
  }
)

export default store