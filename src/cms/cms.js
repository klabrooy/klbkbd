import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import CMS from 'netlify-cms-app'
import ExplorePagePreview from './preview-templates/ExplorePagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import WearPagePreview from './preview-templates/WearPagePreview'
import cloudinary from 'netlify-cms-media-library-cloudinary'
import uploadcare from 'netlify-cms-media-library-uploadcare'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('wear', WearPagePreview)
CMS.registerPreviewTemplate('explore', ExplorePagePreview)
