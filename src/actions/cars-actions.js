import database from '../db/firebase'

const addCar = carData => dispatch => uid => {

  const { category, body } = carData

  const car = {
    category,
    body,
    createdAt: Date.now()
  }

  return database
    .ref(`users/${ uid }/cars`)
    .push(car)
    .then(
      ref => dispatch({
        type: 'ADD_CAR', car: {
          id: ref.key,
          ...car
        }
      })
    )
}

const deleteCar = id => dispatch => uid => {
  return database
    .ref(`users/${ uid }/cars/${ id }`)
    .remove()
    .then(() => dispatch({ type: 'DELETE_CAR', id }))
}

const getCars = () => dispatch => uid => {

  return database
    .ref(`users/${ uid }/cars`)
    .once('value')
    .then(snapshot => {
      const cars = []

      snapshot.forEach(childSnapshot => {
        cars.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })

      return cars
    }).then(
      cars => dispatch({ type: 'POPULATE_CARS', cars })
    )
}

export {
  addCar,
  deleteCar,
  getCars
}
