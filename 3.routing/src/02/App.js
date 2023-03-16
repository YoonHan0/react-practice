import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    const [route, setRoute] = useState({page: '/'});

    useEffect(() => {
        const handlerPopState = e => {
            console.log(e.state);
            setRoute(e.state);
            // e.state !== null ? setRoute(e.state) : setRoute({page: '/'});
        }
        window.addEventListener('popstate', handlerPopState);

        return () => {
            window.removeEventListener('popstate', handlerPopState);
        }
    },[]);


    const handleLinkClick = (e) => {
        e.preventDefault();
        console.log(e.target.text); // 태그 안의 text
        console.log(e.target.href); // 전체 href: http://localhost:9090/
        console.log(e.target.href.substring(e.target.href.lastIndexOf("/")));   // /

        const url = e.target.href.substring(e.target.href.lastIndexOf("/"));
        window.history.pushState({page: url}, e.target.text, url);

        setRoute({page: url});
    }

    return (
        <div>
            {
                (() => {
                    switch (route.page) {
                        case '/':
                            return <Main/>;
                        case '/gallery':
                            return <Gallery/>;
                        case '/guestbook':
                            return <Guestbook/>;
                        default:
                            null;
                            break;
                    }
                })()
            }
            <ul>
                <li><a href={'/'} onClick={handleLinkClick}>[Main]</a></li>
                <li><a href={'/gallery'} onClick={handleLinkClick}>[Gallery]</a></li>
                <li><a href={'/guestbook'} onClick={handleLinkClick}>[Guestbook]</a></li>
            </ul>
        </div>
    )
}