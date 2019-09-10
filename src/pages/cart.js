import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import appStore from '../store/store.js'

const Cart = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi {appStore.user.name} from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Cart
