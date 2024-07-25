import { todoActions } from "./Action";

const initialState = {
  loading: true,
  todos: [],
  error: false,
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case todoActions.GET_TODO_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
  }
};
