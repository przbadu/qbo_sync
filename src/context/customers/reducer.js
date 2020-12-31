import * as actionType from "./actionType";

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
    case actionType.TOGGLE_SELECT_ALL_CUSTOMERS:
      return {
        ...state,
        selectedCustomerIds: action.payload,
      };
    case actionType.FETCHING_CUSTOMERS:
      return {
        ...state,
        customers: [],
        loading: true,
        error: null,
      };
    case actionType.ERROR_FETCHING_CUSTOMERS:
      return {
        ...state,
        customers: [],
        loading: false,
        error: action.payload,
      };
    case actionType.SUCCESS_FETCHING_CUSTOMERS:
      return {
        ...state,
        error: null,
        loading: false,
        customers: action.payload,
      };
    case actionType.SUCCESS_FETCHING_CUSTOMERS_WITH_LOGS:
      const { customers, activity } = action.payload;
      const new_customers = customers.map((customer) => {
        const log = activity.logs.find(
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
    case actionType.SET_JOB_ID:
      return {
        ...state,
        jobId: action.payload,
      };
    case actionType.UPDATE_PROGRESS:
      return {
        ...state,
        progress: action.payload,
      };
    case actionType.BACKGROUND_JOBS_COMPLETED:
      return {
        ...state,
        jobId: null,
        progress: 0,
      };
    default:
      return state;
  }
};
