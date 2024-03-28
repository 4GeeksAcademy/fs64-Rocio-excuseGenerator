/* eslint-disable */

const getRandomElement = array => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const getGuilty = () => {
  const who = ["my cat", "my dog", "my grandma"];
  return getRandomElement(who);
};
const getAction = () => {
  const action = ["ate", "peed", "crushed", "broke"];
  return getRandomElement(action);
};
const getTarget = () => {
  const target = ["my homework", "my phone", "the car"];
  return getRandomElement(target);
};
const getWhen = () => {
  const when = ["yesterday", "two days ago", "the last month"];
  return getRandomElement(when);
};

function main() {
  const guilty = getGuilty();
  const action = getAction();
  const target = getTarget();
  const when = getWhen();

  const printMessage = getMessage();
  console.log(printMessage);
}

const getMessage = () => {
  return `${getGuilty()} ${getAction()} ${getTarget()} ${getWhen()}`;
};

window.onload = () => {
  document.querySelector("#excuse").innerHTML = getMessage();
};

main();
