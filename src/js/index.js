//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));

import react, { useState } from "react";
import reactDom from "react-dom";
import "././styles.css";

const Counter = () => {
	const [count, setCount] = useState(0);
	return;
	<div>
		<h2>{count} likes</h2>
		<span OnClick={() => setCount(count + 1)}>👍🏽</span>
		<span OnClick={() => setCount(count - 1)}>👎🏽</span>
		<h3>Like or dislike to increase/decrease</h3>
	</div>;
};

ReactDOM.render(<Counter />, document.getElementById("root"));
