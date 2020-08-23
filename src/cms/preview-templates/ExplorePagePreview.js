import { ExplorePageTemplate } from '../../templates/explore-page'
import PropTypes from 'prop-types'
import React from 'react'

const ExplorePagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []
  return (
    <ExplorePageTemplate
      blurbs={blurbs}
    />
  )
}

ExplorePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ExplorePagePreview
