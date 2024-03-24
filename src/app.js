/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("excuse").innerHTML = generadorExcusas();
  console.log("Hello Rigo from the console!");
};
let generadorExcusas = () => {
  let who = ["The dog", "My grandma", "The mailman", "My cat"];
  let action = ["ate", "shaved", "crushed", "licked"];
  let what = ["my leg", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  let randomwho = Math.floor(Math.random() * who.length);
  let randomaction = Math.floor(Math.random() * action.length);
  let randomwhat = Math.floor(Math.random() * what.length);
  let randomwhen = Math.floor(Math.random() * when.length);

  return (
    who[randomwho] +
    " " +
    action[randomaction] +
    " " +
    what[randomwhat] +
    " " +
    when[randomwhen]
  );
};
