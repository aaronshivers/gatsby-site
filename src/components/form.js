import React, {useState} from 'react'
import { view } from 'react-easy-state'
import appStore from '../store/store.js'
import { Link } from 'gatsby'

const Form = () => {
  const [name, setName] = useState(appStore.user.name)

  const handleSubmit = e => {
    e.preventDefault()

    appStore.user.name = name
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
      Name
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      </label>
      <label>
      Name
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      </label>
    </form>
  )
}

export default view(Form)
