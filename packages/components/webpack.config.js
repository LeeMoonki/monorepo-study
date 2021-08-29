const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      // 이 설정을 해주지 않으면 번들링된 결과를 가져다 사용할 수 없습니다.
      // https://github.com/react-bootstrap/react-bootstrap
      // https://webpack.js.org/configuration/output/#type-umd
      name: 'ServiceComponents',
      type: 'umd'
    }
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              // '@babel/preset-env', // 가져다 사용하는 곳에서 다시 실행하므로 불필요합니다.
              '@babel/preset-typescript',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  },
  externals: {
    // 리액트를 번들링 결과에 포함하지 않습니다.
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  }
};