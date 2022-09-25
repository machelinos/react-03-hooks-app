export const todoReducer = (initialState=[], action) => {
  switch (action.type) {
    case '[TODO] Add new todo':
        return [...initialState, action.payload];
    case '[TODO] Delete todo':
        return initialState.filter(item=>item.id!==action.payload);
    case '[TODO] Set todo completed':
        return initialState.map(item=>{
          if(item.id===action.payload){
            return {
              ...item,
              done: !item.done
            }
          }
          return item;
        })

    default:
        return initialState;
  }
}
