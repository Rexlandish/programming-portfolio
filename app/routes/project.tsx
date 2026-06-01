import { useParams } from "react-router";
import ProjectPageJeff from "./projectPages/jeff";

export default function Project() {
    const { projectName } = useParams();

    if (!projectName) {
        return <p>Project not found</p>;
    }

    return (
        <>
            <RenderProjectPage projectName={projectName} />
        </>
    );
}

export function RenderProjectPage({ projectName }: { projectName: string }) {
    switch (projectName) {
        case "jeff":
            return <ProjectPageJeff />;
            break;

        default:
            return <p>Project not found</p>;
    }
}
