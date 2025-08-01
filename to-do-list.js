const taskList = document.getElementById('task-list');
    const input = document.getElementById('task-input');

    window.onload = () => {
      const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      savedTasks.forEach(task => renderTask(task.text, task.completed));
    };

    function addTask() {
      const text = input.value.trim();
      if (text === '') return alert('Task cannot be empty.');
      renderTask(text);
      saveTasks();
      input.value = '';
    }

    function renderTask(text, completed = false) {
      const li = document.createElement('li');
      if (completed) li.classList.add('completed');

      li.innerHTML = `
        <div class="task-left">
          <input type="checkbox" ${completed ? 'checked' : ''} onchange="toggleComplete(this)">
          <span class="task-text">${text}</span>
        </div>
        <div class="task-right">
          <button onclick="editTask(this)">✏️</button>
          <button onclick="deleteTask(this)">🗑️</button>
        </div>
      `;
      taskList.appendChild(li);
      saveTasks();
    }

    function deleteTask(btn) {
      btn.closest('li').remove();
      saveTasks();
    }

    function editTask(btn) {
      const li = btn.closest('li');
      const span = li.querySelector('.task-text');
      const currentText = span.textContent;
      const inputField = document.createElement('input');

      inputField.type = 'text';
      inputField.value = currentText;
      inputField.className = 'edit-input';
      inputField.style.flex = '1';
      inputField.style.fontSize = '1rem';
      inputField.style.borderRadius = '8px';
      inputField.style.padding = '6px 10px';
      inputField.style.border = '1px solid #ccc';

      span.replaceWith(inputField);
      inputField.focus();

      inputField.addEventListener('blur', () => {
        if (inputField.value.trim() !== '') {
          span.textContent = inputField.value.trim();
          inputField.replaceWith(span);
          saveTasks();
        } else {
          alert('Task cannot be empty.');
          inputField.focus();
        }
      });

      inputField.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          inputField.blur();
        }
      });
    }

    function toggleComplete(checkbox) {
      const li = checkbox.closest('li');
      li.classList.toggle('completed');
      saveTasks();
    }

    function saveTasks() {
      const tasks = [];
      document.querySelectorAll('#task-list li').forEach(li => {
        const text = li.querySelector('.task-text').textContent;
        const completed = li.classList.contains('completed');
        tasks.push({ text, completed });
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function toggleTheme(checkbox) {
      const body = document.body;
      const label = document.getElementById('theme-label');
      if (checkbox.checked) {
        body.classList.add('light-mode');
        label.textContent = '☀️ Light';
      } else {
        body.classList.remove('light-mode');
        label.textContent = '🌙 Dark';
      }
    }const taskList = document.getElementById('task-list');
    const input = document.getElementById('task-input');

    window.onload = () => {
      const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      savedTasks.forEach(task => renderTask(task.text, task.completed));
    };

    function addTask() {
      const text = input.value.trim();
      if (text === '') return alert('Task cannot be empty.');
      renderTask(text);
      saveTasks();
      input.value = '';
    }

    function renderTask(text, completed = false) {
      const li = document.createElement('li');
      if (completed) li.classList.add('completed');

      li.innerHTML = `
        <div class="task-left">
          <input type="checkbox" ${completed ? 'checked' : ''} onchange="toggleComplete(this)">
          <span class="task-text">${text}</span>
        </div>
        <div class="task-right">
          <button onclick="editTask(this)">✏️</button>
          <button onclick="deleteTask(this)">🗑️</button>
        </div>
      `;
      taskList.appendChild(li);
      saveTasks();
    }

    function deleteTask(btn) {
      btn.closest('li').remove();
      saveTasks();
    }

    function editTask(btn) {
      const li = btn.closest('li');
      const span = li.querySelector('.task-text');
      const currentText = span.textContent;
      const inputField = document.createElement('input');

      inputField.type = 'text';
      inputField.value = currentText;
      inputField.className = 'edit-input';
      inputField.style.flex = '1';
      inputField.style.fontSize = '1rem';
      inputField.style.borderRadius = '8px';
      inputField.style.padding = '6px 10px';
      inputField.style.border = '1px solid #ccc';

      span.replaceWith(inputField);
      inputField.focus();

      inputField.addEventListener('blur', () => {
        if (inputField.value.trim() !== '') {
          span.textContent = inputField.value.trim();
          inputField.replaceWith(span);
          saveTasks();
        } else {
          alert('Task cannot be empty.');
          inputField.focus();
        }
      });

      inputField.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          inputField.blur();
        }
      });
    }

    function toggleComplete(checkbox) {
      const li = checkbox.closest('li');
      li.classList.toggle('completed');
      saveTasks();
    }

    function saveTasks() {
      const tasks = [];
      document.querySelectorAll('#task-list li').forEach(li => {
        const text = li.querySelector('.task-text').textContent;
        const completed = li.classList.contains('completed');
        tasks.push({ text, completed });
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function toggleTheme(checkbox) {
      const body = document.body;
      const label = document.getElementById('theme-label');
      if (checkbox.checked) {
        body.classList.add('light-mode');
        label.textContent = '☀️ Light';
      } else {
        body.classList.remove('light-mode');
        label.textContent = '🌙 Dark';
      }
    }const taskList = document.getElementById('task-list');
    const input = document.getElementById('task-input');

    window.onload = () => {
      const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      savedTasks.forEach(task => renderTask(task.text, task.completed));
    };

    function addTask() {
      const text = input.value.trim();
      if (text === '') return alert('Task cannot be empty.');
      renderTask(text);
      saveTasks();
      input.value = '';
    }

    function renderTask(text, completed = false) {
      const li = document.createElement('li');
      if (completed) li.classList.add('completed');

      li.innerHTML = `
        <div class="task-left">
          <input type="checkbox" ${completed ? 'checked' : ''} onchange="toggleComplete(this)">
          <span class="task-text">${text}</span>
        </div>
        <div class="task-right">
          <button onclick="editTask(this)">✏️</button>
          <button onclick="deleteTask(this)">🗑️</button>
        </div>
      `;
      taskList.appendChild(li);
      saveTasks();
    }

    function deleteTask(btn) {
      btn.closest('li').remove();
      saveTasks();
    }

    function editTask(btn) {
      const li = btn.closest('li');
      const span = li.querySelector('.task-text');
      const currentText = span.textContent;
      const inputField = document.createElement('input');

      inputField.type = 'text';
      inputField.value = currentText;
      inputField.className = 'edit-input';
      inputField.style.flex = '1';
      inputField.style.fontSize = '1rem';
      inputField.style.borderRadius = '8px';
      inputField.style.padding = '6px 10px';
      inputField.style.border = '1px solid #ccc';

      span.replaceWith(inputField);
      inputField.focus();

      inputField.addEventListener('blur', () => {
        if (inputField.value.trim() !== '') {
          span.textContent = inputField.value.trim();
          inputField.replaceWith(span);
          saveTasks();
        } else {
          alert('Task cannot be empty.');
          inputField.focus();
        }
      });

      inputField.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          inputField.blur();
        }
      });
    }

    function toggleComplete(checkbox) {
      const li = checkbox.closest('li');
      li.classList.toggle('completed');
      saveTasks();
    }

    function saveTasks() {
      const tasks = [];
      document.querySelectorAll('#task-list li').forEach(li => {
        const text = li.querySelector('.task-text').textContent;
        const completed = li.classList.contains('completed');
        tasks.push({ text, completed });
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function toggleTheme(checkbox) {
      const body = document.body;
      const label = document.getElementById('theme-label');
      if (checkbox.checked) {
        body.classList.add('light-mode');
        label.textContent = '☀️ Light';
      } else {
        body.classList.remove('light-mode');
        label.textContent = '🌙 Dark';
      }
    }
