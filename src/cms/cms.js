import AboutPagePreview from './preview-templates/AboutPagePreview'
import CMS from 'netlify-cms-app'
import ExplorePagePreview from './preview-templates/ExplorePagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import ServicesPagePreview from './preview-templates/ServicesPagePreview'
import cloudinary from 'netlify-cms-media-library-cloudinary'
import uploadcare from 'netlify-cms-media-library-uploadcare'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('explore', ExplorePagePreview)
CMS.registerPreviewTemplate('services', ServicesPagePreview)

