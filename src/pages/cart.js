import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import appStore from '../store/store.js'

const Cart = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi {appStore.user.name} from the second page</h1>
    {
      appStore.cart[0] && appStore.cart.map((car, i) => (
        <div key={i}>
          <div>
            <h4>Category</h4> <span>{car.category}</span>
            <h4>Body</h4> <span>{!!car.shell && car.shell}</span>
          </div>
        </div>
      ))
    }
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Cart
