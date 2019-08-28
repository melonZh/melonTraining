const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const NODE_ENV=process.env.NODE_ENV;
console.log("--------"+NODE_ENV+"-----------");

module.exports = {
  entry: './src/index.js', // 入口js文件
  output: {
    filename: 'bundle.[hash].js',
    path: path.join(__dirname, '/dist'),
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          'postcss-loader',
        ]
      },
      {// antd样式处理
        test:/\.css$/,
        exclude:/src/,
        use:[
            { loader: "style-loader",},
            {
                loader: "css-loader",
                options:{
                    importLoaders:1
                }
            }
        ]
      },
      { // es6 jsx处理
        test:/(\.jsx|\.js)$/,
        exclude: /node_modules/,
        loader:'babel-loader',
      },
      { // less 处理
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html' // 入口html文件
    }),
    new CleanWebpackPlugin()
  ],
  node: {
    __filename: true,
  },
  resolve: {
    alias: {
      "Src": path.resolve("src"),
      "Contants": path.resolve("src/Contants"),
      "Pages": path.resolve("src/Pages"),
      "Styles": path.resolve("src/Styles"),
      "Components": path.resolve("src/Components"),
      "Utils": path.resolve("src/Utils"),
      "Apis": path.resolve("src/Apis"),
      "Actions": path.resolve("src/Redux/Actions"),
      "Reducers": path.resolve("src/Redux/Reducers"),
      "ActionTypes": path.resolve("src/Redux/ActionTypes"),
      "Servers": path.resolve("src/Servers"),
      "Mock": path.resolve("src/Mock"),
    }
  }
};
