import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [],
};

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload;
    },
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
  },
});

export const { setEmployees, addEmployee } = employeeSlice.actions;

const store = configureStore({
  reducer: {
    employees: employeeSlice.reducer,
  },
});

export default store;