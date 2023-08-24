import "./App.css";
import SceneContainer from "./components/SceneContainer";
import Monkey from "./world/obj/Monkey";
import "@babylonjs/loaders/glTF";
import Card_AB from "./components/Card_AB";
import anime from 'animejs/lib/anime.js';
import { observable } from "@legendapp/state"
import { Memo, For, Reactive, Show, Switch } from "@legendapp/state/react"
import City from "./world/obj/City";
function App() {

	const view$ = observable(false);
	const textDiv = document.getElementById('card');
	view$.onChange(() => {
		console.log(view$.get());
	})

	const toggleShow = async () => {
		const myDiv = document.getElementById("my");
		var animation = anime({
			targets: '#my',
			translateX: 250
		});
		if (myDiv != null) {
			myDiv.style.display = "block";
			animation.play();
		}

	}
	return (
		<>
			<div id="my_canvas">
				hello world
				<button onClick={toggleShow} className="btn btn-neutral"> show ? </button>
				<div>
					<div className="green fixed top-3 bottom-3" id="my">
						<Card_AB></Card_AB>
					</div>
					<h1 className="text-3xl font-bold underline text-green-400">
						Hello world!
					</h1>

					<SceneContainer>
						<City></City>
					</SceneContainer>
				</div ></div>			</>
	);
}

export default App;
