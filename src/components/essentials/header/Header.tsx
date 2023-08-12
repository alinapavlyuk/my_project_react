import "./header.scss";
import {Link, useLocation} from "react-router-dom";
import {BackButton} from "../../elements/back-button/BackButton";
import {useEffect, useState} from "react";

export function Header() {
    const headerLinks: string[] = ["news", "music", "contact"];
    const [layout, setLayout] = useState<JSX.Element | null>(null);

    const location = useLocation();
    useEffect(() => {
        let pathname = location.pathname.split("/");
        if(pathname[1] === "") {
            setLayout(
                <nav>
                    <ul>
                        {headerLinks.map((link) => {
                            return (
                                <li key={link}>
                                    <Link to={"/" + link} className="navigation-link">[{link}]</Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            );
        } else {
            setLayout(<BackButton current={pathname[1]}/>);
        }
    }, [location]);

    return <header>{layout}</header>;
}