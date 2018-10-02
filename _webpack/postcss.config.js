module.exports = ctx => ({
  plugins: {
    '@csstools/postcss-sass': {
        includePaths: [
          'node_modules/@coopdigital/coop-frontend-components/',
          'node_modules/@coopdigital/coop-frontend-foundations/'
        ]
    },
    'postcss-import': {},
    'postcss-preset-env': {
      browsers: ['last 2 versions', '> 5%'],
    },
    cssnano: ['production', 'staging'].includes(ctx.env) ? {} : false
  },
})
