const frameWork = document.querySelector("#frameWork");
const btnAdd = document.querySelector("#btnAdd");
const addList = document.querySelector("#addList");
const btnRemove = document.querySelector("#btnRemove");

// btnAdd.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (frameWork.value == "") {
//     alert("Check Input Field");
//     return;
//   }

//   const option = new Option(frameWork.value, frameWork.value);
//   addList.add(option, undefined);
//   frameWork.value = "";
// });

// btnRemove.addEventListener("click", (e) => {
//   e.preventDefault();

//   let selected = [];

//   for (let i = 0; i < addList.options.length; i++) {
//     selected[i] = addList.options[i].selected;
//   }

//   let index = addList.options.length;
//   while (index--) {
//     if (selected[index]) {
//       addList.remove(index);
//     }
//   }
// });

btnAdd.addEventListener("click", (e) => {
  e.preventDefault();
  if (frameWork.value == "") {
    alert("Check Input Field");
    return;
  }

  let option = new Option(frameWork.value, frameWork.value);
  addList.add(option, undefined);
  frameWork.value = "";
});

btnRemove.addEventListener("click", (e) => {
  e.preventDefault();

  let selected = [];
  for (let i = 0; i < addList.options.length; i++) {
    selected[i] = addList.options[i].selected;
  }

  let index = addList.options.length;
  while (index--) {
    if (selected[index]) {
      addList.remove(index);
    }
  }
});
