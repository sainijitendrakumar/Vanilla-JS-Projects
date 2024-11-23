const inputItem = document.getElementById("input-box");
const btn = document.getElementById("btn");
const container = document.getElementById("container");

document.addEventListener("DOMContentLoaded", () => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    savedNotes.forEach(noteContent => {
        createNote(noteContent);
    });
});

btn.addEventListener("click", () => {
    if (inputItem.value === "") {
        return;
    }

    const noteContent = inputItem.value;
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    savedNotes.push(noteContent);
    localStorage.setItem("notes", JSON.stringify(savedNotes));
    createNote(noteContent);
    inputItem.value = "";
});

function createNote(content) {
    const note = document.createElement("div");
    note.classList.add("notes");
    note.innerText = content;
    const position = determinePosition();
    note.style.position = "absolute";
    note.style.left = `${position.x}px`;
    note.style.top = `${position.y}px`;
    enableDrag(note);
    container.appendChild(note);
}

function determinePosition() {
    const maxX = window.innerWidth - 250;
    const maxY = window.innerHeight - 250;
    return {
        x: Math.floor(Math.random() * maxX),
        y: Math.floor(Math.random() * maxY),
    };
}

function enableDrag(element) {
    let isDragging = false;
    let offsetX, offsetY;

    element.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - element.getBoundingClientRect().left;
        offsetY = e.clientY - element.getBoundingClientRect().top;
        element.style.cursor = "grabbing";
    });

    window.addEventListener("mousemove", (e) => {
        if (isDragging) {
            element.style.left = `${e.clientX - offsetX}px`;
            element.style.top = `${e.clientY - offsetY}px`;
        }
    });

    window.addEventListener("mouseup", () => {
        if (isDragging) {
            isDragging = false;
            element.style.cursor = "grab";
        }
    });
}
