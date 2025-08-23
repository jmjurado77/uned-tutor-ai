import { APP_CONFIG, AI_RESPONSES } from './src/config/app-config.js';
import data from './app_data_complete.json' assert { type: 'json' };

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('#sidebar nav button');
  const main = document.getElementById('main-content');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('#sidebar .active').classList.remove('active');
      btn.classList.add('active');
      loadSection(btn.dataset.section);
    });
  });

  function loadSection(section) {
    main.innerHTML = '';
    if (section === 'dashboard') renderDashboard();
    if (section === 'analysis') renderAnalysis();
    if (section === 'chat') renderChat();
    if (section === 'resources') renderResources();
    if (section === 'plan') renderPlan();
  }

  function renderDashboard() {
    const prog = data.progreso_estudiante.asignaturas.matematicas_aplicadas_ccss.progreso_general;
    main.innerHTML = `<h1>Dashboard</h1>
      <p>Progreso matemáticas: ${prog}%</p>`;
  }

  // Implementar las demás secciones de forma análoga...
  loadSection('dashboard');
});
