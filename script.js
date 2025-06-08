document.querySelector('.tabs').addEventListener('click', e => {
  if (e.target.classList.contains('tab')) {
    const targetId = e.target.dataset.tab;
    document.querySelectorAll('.tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.tab === targetId);
      tab.setAttribute('aria-selected', tab.dataset.tab === targetId);
    });
    document.querySelectorAll('.tab-panel').forEach(panel => {
      const isTarget = panel.id === targetId;
      panel.classList.toggle('active', isTarget);
      panel.hidden = !isTarget;
    });
  }
});
