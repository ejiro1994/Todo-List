//today's date 
let d = new Date()
document.getElementById('date').innerHTML = d.toDateString()

//todo logic
let add_todo_button = document.getElementById('add-todo')


let input_box = document.getElementById('input')

let createTask = () => {


	let todo = document.createElement('div')
	let task = input_box.value


	let todo_html = `
		<div class="todo-item-left">
				<input type="checkbox" class="checkbox">

				<div class="text">${task}</div>

			</div>

			<div class="todo-item-right">
				<div class="change-text">edit</div>
				<div class="delete">
					<ion-icon name="trash"></ion-icon>
				</div>
			</div>
	`


	todo.innerHTML = todo_html

	todo.className = 'todo-item'


	 document.getElementById('todos-container').appendChild(todo)


	 input_box.value = ''
	// console.log(todo)
	// console.log(todo1)

}


add_todo_button.addEventListener('click', function () {
	createTask()
})