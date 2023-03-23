

const input = document.querySelector('input')
const button = document.querySelector('button')
const div = document.querySelector('div')

const enterInput = (event) => {

    event.preventDefault()
    let list = document.createElement('ul')
    let listItem = document.createElement('li')
    listItem.textContent = input.value
    list.appendChild(listItem)
    div.appendChild(list)
    input.value = ''
}

button.addEventListener('click', enterInput)