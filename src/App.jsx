import { useState, createElement } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Logos({ firstLogo, secondLogo }) {
	return createElement(
		"div",
		null,
		createElement(
			"a",
			{
				href: "https://vite.dev",
				target: "_blank",
			},
			createElement("img", {
				src: firstLogo,
				className: "logo",
				alt: "Vite logo",
			})
		),
		createElement(
			"a",
			{
				href: "https://react.dev",
				target: "_blank",
			},
			createElement("img", {
				src: secondLogo,
				className: "logo react",
				alt: "React logo",
			})
		)
	);
}

function Card({ count, setCount }) {
	return createElement(
		"div",
		{ className: "card" },
		createElement(
			"button",
			{ onClick: () => setCount((count) => count + 1) },
			`count is ${count}`
		),
		createElement(
			"p",
			null,
			"Edit ",
			createElement("code", null, "src/App.jsx"),
			" and save to test HMR"
		)
	);
}

function App() {
	const [count, setCount] = useState(0);
	const currentDate = new Date();

	return createElement(
		"div",
		null,
		createElement(Logos, {
			firstLogo: viteLogo,
			secondLogo: reactLogo,
		}),
		createElement("h1", null, "Vite + React"),
		createElement(Card, {
			count: count,
			setCount: setCount,
		}),
		createElement(
			"p",
			{ className: "read-the-docs" },
			"Click on the Vite and React logos to learn more"
		),
		createElement(
			"p",
			{ className: "read-the-docs" },
			currentDate.getFullYear()
		)

	);
}

export default App;
