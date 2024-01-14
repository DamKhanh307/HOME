// Phần 1: Xử lý sự kiện cho các phần tử có lớp "content"
document.addEventListener("DOMContentLoaded", function() {
  const contents = document.querySelectorAll(".content");
  contents.forEach(function(content) {
    content.addEventListener("click", function() {
      const skin = content.nextElementSibling;
      if (skin.style.display === "none" || skin.style.display === "") {
        skin.style.display = "block";
      } else {
        skin.style.display = "none";
      }
    });
  });
});

const boxes = document.querySelectorAll('.content');

const checkBoxes = () => {
  const triggerBottom = (window.innerHeight / 5)*4;
  boxes.forEach((content) => {
    const boxtop = content.getBoundingClientRect().top;
    if (boxtop < triggerBottom) content.classlist.add('show');
    else content.classlist.remove('show');
  });
};

window.addEventListener('scroll', checkBoxes);

checkBoxes()