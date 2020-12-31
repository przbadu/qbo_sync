import React from "react";

import { Api } from "../../api";
import { initialState, customerReducer } from "./reducer";

// action types
export const FETCHING_CUSTOMERS = "customers/fetching";
export const ERROR_FETCHING_CUSTOMERS = "customers/error";
export const SUCCESS_FETCHING_CUSTOMERS = "customers/success";
export const TOGGLE_SELECT_ALL_CUSTOMERS = "customers/toggleSelectAll";
export const SUCCESS_FETCHING_CUSTOMERS_WITH_LOGS = "customers/withLogs";
export const SET_JOB_ID = "customers/setJobId";
export const BACKGROUND_JOBS_COMPLETED = "customers/jobsCompleted";
export const UPDATE_PROGRESS = "customers/updateProgress";

export const CustomerContext = React.createContext();

const CustomerProvider = ({ children }) => {
  const [customers, dispatch] = React.useReducer(customerReducer, initialState);

  /// fetch all customers from quickbooks
  const fetchCustomers = async () => {
    dispatch({ type: FETCHING_CUSTOMERS });
    try {
      const { data } = await Api().get("/customers");
      dispatch({ type: SUCCESS_FETCHING_CUSTOMERS, payload: data });
    } catch (e) {
      dispatch({ type: ERROR_FETCHING_CUSTOMERS, payload: e.message });
    }
  };

  /// handle selectAll checkbox toggle
  const toggleSelectAllCustomer = (ids) => {
    dispatch({ type: TOGGLE_SELECT_ALL_CUSTOMERS, payload: ids });
  };

  /// Delete selected customers
  const deleteSelectedCustomers = async (ids) => {
    dispatch({ type: FETCHING_CUSTOMERS });
    try {
      const { data } = await Api().post("/customers/mark_inactive", { ids });
      // dispatch({ type: SUCCESS_FETCHING_CUSTOMERS_WITH_LOGS, payload: data });
      dispatch({ type: SET_JOB_ID, payload: data.job_id });
    } catch (e) {
      dispatch({ type: ERROR_FETCHING_CUSTOMERS, payload: e.message });
    }
  };

  const updateProgress = async (value) => {
    console.log(value);
    dispatch({ type: UPDATE_PROGRESS, payload: value });
    if (value.percent >= 100) {
      const { data } = await Api().get("/customers/with_logs", {
        job_id: customers.jobId,
      });
      dispatch({ type: BACKGROUND_JOBS_COMPLETED });
      dispatch({ type: SUCCESS_FETCHING_CUSTOMERS_WITH_LOGS, payload: data });
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
