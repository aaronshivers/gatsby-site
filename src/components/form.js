import React, {useState} from 'react'
import { view } from 'react-easy-state'
import AppContext from '../store/store.js'
import { Link } from 'gatsby'

const Form = () => {
  const {state, dispatch} = AppContext
  const [category, setCategory] = useState('')
  const [body, setBody] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    const car = {
      'category': category,
      'body': body
    }

    appStore.cart = [
      car
    ]
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
      Name
      <input
        type='text'
        value={name}
        onChange={e => setName(e.target.value)}
      />
      </label>
      <h3>Category</h3>
      <label>
      Street
      <input
        type='radio'
        name='category'
        value='street'
        checked={category === 'street'}
        onChange={e => setCategory('street')}
      />
      </label>
      <label>
      Off Road
      <input
        type='radio'
        name='category'
        value='offRoad'
        checked={category === 'offRoad'}
        onChange={e => setCategory('offRoad')}
      />
      </label>

      <h3>Body</h3>
      {
        category === 'street' ?
          <>
            <label>
              Sport
              <input
                type='radio'
                name='body'
                value='sport'
                checked={body === 'sport'}
                onChange={e => setBody('sport')}
              />
            </label>
            <label>
              SUV
              <input
                type='radio'
                name='body'
                value='suv'
                checked={body === 'suv'}
                onChange={e => setBody('suv')}
              />
            </label>
            <label>
              Classic
              <input
                type='radio'
                name='body'
                value='classic'
                checked={body === 'classic'}
                onChange={e => setBody('classic')}
              />
            </label>
          </> :
          <>
            <label>
              Classic
              <input
                type='radio'
                name='body'
                value='classic'
                checked={body === 'classic'}
                onChange={e => setBody('classic')}
              />
            </label>
          </>
      }
      <button>update car</button>
    </form>
  )
}

export default view(Form)
