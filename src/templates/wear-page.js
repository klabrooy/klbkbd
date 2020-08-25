import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

export const WearPageTemplate = ({ blurbs }) => {
  return (
    <section>
      <div className="container">
        <div className="section">
          {
            blurbs.map((blurb) => (
              <div id={blurb.title}>
                <PreviewCompatibleImage imageInfo={blurb.image}/>
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
              fluid(maxWidth: 2048, quality: 100) {
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
