"use strict";

// first
/*
Найти параграф и получить его текстовое содержимое (только текст!)
*/

// const paragraph = document.querySelector("p");

// console.log(
//   [...paragraph.childNodes].filter((elem) => {
//     if (
//       elem == document.querySelector("a") ||
//       elem == document.querySelector("mark")
//     ) {
//       return;
//     } else {
//       return elem;
//     }
//   })
// );

// second

/*
Создать функцию, которая принимает в качестве аргумента узел
DOM и возвращает информацию (в виде объекта) о типе узла,
об имени узла и о количестве дочерних узлов (если детей нет - 0).
*/

// const elem = document.querySelector("p");
// console.dir(elem);
// function getNodes(element) {
//   const elemType = element.nodeType;
//   const elemName = element.nodeName;
//   const elemChildNodes = element.childNodes;
//   return {
//     elemType,
//     elemName,
//     elemChildNodes,
//   };
// }

// const res = getNodes(elem);
// console.log(res);

// third

/*
Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]
*/

const ul = document.querySelector("ul");
const filterUl = ul.childNodes;
const getTextFromUl = ([...arg]) => {
  const newArr = [];

  for (let i = 0; i < filterUl.length; i++) {
    if (filterUl[i].nodeName === "#text") {
      continue;
    }
    newArr.push(filterUl[i].textContent);
  }
  return newArr;
};

const res = getTextFromUl(filterUl);
console.log(res);
