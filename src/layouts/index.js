import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Footer from '../components/Footer/Footer'
import './bootstrap.min.css';
import './index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Revain Blog"
      meta={[
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { name: 'description', content: 'Thoughts, stories and ideas about Revain.' },
        { property: 'og:description', content: 'Thoughts, stories and ideas about Revain.' },
        { name: 'author', content: 'Revain Blog' },
      ]}
      link={[
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
      ]}
    />

      {children()}
      
        <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

