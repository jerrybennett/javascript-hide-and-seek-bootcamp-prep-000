function getFirstSelector( selector ) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return getFirstSelector('.target');
}

function increaseRankBy(n) {
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < list.length; i++) {
    const start = parseInt(list[i].innerHTML);
    list[i].innerHTML = (start + n);
  }
}

function deepestChild() {
 // create array of all divs in #grand-node
 const boo = document.querySelectorAll('#grand-node div');
 // use spread syntax to iterate through array and return last div
 return [...boo].pop();
}
