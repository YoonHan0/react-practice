1. ex03: webpack 개발서버

1. 설치 패키지
[ex03] $ npm i -D webpack webpack-cli webpack-dev-server

2. 번들링 환경(webpack.config.js) 설정
    - devServer

3. 스크립팅
    "scripts": {
        "start": "npx webpack serve --progress",
        "build": "npx webpack"
    }

4. 빌드
[ex03] $ npm run build

5. 실행
[ex03] $ npm start