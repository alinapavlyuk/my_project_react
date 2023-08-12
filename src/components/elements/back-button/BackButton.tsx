import "./backButton.scss";
import {Link} from "react-router-dom";

type BackButtonProps = {
    current: string;
}

export function BackButton({current}: BackButtonProps) {
    return (
        <div className="back-link">
            <Link to={"/"} className="navigation-link">&gt;&gt;[{current}]</Link>
        </div>
    )
}