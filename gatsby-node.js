exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  const config = getConfig()

  config.module.rules = [
    ...config.module.rules.filter(
      rule => String(rule.test) !== String(/\.(mjs|jsx?)$/)
    ),

    {
      ...loaders.js(),
      test: /\.(mjs|jsx?)$/,
      exclude: modulePath =>
        /node_modules/.test(modulePath) &&
        !/node_modules\/formol/.test(modulePath),
    },
  ]

  actions.replaceWebpackConfig(config)
}

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: require.resolve(`@babel/plugin-syntax-dynamic-import`),
  })

  actions.setBabelPlugin({
    name: require.resolve(`@babel/plugin-proposal-decorators`),
    options: { legacy: true },
  })

  actions.setBabelPlugin({
    name: require.resolve(`babel-plugin-add-react-static-displayname`),
  })

  actions.setBabelPlugin({
    name: require.resolve(`@babel/plugin-proposal-class-properties`),
    options: { loose: true },
  })
}