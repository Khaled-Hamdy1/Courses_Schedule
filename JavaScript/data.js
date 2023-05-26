const courses = JSON.parse(localStorage.getItem("courses")) || [];
let modify = JSON.parse(localStorage.getItem("modify"));
let course = courses.find((course) => course?.id == modify);
let instructor = document.getElementById("instructor");
let subject = document.getElementById("subject");
let date = document.getElementById("date");
let duration = document.getElementById("duration");
let price = document.getElementById("price");
let form = document.querySelector("form");

if (modify) {
  instructor.value = course.instructor;
  subject.value = course.subject;
  date.value = course.date;
  duration.value = course.duration;
  price.value = course.price;
}
function submit(event) {
  event.preventDefault();
  let newCourse = {
    id: ~~(Math.random() * 1000),
    instructor: instructor.value,
    subject: subject.value,
    date: date.value,
    duration: duration.value,
    price: price.value,
  };
  if (!modify) courses.push(newCourse);
  else for (const it of Object.keys(newCourse)) course[it] = newCourse[it];
  localStorage.setItem("courses", JSON.stringify(courses));
  window.location.href = "/HTML/index.html";
}
function deleteModify() {
  if (modify) localStorage.removeItem("modify");
}
window.onunload = deleteModify;
form.addEventListener("submit", submit);
