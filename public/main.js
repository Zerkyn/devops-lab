

const input = document.querySelector('input')
const beepBtn = document.getElementsByClassName('beep')
const div = document.querySelector('div')
const puppyBtn = document.getElementsByClassName('puppy')

const enterInput = (event) => {

    event.preventDefault()
    let list = document.createElement('ul')
    let listItem = document.createElement('li')
    listItem.textContent = input.value
    list.appendChild(listItem)
    div.appendChild(list)
    input.value = ''
}

beepBtn.addEventListener('click', enterInput)

const getPuppy = () => {
    console.log('beep')
    axios.get('http://localhost:4000/puppy')
        .then(res => {
            div.appendChild(`<img src="${res.data} />`)
        })
}

puppyBtn.onclick(() => getPuppy)