const btn = document.querySelector('.btn')
const ul = document.querySelector('ul')
let text = document.querySelectorAll("input")[1]






btn.addEventListener('click', (e) => {
    e.preventDefault()
    const li = document.createElement('li')
    li.textContent = text.value

    ul.append(li)

})