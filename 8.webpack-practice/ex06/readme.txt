1. ex06: Image Module 번들링 하기

1. 설치 패키지
[ex06] $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader node-sass

2. CSS Loader 설정 (webpack.config.js)
    output: {
        path: path.resolve('public'),
        filename: 'assets/js/bundle.js',
        assetModuleFilename: 'assets/images/[hash][ext]'
    },
    module: {
        rules: [{
            test: /\.(c|sa|sc)ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,
            type: 'asset/resource'
        }]
    },
    
3. 스크립팅
    "scripts": {
        "start": "npx webpack serve --progress",
        "build": "npx webpack"
    }

4. 빌드
[ex06] $ npm run build

5. 실행
[ex06] $ npm start