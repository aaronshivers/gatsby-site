const cartReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_CARS':
      return action.cars
    case 'ADD_CAR':
      return [{action.car}, ...state]
    case 'REMOVE_CAR':
      return state.filter(({ id }) => id !== action.id)
    default:
      return state
  }
}

export default cartReducer
