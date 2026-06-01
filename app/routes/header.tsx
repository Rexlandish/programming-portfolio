import { Navigate, useNavigate } from "react-router";
import { Outlet } from "react-router";

export default function Header() {
    const navigate = useNavigate();
    return (
        <>
            <header>
                <button onClick={() => navigate(-1)}>&lt;Back</button>
                <h1>Rexlandish</h1>
                <Socials />
            </header>
            <Outlet />
        </>
    );
}

export function Socials() {
    return (
        <>
            <ul>
                <li>
                    <a href="/">itch.io</a>
                </li>
                <li>
                    <a href="/">soundcloud</a>
                </li>
                <li>
                    <a href="/">bsky</a>
                </li>
                <li>
                    <a href="/">X</a>
                </li>
                <li>
                    <a href="/">linkedin</a>
                </li>
            </ul>
        </>
    );
}
