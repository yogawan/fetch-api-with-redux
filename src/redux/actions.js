export const increment = () => ({
    type: 'INCREMENT'
  });
  
  export const decrement = () => ({
    type: 'DECREMENT'
  });
  
  export const setData = (data) => ({
    type: 'SET_DATA',
    payload: data
  });
  
  export const setError = (error) => ({
    type: 'SET_ERROR',
    payload: error
  });  