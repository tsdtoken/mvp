import React from 'react'
import PageLayout from './PageLayout'

/**
 * @extends PageLayout
 * @see https://simonsmith.io/reusing-layouts-in-react-router-4/
 */
const DefaultLayout = ({ component: Component, ...rest }) => (
  <PageLayout
    {...rest}
    component={matchProps => <Component {...matchProps} />}
  />
)

export default DefaultLayout
