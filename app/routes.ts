import {
    type RouteConfig,
    index,
    layout,
    route,
} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("project/:projectName", "routes/project.tsx"),
    route("project", "./routes/header.tsx", [
        route("jeff", "routes/projectPages/jeff.tsx"),
    ]),
] satisfies RouteConfig;
