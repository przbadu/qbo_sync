import * as actionType from "./actionType";

export const initialState = {
  customers: [],
  loading: false,
  error: null,
  selectedCustomerIds: [],
  jobId: null,
  progress: 0,
  totalResult: 0,
  page: 0,
  perPage: 50,
  isDeleting: false,
  isExporting: false,
};

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.UPDATE_PAGE_VALUE:
      return { ...state, page: action.payload };
    case actionType.UPDATE_PER_PAGE_VALUE:
      return { ...state, perPage: action.payload };
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
        customers: action.payload.customers,
        totalResult: action.payload.totalResult,
      };
    case actionType.SUCCESS_FETCHING_CUSTOMERS_WITH_LOGS:
      const newCustomers = action.payload.customers.map((customer) => {
        const log = action.payload.activity.logs.find(
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
        customers: newCustomers,
        selectedCustomerIds: [],
        totalResult: action.payload.totalResult,
      };
    case actionType.SET_DELETING_JOB_ID:
      return {
        ...state,
        jobId: action.payload,
        isDeleting: true,
      };
    case actionType.SET_EXPORTING_JOB_ID:
      return {
        ...state,
        jobId: action.payload,
        isExporting: true,
      };
    case actionType.UPDATE_PROGRESS:
      return {
        ...state,
        progress: action.payload,
      };
    case actionType.DELETING_CUSTOMERS_COMPLETED:
      return {
        ...state,
        jobId: null,
        progress: 0,
        isDeleting: false,
      };
    case actionType.EXPORTING_CUSTOMERS_COMPLETED:
      return {
        ...state,
        jobId: null,
        progress: 0,
        isExporting: false,
      };
    default:
      return state;
  }
};
