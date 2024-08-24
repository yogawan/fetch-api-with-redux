const initialState = {
    count: 0,
    data: [],
    loading: false,
    error: null
  };
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, count: state.count + 1 };
      case 'DECREMENT':
        return { ...state, count: state.count - 1 };
      case 'SET_DATA':
        return { ...state, data: action.payload, loading: false, error: null };
      case 'SET_ERROR':
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    };
  };
  
  export default rootReducer;  