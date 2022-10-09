module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {},
      },
    ],
    'babel-plugin-transform-typescript-metadata',
  ],
  ignore: [
    '**/*.d.ts',
    '**/App.tsx',
    'src/index.tsx',
  ],
};
