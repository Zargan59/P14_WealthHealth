import { configureStore } from '@reduxjs/toolkit';
import employeeReducer, {createEmployee} from "./reducer"
const store = configureStore({
  reducer: {
    employee : employeeReducer, 
  }
  }
)

export default store