//today's date 
let d = new Date()
document.getElementById('date').innerHTML = d.toDateString()

//todo logic
let add_todo_button = document.getElementById('add-todo')


let input_box = document.getElementById('input')

let createTask = () => {


	let todo = `<div></div>`
	todo.className = 'todo-item'


	let node = document.getElementById('todos-container').appendChild(todo)

	

}


add_todo_button.addEventListener('click', function () {
	createTask()
})