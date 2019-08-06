
let input = document.querySelector('.input')
let list = document.querySelector('.list')
let buttonAdd = document.querySelector('#add-todo')


let addTodo = ()=> {

	let div = document.createElement('div')
	div.className = 'listItemDiv'
	let newListItem = document.createElement('li')
	newListItem.className = 'newListItem'
	let text = document.createElement('p')
	text.className = 'text'
	text.innerHTML = input.value
	let removeButton = document.createElement('button')
	removeButton.innerHTML = "remove"
	removeButton.className = 'removeButton'
	let editButton = document.createElement('button')
	editButton.innerHTML = "edit"
	editButton.className = 'editButton'

	let input2 = document.createElement('input')
	input2.style.display = "none"
	input2.className = 'input2'

	newListItem.appendChild(div)
	div.appendChild(text)
	div.appendChild(input2)
	div.appendChild(editButton)
	div.appendChild(removeButton)
	list.appendChild(newListItem)

	console.log('hello')


	removeButton.addEventListener('click', (e)=>{
		list.removeChild(e.target.parentNode.parentNode)
	})

	input.value = ''

	editButton.addEventListener('click', ()=>{
		input2.style.display = "block"
		text.style.display = "none"
	})

}


buttonAdd.addEventListener( 'click', ()=> {
	addTodo()

})


