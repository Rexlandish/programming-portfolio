import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Link, Links, Meta, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, useNavigate, useParams } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/@react-router/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		let userAgent = request.headers.get("user-agent");
		let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), streamTimeout + 1e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
//#endregion
//#region app/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({
	ErrorBoundary: () => ErrorBoundary,
	Layout: () => Layout,
	default: () => root_default,
	links: () => links
});
var links = () => [
	{
		rel: "preconnect",
		href: "https://fonts.googleapis.com"
	},
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous"
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
	}
];
function Layout({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			}),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", { children: [
			children,
			/* @__PURE__ */ jsx(ScrollRestoration, {}),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
}
var root_default = UNSAFE_withComponentProps(function App() {
	return /* @__PURE__ */ jsx(Outlet, {});
});
var ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary({ error }) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack;
	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
	}
	return /* @__PURE__ */ jsxs("main", {
		className: "pt-16 p-4 container mx-auto",
		children: [
			/* @__PURE__ */ jsx("h1", { children: message }),
			/* @__PURE__ */ jsx("p", { children: details }),
			stack
		]
	});
});
//#endregion
//#region app/images/preview/jeff.png
var jeff_default$1 = "/programming-portfolio/assets/jeff-BfpJCRbe.png";
//#endregion
//#region app/images/preview/compression.gif
var compression_default = "/programming-portfolio/assets/compression-CXxobP51.gif";
//#endregion
//#region app/images/preview/music.gif
var music_default = "/programming-portfolio/assets/music-HwTSdJps.gif";
//#endregion
//#region app/images/preview/gravity.gif
var gravity_default = "/programming-portfolio/assets/gravity-CPUG_PKL.gif";
//#endregion
//#region app/images/preview/obstreperous.gif
var obstreperous_default = "/programming-portfolio/assets/obstreperous-CTRbFUx5.gif";
//#endregion
//#region app/images/preview/fourier.gif
var fourier_default = "/programming-portfolio/assets/fourier-BX0UKuoO.gif";
//#endregion
//#region app/images/preview/chess.gif
var chess_default = "/programming-portfolio/assets/chess-D4qeoCYO.gif";
//#endregion
//#region app/images/preview/musicvis.gif
var musicvis_default = "/programming-portfolio/assets/musicvis-COEOcxSZ.gif";
//#endregion
//#region app/images/preview/rhythm.gif
var rhythm_default = "/programming-portfolio/assets/rhythm-Cizcy-1-.gif";
//#endregion
//#region app/images/preview/dither-block.png
var dither_block_default = "/programming-portfolio/assets/dither-block-BMwyMeYo.png";
//#endregion
//#region app/images/preview/c2c.png
var c2c_default = "/programming-portfolio/assets/c2c-DpM_iTHL.png";
//#endregion
//#region app/images/preview/parrykeet.gif
var parrykeet_default = "/programming-portfolio/assets/parrykeet-D_TiqjN7.gif";
//#endregion
//#region app/projects.tsx
function Projects() {
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsx("h2", { children: "Projects" }),
		/* @__PURE__ */ jsx("p", {
			style: { whiteSpace: "pre" },
			children: `
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

                    `
		}),
		/* @__PURE__ */ jsx("div", {
			className: "preview-card-container",
			children: projectPreviews.map((project) => /* @__PURE__ */ jsx(RenderProject, { project }))
		}),
		/* @__PURE__ */ jsx("br", {}),
		/* @__PURE__ */ jsx(DEBUGListAllProgrammingProjects, {})
	] });
}
var projectPreviews = [
	{
		name: "Rhythm Heaven Engine",
		subtitle: "Unity, C#",
		image: rhythm_default,
		description: "An engine for creating Rhythm Heaven-like minigames.",
		link: "/project/jeff"
	},
	{
		name: "Chess-like Engine",
		subtitle: "Unity, C#",
		image: chess_default,
		description: "A chess-like engine for custom pieces and rules (in progress).",
		link: "/project/jeff"
	},
	{
		name: "Parrykeet",
		subtitle: "Unity, C#",
		image: parrykeet_default,
		description: "A 1-week game jam rhythm game project.",
		link: "/project/jeff"
	},
	{
		name: "Obstreperous",
		subtitle: "Unity, FMOD",
		image: obstreperous_default,
		description: "1-Week Game Jam entry, multitasking",
		link: "/project/jeff"
	},
	{
		name: "Text-based Customisable Visualiser",
		subtitle: "C# .NET",
		image: musicvis_default,
		description: "A customisable ASCII music visualiser.",
		link: "/project/jeff"
	},
	{
		name: "JPEG Compression",
		subtitle: "PICO-8",
		image: compression_default,
		description: "A JPEG Compression algorithm implemented in the fantasy console PICO-8.",
		link: "/project/jeff"
	},
	{
		name: "Fourier Transform Visualiser",
		subtitle: "PICO-8",
		image: fourier_default,
		description: "A graphic to represent fourier transforms.",
		link: "/project/jeff"
	},
	{
		name: "Animated Music Video",
		subtitle: "PICO-8",
		image: music_default,
		description: "A concept for a music video.",
		link: "/project/jeff"
	},
	{
		name: "Gravity Simulator",
		subtitle: "C++",
		image: gravity_default,
		description: "A commandline gravity simulator.",
		link: "/project/jeff"
	},
	{
		name: "Text Image Renderer",
		subtitle: "C# .NET",
		image: dither_block_default,
		description: "Dithering / brightness based rendering of video / images.",
		link: "/project/jeff"
	},
	{
		name: "Image2Crochet",
		subtitle: "Python",
		image: c2c_default,
		description: "Converts bitmap images into Corner-To-Corner crochet patterns.",
		link: "/project/jeff"
	}
];
function DEBUGListAllProgrammingProjects() {
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsx("b", { children: "Games" }),
		/* @__PURE__ */ jsxs("ul", { children: [
			/* @__PURE__ */ jsx("li", { children: " === FLASHY === " }),
			/* @__PURE__ */ jsxs("del", { children: [
				/* @__PURE__ */ jsx("li", { children: "Obstreperous" }),
				/* @__PURE__ */ jsx("li", { children: "Rhythm Game" }),
				/* @__PURE__ */ jsx("li", { children: "Pico 8 - Compression" }),
				/* @__PURE__ */ jsx("li", { children: "Pico 8 - Hierarchy" }),
				/* @__PURE__ */ jsx("li", { children: "Pico 8 - Music Visualisation" }),
				/* @__PURE__ */ jsx("li", { children: "Pico 8 - Rexashima" })
			] }),
			/* @__PURE__ */ jsx("li", { children: "Arjybeasts" }),
			/* @__PURE__ */ jsx("li", { children: "Pico 8 - Sound" })
		] }),
		/* @__PURE__ */ jsx("b", { children: "C#" }),
		/* @__PURE__ */ jsxs("ul", { children: [
			/* @__PURE__ */ jsx("li", { children: " === FLASHY === " }),
			/* @__PURE__ */ jsxs("del", { children: [
				/* @__PURE__ */ jsx("li", { children: "Ascii music visualiser" }),
				/* @__PURE__ */ jsx("li", { children: "Gravity simulator" }),
				/* @__PURE__ */ jsx("li", { children: "Video / Media to ascii" })
			] }),
			/* @__PURE__ */ jsx("li", { children: " === LESS FLASHY === " }),
			/* @__PURE__ */ jsx("li", { children: "Encryption" }),
			/* @__PURE__ */ jsx("li", { children: "Matchmaking" }),
			/* @__PURE__ */ jsx("li", { children: "FMOD Wrapper" })
		] }),
		/* @__PURE__ */ jsx("b", { children: "Python" }),
		/* @__PURE__ */ jsxs("ul", { children: [
			/* @__PURE__ */ jsx("li", { children: " === FLASHY === " }),
			/* @__PURE__ */ jsxs("del", { children: [
				/* @__PURE__ */ jsx("li", { children: "KTANE" }),
				/* @__PURE__ */ jsx("li", { children: "spanish/portugese conjugation" }),
				/* @__PURE__ */ jsx("li", { children: "chess" })
			] }),
			/* @__PURE__ */ jsx("li", { children: "Blockscript" }),
			/* @__PURE__ */ jsx("li", { children: "dotsies" }),
			/* @__PURE__ */ jsx("li", { children: " === LESS FLASHY === " }),
			/* @__PURE__ */ jsx("li", { children: "Crochet" }),
			/* @__PURE__ */ jsx("li", { children: "order => flowchart" }),
			/* @__PURE__ */ jsx("li", { children: " === ? === " }),
			/* @__PURE__ */ jsx("li", { children: "Chatbot" }),
			/* @__PURE__ */ jsx("li", { children: "command search" }),
			/* @__PURE__ */ jsx("li", { children: "sewing tocrochet" }),
			/* @__PURE__ */ jsx("li", { children: "patatap" }),
			/* @__PURE__ */ jsx("li", { children: "image??" })
		] }),
		/* @__PURE__ */ jsx("b", { children: "Web" }),
		/* @__PURE__ */ jsxs("ul", { children: [
			/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("b", { children: "HTML-CSS" }), /* @__PURE__ */ jsxs("ul", { children: [
				/* @__PURE__ */ jsx("li", { children: " === FLASHY === " }),
				/* @__PURE__ */ jsx("li", { children: "Responsive Website" }),
				/* @__PURE__ */ jsx("li", { children: "Css animation" }),
				/* @__PURE__ */ jsx("li", { children: "Form styling" }),
				/* @__PURE__ */ jsx("li", { children: "Flexbox grid layout" }),
				/* @__PURE__ */ jsx("li", { children: "Typography" }),
				/* @__PURE__ */ jsx("li", { children: "Image gallery" }),
				/* @__PURE__ */ jsx("li", { children: "CSS Frameworks" }),
				/* @__PURE__ */ jsx("li", { children: "Screen reader" }),
				/* @__PURE__ */ jsx("li", { children: "Website from mockup" }),
				/* @__PURE__ */ jsx("li", { children: "Email template" }),
				/* @__PURE__ */ jsx("li", { children: "Web App UI" })
			] })] }),
			/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("b", { children: "React" }), /* @__PURE__ */ jsxs("ul", { children: [
				/* @__PURE__ */ jsx("li", { children: "Big Project" }),
				/* @__PURE__ */ jsx("li", { children: "job-counter" }),
				/* @__PURE__ */ jsx("li", { children: "loan-calculator" }),
				/* @__PURE__ */ jsx("li", { children: "movie-review-app" }),
				/* @__PURE__ */ jsx("li", { children: "password-generator" }),
				/* @__PURE__ */ jsx("li", { children: "react-cards" }),
				/* @__PURE__ */ jsx("li", { children: "tailwind-card-app" })
			] })] }),
			/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("b", { children: "Javascript" }), /* @__PURE__ */ jsxs("ul", { children: [
				/* @__PURE__ */ jsx("li", { children: "Banking App" }),
				/* @__PURE__ */ jsx("li", { children: "Basic Todolist" }),
				/* @__PURE__ */ jsx("li", { children: "Calculator" }),
				/* @__PURE__ */ jsx("li", { children: "Checklist" }),
				/* @__PURE__ */ jsx("li", { children: "ClickerCounter" }),
				/* @__PURE__ */ jsx("li", { children: "Listoperations" }),
				/* @__PURE__ */ jsx("li", { children: "Responsive Image Gallery" }),
				/* @__PURE__ */ jsx("li", { children: "Statistics" }),
				/* @__PURE__ */ jsx("li", { children: "Website Theme Controller" }),
				/* @__PURE__ */ jsx("li", { children: "Syo puzzle website?" })
			] })] })
		] })
	] });
}
function RenderProject({ project }) {
	const p = projectPreviews.find((p) => p.name === project.name);
	if (!p) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: "preview-card",
		children: [
			/* @__PURE__ */ jsx("h3", { children: p.name }),
			/* @__PURE__ */ jsx("h4", { children: p.subtitle }),
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsx("img", {
				src: p.image,
				alt: p.name
			}),
			/* @__PURE__ */ jsx("p", { children: p.description }),
			/* @__PURE__ */ jsx(Link, {
				to: p.link,
				children: "View Project"
			})
		]
	}, project.name);
}
//#endregion
//#region app/routes/home.tsx
var home_exports = /* @__PURE__ */ __exportAll({
	Header: () => Header,
	Socials: () => Socials$1,
	default: () => home_default,
	meta: () => meta
});
function meta({}) {
	return [{ title: "Home | Rexlandish" }, {
		name: "description",
		content: "Portfolio homepage"
	}];
}
var home_default = UNSAFE_withComponentProps(function Home() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Header, {}), /* @__PURE__ */ jsx(Projects, {})] });
});
function Header() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("header", { children: [/* @__PURE__ */ jsx("h1", { children: "Rexlandish" }), /* @__PURE__ */ jsx(Socials$1, {})] }), /* @__PURE__ */ jsx(Outlet, {})] });
}
function Socials$1() {
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("ul", { children: [
		/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
			href: "/",
			children: "itch.io"
		}) }),
		/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
			href: "/",
			children: "soundcloud"
		}) }),
		/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
			href: "/",
			children: "bsky"
		}) }),
		/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
			href: "/",
			children: "X"
		}) }),
		/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
			href: "/",
			children: "linkedin"
		}) })
	] }) });
}
//#endregion
//#region app/routes/projectPages/jeff.tsx
var jeff_exports = /* @__PURE__ */ __exportAll({
	Outline: () => Outline,
	default: () => jeff_default
});
var jeff_default = UNSAFE_withComponentProps(function ProjectPageJeff() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("h1", { children: "JEFF" }),
		/* @__PURE__ */ jsx("img", {
			style: {
				width: "10rem",
				height: "auto"
			},
			src: jeff_default$1,
			alt: "JEFF"
		}),
		/* @__PURE__ */ jsx(Outline, {})
	] });
});
function Outline() {
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsx("b", { children: "Technologies Used" }),
		/* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx("li", { children: "Unity" }) }),
		/* @__PURE__ */ jsx("b", { children: "Role" }),
		/* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx("li", { children: "Developer" }) }),
		/* @__PURE__ */ jsx("b", { children: "Responsibilities" }),
		/* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx("li", { children: "Game design and development" }) }),
		/* @__PURE__ */ jsx("b", { children: "Achievements" }),
		/* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx("li", { children: "Completed a playable demo" }) }),
		/* @__PURE__ */ jsx("b", { children: "Challenges" }),
		/* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx("li", { children: "Balancing game mechanics" }) }),
		/* @__PURE__ */ jsx("b", { children: "Future Plans" }),
		/* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx("li", { children: "Expand the game with more levels and features" }) })
	] });
}
//#endregion
//#region app/routes/project.tsx
var project_exports = /* @__PURE__ */ __exportAll({
	RenderProjectPage: () => RenderProjectPage,
	default: () => project_default
});
var project_default = UNSAFE_withComponentProps(function Project() {
	const { projectName } = useParams();
	if (!projectName) return /* @__PURE__ */ jsx("p", { children: "Project not found" });
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(RenderProjectPage, { projectName }) });
});
function RenderProjectPage({ projectName }) {
	switch (projectName) {
		case "jeff": return /* @__PURE__ */ jsx(jeff_default, {});
		default: return /* @__PURE__ */ jsx("p", { children: "Project not found" });
	}
}
//#endregion
//#region app/routes/header.tsx
var header_exports = /* @__PURE__ */ __exportAll({
	Socials: () => Socials,
	default: () => header_default
});
var header_default = UNSAFE_withComponentProps(function Header() {
	const navigate = useNavigate();
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("header", { children: [
		/* @__PURE__ */ jsx("button", {
			onClick: () => navigate(-1),
			children: "<Back"
		}),
		/* @__PURE__ */ jsx("h1", { children: "Rexlandish" }),
		/* @__PURE__ */ jsx(Socials, {})
	] }), /* @__PURE__ */ jsx(Outlet, {})] });
});
function Socials() {
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("ul", { children: [
		/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
			href: "/",
			children: "itch.io"
		}) }),
		/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
			href: "/",
			children: "soundcloud"
		}) }),
		/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
			href: "/",
			children: "bsky"
		}) }),
		/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
			href: "/",
			children: "X"
		}) }),
		/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
			href: "/",
			children: "linkedin"
		}) })
	] }) });
}
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/programming-portfolioassets/entry.client-PKB05B-Z.js",
		"imports": ["/programming-portfolioassets/jsx-runtime-BtYww0gW.js"],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": true,
			"module": "/programming-portfolioassets/root-BJxod4GZ.js",
			"imports": ["/programming-portfolioassets/jsx-runtime-BtYww0gW.js"],
			"css": ["/programming-portfolioassets/root-Bm4bgI33.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/home": {
			"id": "routes/home",
			"parentId": "root",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/programming-portfolioassets/home-CtHAiyWO.js",
			"imports": ["/programming-portfolioassets/jsx-runtime-BtYww0gW.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/project": {
			"id": "routes/project",
			"parentId": "root",
			"path": "project/:projectName",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/programming-portfolioassets/project-CbUwAn5W.js",
			"imports": [
				"/programming-portfolioassets/jsx-runtime-BtYww0gW.js",
				"/programming-portfolioassets/jeff-BsoS8Fg3.js",
				"/programming-portfolioassets/jeff-COej18lt.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/header": {
			"id": "routes/header",
			"parentId": "root",
			"path": "project",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/programming-portfolioassets/header-BHJ_88Z9.js",
			"imports": ["/programming-portfolioassets/jsx-runtime-BtYww0gW.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/projectPages/jeff": {
			"id": "routes/projectPages/jeff",
			"parentId": "routes/header",
			"path": "jeff",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/programming-portfolioassets/jeff-QYZP8DKz.js",
			"imports": [
				"/programming-portfolioassets/jeff-BsoS8Fg3.js",
				"/programming-portfolioassets/jsx-runtime-BtYww0gW.js",
				"/programming-portfolioassets/jeff-COej18lt.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/programming-portfolioassets/manifest-7e6cc221.js",
	"version": "7e6cc221",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var assetsBuildDirectory = "build\\client";
var basename = "/programming-portfolio";
var future = {
	"unstable_optimizeDeps": false,
	"v8_passThroughRequests": false,
	"unstable_trailingSlashAwareDataRequests": false,
	"unstable_previewServerPrerendering": false,
	"v8_middleware": false,
	"v8_splitRouteModules": false,
	"v8_viteEnvironmentApi": false
};
var ssr = true;
var isSpaMode = false;
var prerender = [];
var routeDiscovery = {
	"mode": "lazy",
	"manifestPath": "/__manifest"
};
var publicPath = "/programming-portfolio";
var entry = { module: entry_server_node_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"routes/home": {
		id: "routes/home",
		parentId: "root",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: home_exports
	},
	"routes/project": {
		id: "routes/project",
		parentId: "root",
		path: "project/:projectName",
		index: void 0,
		caseSensitive: void 0,
		module: project_exports
	},
	"routes/header": {
		id: "routes/header",
		parentId: "root",
		path: "project",
		index: void 0,
		caseSensitive: void 0,
		module: header_exports
	},
	"routes/projectPages/jeff": {
		id: "routes/projectPages/jeff",
		parentId: "routes/header",
		path: "jeff",
		index: void 0,
		caseSensitive: void 0,
		module: jeff_exports
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
