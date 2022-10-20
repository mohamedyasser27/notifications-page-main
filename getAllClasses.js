let mainContainer = document.querySelector(".mainContainer");
let allclasses = new Map();
  

Array.from(document.body.getElementsByTagName("*")).forEach((ele) => {
  if (ele.id) {
    if (!allclasses.has(ele.id)) {
      allclasses.set(`#${ele.id} {}\n\n`,1);
    }
  }
  if (ele.classList.length) {

    ele.classList.forEach((className) => {
      if (!allclasses.has(className)) {
        allclasses.set(`.${className} {}\n\n`, 1);
      }
    });
  }
});
let str=''
if (allclasses.length != 0) {
  allclasses.forEach((key, value) => {
    str += value;
  })
}

console.log(str)