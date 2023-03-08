React Practice - Basics

ex00.cra: create-react-app으로 React Application 만들어 보기
`npm start` 명령어로 실행

ex01: 전통적인 DOM API 기반의 Application
ex02: 애플리케이션의 분리1 - 전통적인 단순한 파일 분리
ex03: 애플리케이션의 분리2 - ES6 모듈 시스템
    -> `import`를 사용하면서 index.html에서 script 파일을 불러오는 순서는 상관없게 됨

ex04: 애플리케이션 번들링(bundling) Tool === webpack
ex05: React API 기반으로 애플리케이션 리팩토링
    ```React.createElement('div', null, 'Hello World');```

ex06: React JSX 기반으로 애플리케이션 리팩토링
    ``` App.js는 JSX 문법으로 수정하고
        ReactDOM.render(App(), document.getElementById('root')); ```

ex07: ex00.cra Reconfiguration(내가 직접)
ex08: JSX Tutorial