let courses = JSON.parse(localStorage.getItem("courses")) || [];
let Cards = document.getElementById("cards");
window.onload = renderData;

function addCourse() {
  window.location.href = "/HTML/add.html";
}

function renderData() {
  console.log("a7a");
  let show = "";
  for (let i = 0; i < courses.length; i++) {
    show += `
  <!-- Courses Cards -->
    <div class="container">
      <button onclick="modifyCourse(${courses[i].id})" id="modify">
        <span class="icon">
          <i class="fas fa-edit"></i>
        </span>
      </button>
      <ul id="container__list">
        <!-- Instructor -->
        <li class="container__list__items-container">
          <ul class="container__list__items">
            <li class="container__list__item1">Instructor </li>
            <li class="container__list__item2 instructor">dr/ ${courses[i].instructor}</li>
          </ul>
        </li>
        <!-- Course Name -->
        <li class="container__list__items-container">
          <ul class="container__list__items">
            <li class="container__list__item1">Course </li>
            <li class="container__list__item2 course-name">${courses[i].subject}</li>
          </ul>
        </li>
        <!-- Course Date -->
        <li class="container__list__items-container">
          <ul class="container__list__items">
            <li class="container__list__item1">Date </li>
            <li class="container__list__item2">${courses[i].date}</li>
          </ul>
        </li>
        <!-- Course Duration -->
        <li class="container__list__items-container">
          <ul class="container__list__items">
            <li class="container__list__item1">Duration </li>
            <li class="container__list__item2">${courses[i].duration} Hours</li>
          </ul>
        </li>
        <!-- Course Price -->
        <li class="container__list__items-container">
          <ul class="container__list__items">
            <li class="container__list__item1">Price </li>
            <li class="container__list__item2">$${courses[i].price}</li>
          </ul>
        </li>
      </ul>
      <button onclick="deleteCourse(${i})" id="delete">
        <span class="icon">
          <i class="fas fa-trash-alt"></i>
        </span>
      </button>
    </div>
  `;
  }
  if (courses.length == 0) {
    show = `
    <div class="container">
      <h1>No Courses Found</h1>
    </div>
    `;
  }
  Cards.innerHTML = show;
}

function deleteCourse(idx) {
  courses = courses.filter((course, index) => index != idx);
  localStorage.setItem("courses", JSON.stringify(courses));
  renderData();
}

function modifyCourse(idx) {
  localStorage.setItem("modify", idx);
  window.location.href = "/HTML/data.html";
}
