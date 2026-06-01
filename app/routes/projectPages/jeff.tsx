import jeff from "../../images/preview/jeff.png";

export default function ProjectPageJeff() {
    return (
        <>
            <h1>JEFF</h1>
            <img
                style={{ width: "10rem", height: "auto" }}
                src={jeff}
                alt="JEFF"
            />
            <Outline />
        </>
    );
}

export function Outline() {
    return (
        <div>
            <b>Technologies Used</b>
            <ul>
                <li>Unity</li>
            </ul>
            <b>Role</b>
            <ul>
                <li>Developer</li>
            </ul>
            <b>Responsibilities</b>
            <ul>
                <li>Game design and development</li>
            </ul>
            <b>Achievements</b>
            <ul>
                <li>Completed a playable demo</li>
            </ul>
            <b>Challenges</b>
            <ul>
                <li>Balancing game mechanics</li>
            </ul>
            <b>Future Plans</b>
            <ul>
                <li>Expand the game with more levels and features</li>
            </ul>
        </div>
    );
}
