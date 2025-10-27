// ========== TO-DO LIST ==========

function addTask() {
    const taskInput = document.getElementById('newTasks');
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;
    span.classList.add("taskText");

    // Klik untuk tandai selesai
    span.onclick = function() {
        li.classList.toggle("completed");
    };

    // Double-click untuk edit
    span.ondblclick = function() {
        editTask(span);
    };

    // Tombol hapus
    const closeBtn = document.createElement("span");
    closeBtn.textContent = "X";
    closeBtn.classList.add("close");
    closeBtn.onclick = function() {
        deleteTask(closeBtn);
    };

    li.appendChild(span);
    li.appendChild(closeBtn);
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function deleteTask(element) {
    element.parentElement.remove();
}

function editTask(span) {
    const oldText = span.textContent;
    const input = document.createElement("input");
    input.type = "text";
    input.value = oldText;

    span.replaceWith(input);
    input.focus();

    input.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            const newText = input.value.trim();
            if (newText !== "") {
                span.textContent = newText;
            }
            input.replaceWith(span);
        }
    });

    input.addEventListener("blur", function() {
        input.replaceWith(span);
    });
}

// ========== APPEARANCE CONTROLS ==========

let currentFontSize = 16;

function changeBackgroundColor() {
    const color = document.getElementById("bgColor").value;
    if (color) {
        document.body.style.backgroundColor = color;
    }
}

function increaseFont() {
    currentFontSize += 2;
    document.body.style.fontSize = currentFontSize + "px";
}

function decreaseFont() {
    if (currentFontSize > 10) {
        currentFontSize -= 2;
        document.body.style.fontSize = currentFontSize + "px";
    }
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function changeFontStyle() {
    const style = document.getElementById("fontStyle").value;
    if (style) {
        document.body.style.fontFamily = style;
    }
}
