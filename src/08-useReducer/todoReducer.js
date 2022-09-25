export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case 'ABC':
        throw new Error('Case ABC is not implemented yet.');
    default:
        return initialState;
  }
}
