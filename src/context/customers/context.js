import React from "react";

import { Api } from "../../api";
import * as actionType from "./actionType";
import { initialState, customerReducer } from "./reducer";

export const CustomerContext = React.createContext();

const CustomerProvider = ({ children }) => {
  const [customers, dispatch] = React.useReducer(customerReducer, initialState);

  /// fetch all customers from quickbooks
  const fetchCustomers = async () => {
    dispatch({ type: actionType.FETCHING_CUSTOMERS });
    try {
      const { data } = await Api().get("/customers");
      dispatch({ type: actionType.SUCCESS_FETCHING_CUSTOMERS, payload: data });
    } catch (e) {
      dispatch({
        type: actionType.ERROR_FETCHING_CUSTOMERS,
        payload: e.message,
      });
    }
  };

  /// handle selectAll checkbox toggle
  const toggleSelectAllCustomer = (ids) =>
    dispatch({ type: actionType.TOGGLE_SELECT_ALL_CUSTOMERS, payload: ids });

  /// Delete selected customers
  const deleteSelectedCustomers = async (ids) => {
    dispatch({ type: actionType.FETCHING_CUSTOMERS });
    try {
      const { data } = await Api().post("/customers/mark_inactive", { ids });
      dispatch({ type: actionType.SET_JOB_ID, payload: data.job_id });
    } catch (e) {
      dispatch({
        type: actionType.ERROR_FETCHING_CUSTOMERS,
        payload: e.message,
      });
    }
  };

  const updateProgress = async (value) => {
    dispatch({ type: actionType.UPDATE_PROGRESS, payload: value });
    if (value.percent >= 100) {
      const { data } = await Api().get(
        `/customers/with_logs?job_id=${customers.jobId}`
      );
      dispatch({ type: actionType.BACKGROUND_JOBS_COMPLETED });
      dispatch({
        type: actionType.SUCCESS_FETCHING_CUSTOMERS_WITH_LOGS,
        payload: data,
      });
    }
  };

  const contextValue = {
    ...customers,
    fetchCustomers,
    toggleSelectAllCustomer,
    deleteSelectedCustomers,
    updateProgress,
  };

  return (
    <CustomerContext.Provider value={contextValue}>
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerProvider;