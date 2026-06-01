import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Projects } from "~/projects";
import { Outlet } from "react-router";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Home | Rexlandish" },
        { name: "description", content: "Portfolio homepage" },
    ];
}

export default function Home() {
    return (
        <>
            <Header />
            <Projects />
        </>
    );
}

export function Header() {
    return (
        <>
            <header>
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
