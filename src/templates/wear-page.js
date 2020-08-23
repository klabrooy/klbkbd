import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

export const WearPageTemplate = ({ blurbs }) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              {
                blurbs.map((blurb) => (
                  <div id={blurb.title}>
                    <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                      {blurb.title}
                    </h2>
                    <div>{blurb.description}</div>
                    <PreviewCompatibleImage imageInfo={blurb.image} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

WearPageTemplate.propTypes = {
  blurbs: PropTypes.array,
}

const WearPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <WearPageTemplate
        blurbs={frontmatter.blurbs}
      />
    </Layout>
  )
}

WearPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default WearPage

export const wearPageQuery = graphql`
  query WearPage {
    markdownRemark(frontmatter: { templateKey: { eq: "wear-page" } }) {
      frontmatter {
        blurbs {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          description
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`