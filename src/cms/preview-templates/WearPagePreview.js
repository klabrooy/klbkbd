import PropTypes from 'prop-types'
import React from 'react'
import { WearPageTemplate } from '../../templates/wear-page'

const WearPagePreview = ({ entry, getAsset }) => {
  return (
    <WearPageTemplate
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
      image={getAsset(entry.getIn(['data', 'image']))}
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
