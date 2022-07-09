const { resolve } = require('path');
const glob = require('glob');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const cwd = process.cwd();

const data = (() => {
  const files = glob.sync(resolve(cwd, 'public/templates/*.html'));
  const inputs = glob.sync(resolve(cwd, 'src/*/main.*s'));
  const entry = inputs.reduce((prev, cur) => {
    const name = cur.split('/').slice(-2)[0]
    prev[name] = cur
    return prev
  }, {})
  const pages = files.reduce((prev, cur) => {
    const name = cur.split('/').slice(-1)[0].split('.')[0]
    const html = new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: resolve(cwd, `public/templates/${name}.html`),
      chunks: [`${name}`]
    })
    return [...prev, html]
  }, [])
  console.log('pages', pages);
  return { entry, pages };
})();
module.exports = {
  entry: data.entry,
  output: {
    filename: 'js/[name].js',
    clean: true,
  },
  // module: {
//     rules: [
//       {
//         test: /\.js$/,
//         loader: 'babel-loader',
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.ts$/,
//         use: [
//           'babel-loader',
//           'ts-loader',
//         ],
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.(css|scss|sass)$/,
//         use: [
//           {
//             loader: MiniCssExtractPlugin.loader,
//           },
//           'css-loader',
//           'postcss-loader',
//           'sass-loader',
//         ],
//       },
//       {
//         test: /\.(png|svg|jpg|jpeg|gif)$/,
//         type: 'asset',
//         parser: {
//           dataUrlCondition: {
//             maxSize: 5 * 1024,
//           },
//         },
//         generator: {
//           filename: 'images/[base]',
//         },
//       },
//       {
//         test: /\.(mp3|mp4)$/,
//         type: 'asset',
//         parser: {
//           dataUrlCondition: {
//             maxSize: 5 * 1024,
//           },
//         },
//         generator: {
//           filename: 'assets/[base]',
//         },
//       },
//       {
//         test: /\.vue$/,
//         loader: 'vue-loader',
//       },
//     ],
//   },
  plugins: [
    ...data.pages,
//     new VueLoaderPlugin(),
//     new MiniCssExtractPlugin({
//       filename: 'css/[name].[chunkhash:6].css',
//     }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve('./public/config.json'),
          to: './config.json',
        }
      ],
    }),
  ],
//   resolve: {
//     alias: {
//       '@': resolve(cwd, 'src'),
//     },
//     extensions: ['.js', 'ts', '.vue', '.json'],
//   },
};
