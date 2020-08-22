import PropTypes from 'prop-types'
import React from 'react'
import { WearPageTemplate } from '../../templates/wear-page'

const WearPagePreview = ({ entry, getAsset }) => {
  return (
    <WearPageTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
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
