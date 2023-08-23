import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { Mesh } from '@babylonjs/core/Meshes/mesh'
import { MeshAssetTask } from '@babylonjs/core/Misc/assetsManager'
import React, { Suspense, useContext, useEffect, useMemo, useRef } from 'react'
import {
	AssetManagerContext,
	AssetManagerContextProvider,
	Engine,
	Scene,
	Task,
	TaskType,
	useAssetManager,
	useBeforeRender,
} from 'react-babylonjs'

const modelAssetTasks: Task[] = [
	{
		taskType: TaskType.Mesh,
		rootUrl: `/glb/`,
		sceneFilename: 'logo.glb',
		name: 'logo',
	}
]

const MyFallback = () => {
	const boxRef = useRef<Mesh | null>(null)
	const context = useContext(AssetManagerContext)
	useBeforeRender((scene) => {
		if (boxRef.current) {
			var deltaTimeInMillis = scene.getEngine().getDeltaTime()

			const rpm = 10
			boxRef.current.rotation.x = Math.PI / 4
			boxRef.current.rotation.y +=
				(rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000)
		}
	})
	return (
		<>
			<box ref={boxRef} name="fallback" size={2} />
		</>
	)
}


const LogoModel = () => {
	const assetManagerResult = useAssetManager(modelAssetTasks);
	useEffect(() => {
		console.log('Loaded Tasks', assetManagerResult)
		const boomboxTask = assetManagerResult.taskNameMap[
			'logo'
		] as MeshAssetTask
		boomboxTask.loadedMeshes[0].position = new Vector3(2.5, 0, 0)
		boomboxTask.loadedMeshes[1].scaling = new Vector3(1, 1, 1)
	})

	return null
}

const Logo = () => {
	return (
		<AssetManagerContextProvider>
			<Suspense fallback={<MyFallback />}>
				<LogoModel />
			</Suspense>
		</AssetManagerContextProvider>
	)
}

export default Logo;
