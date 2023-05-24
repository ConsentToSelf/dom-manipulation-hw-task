"use strict";

// first
/*
Найти параграф и получить его текстовое содержимое (только текст!)
*/

const paragraph = document.querySelector("p");

console.log(
  [...paragraph.childNodes].filter((elem) => {
    if (
      elem == document.querySelector("a") ||
      elem == document.querySelector("mark")
    ) {
      return;
    } else {
      return elem;
    }
  })
);
