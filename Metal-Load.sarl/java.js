let nums = document.querySelectorAll("._span");
let section = document.querySelector("._span");

function starty(el) {
      let goal = el.dataset.goal;
      let count = setInterval(() => {
          el.textContent++;
          if (el.textContent == goal) {
            clearInterval(count);
          }
      }, 1200/goal);
}
starty(document.querySelectorAll("._span")[0]);
starty(document.querySelectorAll("._span")[1]);
starty(document.querySelectorAll("._span")[2]);
starty(document.querySelectorAll("._span")[3]);