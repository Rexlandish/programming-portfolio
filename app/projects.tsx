import jeff from "./images/preview/jeff.png";
import compression from "./images/preview/compression.gif";
import music from "./images/preview/music.gif";
import gravity from "./images/preview/gravity.gif";
import obstreperous from "./images/preview/obstreperous.gif";
import fourier from "./images/preview/fourier.gif";
import chess from "./images/preview/chess.gif";
import musicVis from "./images/preview/musicvis.gif";
import rhythm from "./images/preview/rhythm.gif";
import textImage from "./images/preview/dither-block.png";
import c2c from "./images/preview/c2c.png";
import parrykeet from "./images/preview/parrykeet.gif";

import { Link } from "react-router";
import { subtle } from "crypto";

export function Projects() {
    return (
        <div>
            <h2>Projects</h2>
            <p style={{ whiteSpace: "pre" }}>
                {`
!!: Can get cover image easily
! : Will need a small tweaking to get the cover image
? : Not doing tomorrow
X : No clue but want to do tomorrow

------------------------------------------------------------------------

=== UNITY ===

=== .NET ===

=== WEB BROWSER ===

=== PICO8 ===

------------------------------------------------------------------------

                    `}
            </p>
            <div className="preview-card-container">
                {projectPreviews.map((project) => (
                    <RenderProject project={project} />
                ))}
            </div>
            <br />
            <DEBUGListAllProgrammingProjects />
        </div>
    );
}

type Project = {
    name: string;
    subtitle: string;
    image: string;
    description: string;
    link: string;
};

/*
var projectPreviews = [
    {
        name: "jeff",
        image: jeff,
        description: "A simple chess-like game implemented in React.",
        link: "/project/jeff",
    },
    {
        name: "cardlike",
        image: cardlike,
        description: "A simple card game implemented in React.",
        link: "/project/cardlike",
    },
    {
        name: "chesslike",
        image: chesslike,
        description: "A simple chess-like game implemented in React.",
        link: "/project/chesslike",
    },
    {
        name: "comic",
        image: comic,
        description: "A simple comic implemented in React.",
        link: "/project/comic",
    },
    {
        name: "rabbit",
        image: rabbit,
        description: "A simple rabbit implemented in React.",
        link: "/project/rabbit",
    },
];
*/

var projectPreviews = [
    {
        name: "Rhythm Heaven Engine",
        subtitle: "Unity, C#",
        image: rhythm,
        description: "An engine for creating Rhythm Heaven-like minigames.",
        link: "/project/jeff",
    },
    {
        name: "Chess-like Engine",
        subtitle: "Unity, C#",
        image: chess,
        description:
            "A chess-like engine for custom pieces and rules (in progress).",
        link: "/project/jeff",
    },
    {
        name: "Parrykeet",
        subtitle: "Unity, C#",
        image: parrykeet,
        description: "A 1-week game jam rhythm game project.",
        link: "/project/jeff",
    },
    {
        name: "Obstreperous",
        subtitle: "Unity, FMOD",
        image: obstreperous,
        description: "1-Week Game Jam entry, multitasking",
        link: "/project/jeff",
    },
    {
        name: "Text-based Customisable Visualiser",
        subtitle: "C# .NET",
        image: musicVis,
        description: "A customisable ASCII music visualiser.",
        link: "/project/jeff",
    },
    {
        name: "JPEG Compression",
        subtitle: "PICO-8",
        image: compression,
        description:
            "A JPEG Compression algorithm implemented in the fantasy console PICO-8.",
        link: "/project/jeff",
    },
    /*
    {
        name: "Rexashima",
        subtitle: "PICO-8",
        image: jeff,
        description:
            "A Dr. Kawashima inspired brain training game in progress.",
        link: "/project/jeff",
    },
    */
    {
        name: "Fourier Transform Visualiser",
        subtitle: "PICO-8",
        image: fourier,
        description: "A graphic to represent fourier transforms.",
        link: "/project/jeff",
    },
    {
        name: "Animated Music Video",
        subtitle: "PICO-8",
        image: music,
        description: "A concept for a music video.",
        link: "/project/jeff",
    },

    {
        name: "Gravity Simulator",
        subtitle: "C++",
        image: gravity,
        description: "A commandline gravity simulator.",
        link: "/project/jeff",
    },
    {
        name: "Text Image Renderer",
        subtitle: "C# .NET",
        image: textImage,
        description:
            "Dithering / brightness based rendering of video / images.",
        link: "/project/jeff",
    },
    /*
    {
        name: "KTANE Demake",
        subtitle: "Python",
        image: jeff,
        description: "A demake of the game Keep Talking and Nobody Explodes.",
        link: "/project/jeff",
    },
    */
    {
        name: "Image2Crochet",
        subtitle: "Python",
        image: c2c,
        description:
            "Converts bitmap images into Corner-To-Corner crochet patterns.",
        link: "/project/jeff",
    },
];

export function DEBUGListAllProgrammingProjects() {
    return (
        <div>
            <b>Games</b>
            <ul>
                <li> === FLASHY === </li>
                <del>
                    <li>Obstreperous</li>
                    <li>Rhythm Game</li>
                    <li>Pico 8 - Compression</li>
                    <li>Pico 8 - Hierarchy</li>
                    <li>Pico 8 - Music Visualisation</li>
                    <li>Pico 8 - Rexashima</li>
                </del>
                <li>Arjybeasts</li>
                <li>Pico 8 - Sound</li>
            </ul>
            <b>C#</b>
            <ul>
                <li> === FLASHY === </li>
                <del>
                    <li>Ascii music visualiser</li>
                    <li>Gravity simulator</li>
                    <li>Video / Media to ascii</li>
                </del>
                <li> === LESS FLASHY === </li>
                <li>Encryption</li>
                <li>Matchmaking</li>
                <li>FMOD Wrapper</li>
            </ul>
            <b>Python</b>
            <ul>
                <li> === FLASHY === </li>
                <del>
                    <li>KTANE</li>
                    <li>spanish/portugese conjugation</li>
                    <li>chess</li>
                </del>
                <li>Blockscript</li>
                <li>dotsies</li>

                <li> === LESS FLASHY === </li>
                <li>Crochet</li>
                <li>order =&gt; flowchart</li>

                <li> === ? === </li>

                <li>Chatbot</li>
                <li>command search</li>
                <li>sewing tocrochet</li>
                <li>patatap</li>
                <li>image??</li>
            </ul>

            <b>Web</b>

            <ul>
                <li>
                    <b>HTML-CSS</b>
                    <ul>
                        <li> === FLASHY === </li>
                        <li>Responsive Website</li>
                        <li>Css animation</li>
                        <li>Form styling</li>
                        <li>Flexbox grid layout</li>
                        <li>Typography</li>
                        <li>Image gallery</li>
                        <li>CSS Frameworks</li>
                        <li>Screen reader</li>
                        <li>Website from mockup</li>
                        <li>Email template</li>
                        <li>Web App UI</li>
                    </ul>
                </li>
                <li>
                    <b>React</b>
                    <ul>
                        <li>Big Project</li>
                        <li>job-counter</li>
                        <li>loan-calculator</li>
                        <li>movie-review-app</li>
                        <li>password-generator</li>
                        <li>react-cards</li>
                        <li>tailwind-card-app</li>
                    </ul>
                </li>
                <li>
                    <b>Javascript</b>
                    <ul>
                        <li>Banking App</li>
                        <li>Basic Todolist</li>
                        <li>Calculator</li>
                        <li>Checklist</li>
                        <li>ClickerCounter</li>
                        <li>Listoperations</li>
                        <li>Responsive Image Gallery</li>
                        <li>Statistics</li>
                        <li>Website Theme Controller</li>
                        <li>Syo puzzle website?</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export function RenderProject({ project }: { project: Project }) {
    const p = projectPreviews.find((p) => p.name === project.name);
    if (!p) return null;

    return (
        <div key={project.name} className="preview-card">
            <h3>{p.name}</h3>
            <h4>{p.subtitle}</h4>
            <br />
            <img src={p.image} alt={p.name} />
            <p>{p.description}</p>
            <Link to={p.link}>View Project</Link>
        </div>
    );
}
