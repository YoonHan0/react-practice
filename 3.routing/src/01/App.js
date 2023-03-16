import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {

    const [route, setRoute] = useState("/");

    useEffect(() => {
        window.addEventListener('hashchange', handlerHashChange);
        return () => {
            window.removeEventListener('hashchange', handlerHashChange);
        }
    }, []);
    const handlerHashChange = function() {
        console.log(window.location.hash);
        setRoute(window.location.hash.substring(1));
    }
    /* 삼항연산자가 3개 이상 될 때 / if-else if-else를 사용하지말고 이런 식으로 사용 */
    return (() => {
        switch(route) {
            case '/':
                return <Main />;
            case '/guestbook':
                return <Guestbook />;
            case '/gallery':
                return <Gallery />;
            case '/gallery':
                return null;
        }
        return
    })();
}