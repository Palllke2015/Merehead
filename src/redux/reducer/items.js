const init = {
  isLoading: true,
  error: false,
  errorMessage: '',
  data: {},
};


const items = (state = init, action) => {
    switch (action.type) {
        case "FETCH_DATA_START":
            return {
                ...state,
                isLoading: true,
                error: false,
                errorMessage: '',
            };
        case "FETCH_DATA_SUCCESS":
            return {
              ...state,
              isLoading: false,
              error: false,
              errorMessage: '',
              data: action.payload,
            };

        default: return state;
    }
};

export default items;