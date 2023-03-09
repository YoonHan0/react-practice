ex02: Component Styling

1) Inline Styling
2) Normal CSS
   - css-loader options: {modules: false}
   - $ npm run debug src=02 css-modules=false
   - (import 'css file path') 해서 css 파일의 클래스 이름으로 적용

3) CSS Module I
   - css-loader options: {modules: true}
   - $ npm run debug src=03 css-modules=true
   - Component(App.js)에서 (import styles from 'css file path')으로 import해서 css 사용

4) CSS Module II
   - css-loader options: {modules: true}
   - $ npm run debug src=04 css-modules=true
   - 각 Component에서 (import styles from 'css file path')으로 import해서 css 사용

5) SASS & SCSS
   - css-loader options: {modules: true}
   - $ npm run debug src=05 css-modules=true
   - _variables.scss 파일에서 변수값을 만들어 두고 scss 파일에서 불러와서 사용

6) CSS in JS: Styled Component*, Less & Styleable
   - $ npm i styled-components
   - css-loader options: {modules: true}
   - $ npm run debug src=05 css-modules=true
   - 하위 Component에서 props.children를 이용해서 상위 Component에서 사용된 data 접근 가능


7) React Modal 
8) Modal: Material UI

==============================================================================================

1. 설치
    1) 개발툴
       $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader node-sass babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
    2) react library
       $ npm i react react-dom prop-types styled-components

2. webpack.config.js 설정
3. babel.config.json 설정
4. npm 스크립팅
5. 테스트 서버 실행
   $ npm run debug src=(01|02|03|04) css-modules=(true|false)

