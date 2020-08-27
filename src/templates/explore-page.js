import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

export const ExplorePageTemplate = ({ blurbs }) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          {
            blurbs.map((blurb) => (
              <div key={blurb.title} id={blurb.title}>
                <PreviewCompatibleImage imageInfo={blurb.image} />
                <div className='wear_caption'>
                  <h2>
                    {blurb.title}
                  </h2>
                  <p>{blurb.description}</p>
                </div>
              </div>
            ))
          }
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
              fluid(maxWidth: 1024, quality: 100) {
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
