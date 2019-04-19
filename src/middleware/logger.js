
const logger = (store) => (next) => (action) => {
	console.group(action.type)
		console.log('Dispatched', action)
		const newState = next(action)
		console.log('New state is :', store.getState())
	console.groupEnd()
	return newState
}

export default logger