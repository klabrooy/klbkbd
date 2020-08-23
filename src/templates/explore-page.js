import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

export const ExplorePageTemplate = ({ blurbs }) => {
  console.log(blurbs)
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

ExplorePageTemplate.propTypes = {
  blurbs: PropTypes.array,
}

const ExplorePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ExplorePageTemplate
        blurbs={frontmatter.blurbs}
      />
    </Layout>
  )
}

ExplorePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ExplorePage

export const explorePageQuery = graphql`
  query ExplorePage {
    markdownRemark(frontmatter: { templateKey: { eq: "explore-page" } }) {
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
