import {
  ERROR_FETCHING_CUSTOMERS,
  FETCHING_CUSTOMERS,
  SUCCESS_FETCHING_CUSTOMERS_WITH_LOGS,
  SUCCESS_FETCHING_CUSTOMERS,
  TOGGLE_SELECT_ALL_CUSTOMERS,
  SET_JOB_ID,
  BACKGROUND_JOBS_COMPLETED,
  UPDATE_PROGRESS,
} from "./context";

export const initialState = {
  customers: [],
  loading: false,
  error: null,
  selectedCustomerIds: [],
  jobId: null,
  progress: 0,
};

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SELECT_ALL_CUSTOMERS:
      return {
        ...state,
        selectedCustomerIds: action.payload,
      };
    case FETCHING_CUSTOMERS:
      return {
        ...state,
        customers: [],
        loading: true,
        error: null,
      };
    case ERROR_FETCHING_CUSTOMERS:
      return {
        ...state,
        customers: [],
        loading: false,
        error: action.payload,
      };
    case SUCCESS_FETCHING_CUSTOMERS:
      return {
        ...state,
        error: null,
        loading: false,
        customers: action.payload,
      };
    case SUCCESS_FETCHING_CUSTOMERS_WITH_LOGS:
      const { customers, logs } = action.payload;
      const new_customers = customers.map((customer) => {
        const log = logs.find(
          (l) => l.id === customer.Id && l.status === "failed"
        );
        return {
          ...customer,
          logs: log?.message,
        };
      });
      return {
        ...state,
        error: null,
        loading: false,
        customers: new_customers,
        selectedCustomerIds: [],
      };
    case SET_JOB_ID:
      return {
        ...state,
        jobId: action.payload,
      };
    case UPDATE_PROGRESS:
      return {
        ...state,
        progress: action.payload,
      };
    case BACKGROUND_JOBS_COMPLETED:
      return {
        ...state,
        jobId: null,
        progress: 0,
      };
    default:
      return state;
  }
};
