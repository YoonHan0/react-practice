
React Practice

1. 기본개념(Basics) **
2. 컴포넌트(Component) ***
3. 라우팅(Routing) **
4. Flux: Redux*
5. Testing(Rest)
6. Perforamance
7. 통합개발(Integration) **
   FE(React) + BE(Spring Boot, API Server)
8. [참고1] webpack-practice **
9. [참고2] babel-practice **
---
<br>

## ✅ WebPack이란?
웹사이트를 구성할 때 .js .css .image 파일 등 수많은 파일들이 모여 웹사이트를 구성한다.

따라서 웹사이트에 접속했을 때 상당히 많은 파일들이 다운되고, 비례해서 서버의 자원을 소모하고 느리게 로딩된다. 또한, 많은 자바스크립트 패키지등을 사용하다보면 각각의 서로 다른 패키지들이 서로 같은 이름이나 함수를 사용하게 되면서 애플리케이션이 깨지게 되는데

→ 이러한 현상을 해결하기 위해서 나온 것이 묶는다는 개념의 번들러이다 

(Weppack, Broserify, Parcel 과 같은 도구들이 번들러에 속함…)

<br>

> → 그래서 WebPack이란!

모던 JavaScript 애플리케이션을 위한 정적 모듈 번들러이다.

모듈 번들러란 웹 애플리케이션을 구성하는 자원(HTML, CSS, JavaScript)들을 모두 각각의 모듈로 보고 이를 병합해 하나의 결과물로 만드는 도구를 말함.

**웹팩에서 지칭하는 모듈은 자바스크립트 모듈 뿐만이 아닌 HTML, CSS, JS, Images, Font 등 모든 파일 하나하나 모듈이라 지칭하며 웹 애플리케이션을 구성하는 모든 자원을 모듈이라 보면 된다.**

**보통 모듈 번들링에서는 빌드, 번들링, 변환 이 세 단어는 모두 같은 의미로 사용된다고 한다.**

<br>
<br>

## ✅ Babel이란

> Babel is a JavaScript compiler.

Babel은 컴파일러이다!

JavaScript는 인터프린터 언어인데 왜 컴파일러가 있냐! 

→ Babel은 ‘JavaScript로’ 결과물을 만들어 주는 컴파일러이다! `소스 대 소스 컴파일러 (transpiler)이라고도 불림`

ex/ React or TypeScript로 된 코드도 결국에는 JavaScript로 변환되어 실행 되어야 함으로 그때 사용


### <u>Babel을 알아야 하는 이유</u>

빠르게 발전하고 있는 프론트엔드 분야에서 최신 브라우저 조차도 지원하지 못하는 문법, 기술들이 나오고 있다!

새로운 ESNext 문법을 기존의 브라우져에 사용하기 위해서 babel 은 필수적이다.


### <u>polyfill</u>

polyfill(폴리필)은 개발자가 특정 기능이 지원되지 않는 브라우저를 위해 사용할 수 있는 코드 조각이나 플러그인을 의미.

브라우저에서 지원하지 않는 기능들에 대한 호환성을 채워 넣는다고 해서 polyfill이라고 불림.

- babel polyfill
    
    : babel은 이러한 polyfill을 손쉽게 지원하기 위해서 babel-polyfill을 지원한다.
    
    - babel vs babel-polyfill
        
        babel은 문법을 변환하여 JavaScript로 변환하는 transpiler 역할만 함
        
        babel-polyfill은 프로그램이 처음 시작될 때 지원하지 않는 기능들을 추가하는 것
        
        즉, babel은 컴파일시에 실행되고, babel-polyfill은 런타임시에 실행