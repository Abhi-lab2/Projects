import Axios from "axios";

export const todoActions = {
  GET_TODO_REQUEST: "GET_TODO_REQUEST",
  GET_TODO_SUCCESS: "GET_TODO_SUCCESS",
  GET_TODO_FAILURE: "GET_TODO_FAILURE",
  ADD_TODO_REQUEST: "ADD_TODO_REQUEST",
  ADD_TODO_SUCCESS: "ADD_TODO_SUCCESS",
  ADD_TODO_FAILURE: "ADD_TODO_FAILURE",
};

export const getTodoRequest = () => ({
  type: todoActions.GET_TODO_REQUEST,
});

export const getTodoSuccess = (data) => ({
  type: todoActions.GET_TODO_SUCCESS,
  payload: data,
});

export const getTodoFailure = () => ({
  type: todoActions.GET_TODO_FAILURE,
});

export const getTodos = (dispatch) => {
  const todoRequestAction = getTodoRequest();
  dispatch(todoRequestAction); // dispatches the todorequest as fn
  return Axios({
    url: "http://localhost:8080/data",
    method: "GET",
  })
    .then((response) => {
      const todoSuccessAction = getTodoSuccess(response.data);
      dispatch(todoSuccessAction);
    })
    .catch((error) => {
      const todoFailureAction = getTodoFailure(error);
      dispatch(todoFailureAction);
    });
};

// action creators for ADD / POST / DELETE.

export const addTodoRequest = () => ({
  type: addTodoActions.ADD_TODO_REQUEST,
});

export const addTodoSuccess = (data) => ({
  type: addTodoActions.ADD_TODO_SUCCESS,
});

export const addTodoFailure = () => ({
  type: todoActions.ADD_TODO_FAILURE,
});

export const addTodos = (dispatch) => {
  const todoRequestAction = addTodoRequest();
  dispatch(todoRequestAction);
  return Axios({
    url: "http://localhost:8080/data",
    method: "POST",
    data: {
      title,
      status: false,
    },
  })
    .then((response) => {
      const todoSuccessAction = addTodoSuccess(response);
      dispatch(todoSuccessAction);
    })
    .catch((err) => {
      const todoFailureAction = addTodoFailure(err);
      dispatch(todoFailureAction);
    });
};
