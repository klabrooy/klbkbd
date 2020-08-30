import Content, { HTMLContent } from '../components/Content'

import Layout from '../components/Layout'
import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

export const ServicesPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <PageContent className="content services" content={content} />
        </div>
      </div>
    </section >
  )
}

ServicesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ServicesPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ServicesPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

ServicesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ServicesPage

export const servicesPageQuery = graphql`
  query ServicesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
