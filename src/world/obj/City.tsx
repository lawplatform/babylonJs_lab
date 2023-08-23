// import "@babylonjs/inspector";
import { Color3 } from '@babylonjs/core/Maths/math.color'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh'
import React, { FC, Suspense, useEffect, useRef, useState } from 'react'
import { Engine, ILoadedModel, Model, Scene, useBeforeRender, useScene } from 'react-babylonjs'

const City: FC = ({
}) => {
	let baseUrl = '/glb/';
	const scene = useScene()
	const modelRef = useRef<AbstractMesh | null>(null)
	const [y, setY] = useState(0)
	const onModelLoaded = (model: ILoadedModel) => {
		console.log("monkey model loaded");
		modelRef.current = model.rootMesh!
	}

	useEffect(() => {
		if (modelRef.current) {
		}
	}, [])

	useBeforeRender(() => {
		if (!scene) return
		const deltaTimeInMillis = scene.getEngine().getDeltaTime()
		setY((oldY) => oldY + (1 / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000))
	})

	return (
		<Suspense fallback={<box name="fallback" position={new Vector3(0, 0, 0)} />}>
			<Model
				name="city"
				rootUrl={`${baseUrl}`}
				sceneFilename={`city_full.glb`}
				scaleToDimension={1}
				position={new Vector3(0, -1, 5)}
				onModelLoaded={onModelLoaded}
				rotation={new Vector3(0, y, 0)}
				scaling={new Vector3(4, 4, 4)}
			/>
		</Suspense >
	)
}

export default City;
