// import "@babylonjs/inspector";
import { Color3 } from '@babylonjs/core/Maths/math.color'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh'
import React, { FC, Suspense, useEffect, useRef, useState } from 'react'
import { Engine, ILoadedModel, Model, Scene } from 'react-babylonjs'

const Monkey: FC = ({
}) => {
	let baseUrl = '/glb/';

	const modelRef = useRef<AbstractMesh | null>(null)

	const onModelLoaded = (model: ILoadedModel) => {
		console.log("monkey model loaded");
		modelRef.current = model.rootMesh!
	}

	useEffect(() => {
		if (modelRef.current) {
		}
	}, [])

	return (
		<Suspense fallback={<box name="fallback" position={new Vector3(0, 0, 0)} />}>
			<Model
				name="Avocado"
				rootUrl={`${baseUrl}`}
				sceneFilename={`monkey.glb`}
				scaleToDimension={2}
				position={new Vector3(0, 3, 0)}
				onModelLoaded={onModelLoaded}
			/>
		</Suspense >
	)
}

export default Monkey;
