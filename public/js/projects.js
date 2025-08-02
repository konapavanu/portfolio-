document.getElementById('project-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const link = document.getElementById('link').value;

  const newProject = { title, description, link };

  const existingProjects = JSON.parse(localStorage.getItem('projects')) || [];
  existingProjects.push(newProject);
  localStorage.setItem('projects', JSON.stringify(existingProjects));

  document.getElementById('status').textContent = "✅ Project saved!";
  e.target.reset();
});
