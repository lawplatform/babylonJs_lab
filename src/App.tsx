import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SceneContainer from "./components/SceneContainer";
import RotatingBox from "./obj/RotatingBox";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div id="my_canvas">
				hello world
				<h1 className="text-3xl font-bold underline text-green-400">
					Hello world!
				</h1>
				<SceneContainer>
					<RotatingBox rpm={50} />
					<ground name="ground" width={6} height={6} />
				</SceneContainer>
			</div>
		</>
	);
}

export default App;
