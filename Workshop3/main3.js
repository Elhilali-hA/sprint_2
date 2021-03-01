// const btn = document.querySelector('.btn')
// const ul = document.querySelector('ul')
// let text = document.querySelectorAll("input")[1]






// btn.addEventListener('click', (e) => {
//     e.preventDefault()
//     const li = document.createElement('li')
//     li.textContent = text.value

//     ul.append(li)

//})



const todo_name = document.querySelector(".todo-name")
const btn = document.querySelector(".btn")
const todo_list = document.querySelector(".todo-list")
const search = document.querySelector(".search-todo")



btn.addEventListener("click", addnewtodo)
todo_list.addEventListener("click", delete_item)
search.addEventListener("keyup", searchbar)

// search.addEventListener("")





function addnewtodo(e) {
    e.preventDefault();
    const todo = document.createElement('div');
    todo.classList.add('todo-do');
    const newtodo = document.createElement('li');
    newtodo.innerText = todo_name.value;
    newtodo.classList.add('todo-names');
    todo.appendChild(newtodo)
    const delet = document.createElement('button');
    delet.innerHTML = `<i class = "fas fa-trash"></i>`
    delet.classList.add("trash-btn");
    todo.appendChild(delet);
    todo_list.appendChild(todo)

}

function delete_item(e) {
    const item = e.target;
    if (item.className === "trash-btn") {
        const todo = item.parentElement;
        todo.remove()
    }
}