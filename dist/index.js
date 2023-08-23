
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./front-utils.cjs.production.min.js')
} else {
  module.exports = require('./front-utils.cjs.development.js')
}
