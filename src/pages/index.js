import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1> Hi, this is Bshr Ramadan</h1>
    <p>Welcome to my JAM Hello World.</p>
    <p>I found it awesome!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
