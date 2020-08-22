import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

export const WearPageTemplate = ({ title, description, image }) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <div>{description}</div>
              <PreviewCompatibleImage imageInfo={image} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

WearPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.string])
}

const WearPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <WearPageTemplate
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />
    </Layout>
  )
}

WearPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default WearPage

export const wearPageQuery = graphql`
  query WearPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
      }
    }
  }
`
