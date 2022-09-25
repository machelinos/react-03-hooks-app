export const todoReducer = (initialState=[], action) => {
  switch (action.type) {
    case '[TODO] Add new todo':
        return [...initialState, action.payload];
    default:
        return initialState;
  }
}
