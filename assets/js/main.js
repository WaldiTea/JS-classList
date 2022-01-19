let title = document.getElementById('title');
let list = document.getElementById('list');

function changeHeadline() {
  title.classList.add('title');
}

function resetHeadline() {
  title.classList.remove('title');
  title.style.transition = 'all, 0.3s';
}

function changeList() {
  list.classList.add('list');
}

function resetList() {
  list.classList.remove('list');
  list.style.transition = 'all, 0.3s';
}

function toggleHeadLine() {
  title.classList.toggle('title');
  title.style.transition = 'all, 0.3s';
}

function toggleList() {
  list.classList.toggle('list');
  list.style.transition = 'all, 0.3s';
}