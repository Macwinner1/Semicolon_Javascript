const list = document.getElementsByTagName("li");

const ul = document.querySelectorAll("li");
const tasklist = document.querySelector("#task-list ul");
tasklist.addEventListener("click", (event) => {
    if (event.target.textContent === "delete") {
        let li = event.target.closest("li");
        li.remove();
    }
});

const addTaskForm = document.getElementById("add-tasks");
addTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = document.querySelector("#add-tasks input").value.trim();

    if (value !== "") {
        const {newList, check_box, firstSpan, dateTime, secondSpan} = createNewElements();
        addClassNames(check_box, firstSpan, dateTime, secondSpan)
        addTextContent(check_box, firstSpan, dateTime, value, secondSpan)
        addChild(newList, check_box, firstSpan, dateTime, secondSpan)
        saveToStorage();
        addTaskForm.reset();
    } else {
        alert("Please enter schedule");
    }
});

const search_tasks = document.getElementById("search-tasks");
search_tasks.addEventListener("input", (event) => {
    const value = event.target.value.trim();

    const lists = document.querySelectorAll("li")
    lists.forEach(li => {
        (li.textContent.toLowerCase().includes(value.toLowerCase()))
            ? li.style.display = "" : li.style.display = "none";
    })
})

function createNewElements(){
    let newList = document.createElement("li");
    let check_box = document.createElement("input");
    check_box.type = "checkbox";
    // const status = document.createElement("span");
    // status.textContent = "Pending";
    // check_box.addEventListener("change", () => {
    //     status.textContent = check_box.checked ? "Completed" : "Pending";
    // });
    let firstSpan = document.createElement("span");
    let dateTime = document.createElement("span");
    let secondSpan = document.createElement("span")
    return {newList, check_box, firstSpan, dateTime, secondSpan};
}

function addClassNames(check_box, firstSpan, dateTime,  secondSpan){
    check_box.classList.add("check-box");
    firstSpan.classList.add("name");
    dateTime.classList.add("dateTime");
    secondSpan.classList.add("delete");
}

function addTextContent(check_box, firstSpan, date_time, value, secondSpan){
    check_box.textContent = check_box.value;
    firstSpan.textContent = toTitleCase(value);
    date_time.textContent = dateTime();
    secondSpan.textContent = "delete";
}


function addChild(newList, check_box, firstSpan, dateTime, secondSpan){
    newList.appendChild(check_box);
    newList.appendChild(firstSpan);
    newList.appendChild(dateTime);
    newList.appendChild(secondSpan);
    tasklist.append(newList);

    // Convert children to serializable format
    const childrenArray = Array.from(newList.children).map(child => child.textContent);
    localStorage.setItem("tasklist", JSON.stringify(childrenArray));

    const item = localStorage.getItem("tasklist");
    console.log(item);
}

function toTitleCase(sentence) {
    return sentence
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function dateTime(){
    const date_time = new Date();
    return date_time.toLocaleString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function saveToStorage(){
    const items = [];
    const lists = document.querySelectorAll("li")
    lists.forEach(li => {
        items.push(
            li.querySelector(".name").textContent)
            li.querySelector(".dateTime").textContent
    })
    localStorage.setItem("tasklist", JSON.stringify(items));
}

function getFromStorage(){
    const items = localStorage.getItem("tasklist");
    items.forEach(item => {
        const li = document.createElement("li");
        const check_box = document.createElement("input");
        check_box.type = "checkbox";
        check_box.className = "check-box";

        const firstSpan = document.createElement("span");
        firstSpan.className = "name";
        firstSpan.textContent = item;

        const dateTime = document.createElement("span");
        dateTime.className = "dateTime";
        dateTime.textContent = dateTime();

        const secondSpan = document.createElement("span");
        secondSpan.className = "delete";
        secondSpan.textContent = "delete";


        li.appendChild(check_box);
        li.appendChild(firstSpan);
        li.appendChild(dateTime);
        li.appendChild(secondSpan);
        tasklist.append(li);
    });
}

document.addEventListener("DOMContentLoaded", getFromStorage);