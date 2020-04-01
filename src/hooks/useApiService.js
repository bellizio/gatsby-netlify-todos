import { useEffect, useReducer } from 'react';

const FETCH_INIT = 'FETCH_INIT';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';

const dataFetchReducer = (state, action) => {
  const { type, data } = action;

  switch (type) {
    case FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

const useApiService = (initialData, serviceMethod, params) => {
  const initalState = {
    isError: false,
    isLoading: false,
    data: initialData,
  };

  const [state, dispatch] = useReducer(dataFetchReducer, initalState);

  const fetchData = async () => {
    try {
      dispatch({ type: FETCH_INIT });
      const { data } = await serviceMethod(params);
      dispatch({ type: FETCH_SUCCESS, data });
    } catch (error) {
      dispatch({ type: FETCH_FAILURE });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [state];
};

export default useApiService;
