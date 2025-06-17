// script.js

// 1. Manejo del tema claro/oscuro
(function() {
  const themeToggleButton = document.getElementById('toggle-theme');
  const body = document.body;
  const localStorageKey = 'themePreference';

  // Función para establecer el tema
  function setTheme(theme) {
    body.classList.remove('light', 'dark'); // Asegurarse de remover ambas clases
    body.classList.add(theme);
    themeToggleButton.textContent = theme === 'light' ? '🌙' : '☀️';
    localStorage.setItem(localStorageKey, theme); // Guardar la preferencia
  }

  // Cargar el tema al inicio
  function loadTheme() {
    const savedTheme = localStorage.getItem(localStorageKey);
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Si no hay preferencia guardada, usar el tema por defecto del HTML (que es 'dark')
      setTheme(body.classList.contains('light') ? 'light' : 'dark');
    }
  }

  // Event Listener para cambiar el tema
  if (themeToggleButton) {
    themeToggleButton.addEventListener('click', () => {
      const currentTheme = body.classList.contains('light') ? 'light' : 'dark';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    });
    loadTheme(); // Cargar el tema cuando el script se ejecute
  } else {
    console.error("El botón de alternar tema no fue encontrado.");
  }
})();

// 2. Generación de línea del tiempo histórica
(function() {
  const timelineData = [
    { year: 1969, event: 'Primer nodo ARPANET' },
    { year: 1973, event: 'ARPANET internacional' },
    { year: 1983, event: 'Estándar TCP/IP' },
    { year: 1991, event: 'WWW pública' },
    { year: 1993, event: 'Mosaic y boom del web' },
    // Puedes añadir más datos aquí si los tienes en el HTML en texto.
    // Lo ideal sería que el HTML tuviera un JSON o los datos en data-attributes
    // para que JS los procese, o que JS los traiga de una API.
  ];

  const timelineContainer = document.getElementById('timeline');

  function generateTimeline() {
    if (!timelineContainer) {
      console.error("El contenedor de la línea del tiempo no fue encontrado.");
      return;
    }

    // Limpiar cualquier contenido existente (útil si se regenera)
    timelineContainer.innerHTML = '';

    const fragment = document.createDocumentFragment(); // Usar un fragmento para mejor rendimiento

    timelineData.forEach(item => {
      const div = document.createElement('div');
      div.className = 'timeline-item';
      div.innerHTML = `<strong>${item.year}</strong><br>${item.event}`;
      fragment.appendChild(div);
    });

    timelineContainer.appendChild(fragment);
  }

  // Llamar a la función para generar la línea del tiempo al cargar
  generateTimeline();
})();
