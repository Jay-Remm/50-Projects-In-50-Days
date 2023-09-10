const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

// checking to see if items are in local storage
const todos = JSON.parse(localStorage.getItem('todos'))

if(todos) {
    todos.forEach(todo => addTodo(todo))
}

// adding todo items from the form to the UL underneath
form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {
    let todoText = input.value

    if (todo) {
        todoText = todo.text
    }

    if (todoText) {
        const todoEl = document.createElement('li')
        if (todo && todo.completed) {
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText

        // listening for a click to mark the todo element as complete and back
        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
            // this is to make sure that when the todo with the completed class is added to local storage, it keeps the class when retreved from storage localStorage. ill do the same with the removal below.
            updateLS()
        })

        // listing for a right click to delete the todo element
        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            todoEl.remove()
            updateLS()
        })

        todosUL.appendChild(todoEl)

        // clears the input box for another submition
        input.value = ''

        // this will call the function to update the local storage
        updateLS()
    }
}

// the following is to save the todo inputs to local storage

// Note: when placing and getting object or arrays from local storage we need to remember to use JSON.stringify() and JSON.parse(localStorage.getItem())

function updateLS() {
    todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}