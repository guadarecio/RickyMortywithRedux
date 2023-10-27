const initialState = {
  data: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
