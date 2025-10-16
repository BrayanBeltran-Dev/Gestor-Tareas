function agregarTarea() {
  const input = document.getElementById('nuevaTarea');
  const texto = input.value.trim();
  
  if (texto === '') return;

  const div = document.createElement('div');
  div.className = 'tarea';
  div.textContent = texto;
  
  div.onclick = function() {
    this.classList.toggle('completada');
  };

  document.getElementById('listaTareas').appendChild(div);
  input.value = '';
}

function guardarTareas() {
  const tareas = [];
  
  document.querySelectorAll('.tarea').forEach(tarea => {
    tareas.push(tarea.textContent + ':' + tarea.classList.contains('completada'));
  });
  
  localStorage.setItem('tareas', tareas.join(';'));
  document.getElementById('mensaje').textContent = 'Tareas guardadas';
}

window.onload = function() {
  const guardadas = localStorage.getItem('tareas');
  if (!guardadas) return;

  guardadas.split(';').forEach(tareaStr => {
    if (!tareaStr) return;
    
    const [texto, completada] = tareaStr.split(':');
    const div = document.createElement('div');
    div.className = 'tarea';
    div.textContent = texto;
    
    if (completada === 'true') {
      div.classList.add('completada');
    }
    
    div.onclick = function() {
      this.classList.toggle('completada');
    };

    document.getElementById('listaTareas').appendChild(div);
  });
};