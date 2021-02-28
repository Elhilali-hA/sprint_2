const btn = document.querySelector('.btn')
const ul = document.querySelector('ul')
const text = document.querySelector('.t')
btn.addEventListener('click', (e) => {
    e.preventDefault()
    const li = document.createElement('li')
    li.innerHTML = `${text}`

    ul.prepend(li)

})