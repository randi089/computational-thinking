const btn = document.querySelector("#btn");
const container = document.querySelector(".container");

let deg = 0;

btn.onclick = () => {
  deg += 90;
  console.log(container.style.transform);
  container.style.transform = "rotate(" + deg + "deg)";
};
