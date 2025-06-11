// Cambiar tema claro/oscuro
const btn = document.getElementById('toggle-theme');
btn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  btn.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
});

// Generar línea del tiempo histórica
const timelineData = [
  { year: 1969, event: 'Primer nodo ARPANET' },
  { year: 1973, event: 'ARPANET internacional' },
  { year: 1983, event: 'Estándar TCP/IP' },
  { year: 1991, event: 'WWW pública' },
  { year: 1993, event: 'Mosaic y boom del web' },
];
const timeline = document.getElementById('timeline');
timelineData.forEach(item => {
  const div = document.createElement('div');
  div.className = 'timeline-item';
  div.innerHTML = `<strong>${item.year}</strong><br>${item.event}`;
  timeline.appendChild(div);
});
