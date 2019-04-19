import API from 'goals-todos-api'

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'


function addTodo(todo) {
	return {
		type : ADD_TODO,
		todo
	}
}

function removeTodo(id) {
	return {
		type : REMOVE_TODO,
		id
	}
}

function toggleTodo(id) {
	return {
		type : TOGGLE_TODO,
		id
	}
}

export function handleAddTodo(name, resetInput) {
	return (dispatch) => {
		return API.saveTodo(name)
                    .then((todo) => {
                        dispatch(addTodo(todo))
                        resetInput()
                    })
                    .catch(() => alert("Error while adding todo, try again"))
	}
}

export function handleDeleteTodo(todo) {
	return (dispatch) => {
		dispatch(removeTodo(todo.id))
		return API.deleteTodo(todo.id).catch(() => {
			dispatch(addTodo(todo))
			alert("An error occured while deleting todo : "+ todo.name)
		})
	}
}

export function handleToggleTodo(todo) {
	return (dispatch) => {
		dispatch(toggleTodo(todo.id))
                return API.saveTodoToggle(todo.id).catch(() => {
                    dispatch(toggleTodo(todo.id))
                    alert("Error while toggling todo : "+ todo.name)
                })
	}
}
