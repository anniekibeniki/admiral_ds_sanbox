module.exports = function (api) {
  api.cache(false);
  const presets = [
    ['@babel/preset-typescript'],
    ['@babel/preset-react'],
    [
      '@babel/preset-env',
      {
        corejs: { version: '3.9' },
        useBuiltIns: 'entry',
        targets: 'defaults',
      },
    ],
  ];
  const plugins = [
    ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
    ['@babel/plugin-proposal-class-properties'],
    ['@babel/plugin-transform-object-assign'],
    ['@babel/transform-runtime'],
  ];
  return {
    presets,
    plugins,
  };
};
