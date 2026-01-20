document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    // Retirer la classe active de tous les boutons
    document.querySelector('.filter-btn.active').classList.remove('active');
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');
    const projects = document.querySelectorAll('.project-card');

    projects.forEach(project => {
      const category = project.getAttribute('data-category');
      
      if (filter === 'all' || filter === category) {
        project.classList.remove('hide');
        project.classList.add('show');
      } else {
        project.classList.add('hide');
        project.classList.remove('show');
      }
    });
  });
});