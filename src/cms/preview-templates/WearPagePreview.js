import PropTypes from 'prop-types'
import React from 'react'
import { WearPageTemplate } from '../../templates/wear-page'

const WearPagePreview = ({ entry }) => {
  const entryBlurbs = entry.getIn(['data', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []
  return (
    <WearPageTemplate
      blurbs={blurbs}
    />
  )
}

WearPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default WearPagePreview
