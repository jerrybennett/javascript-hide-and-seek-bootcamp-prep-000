// accepts a selector and returns the first element that matches
function getFirstSelector( selector ) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  // create array of li s from ul.ranked-list
  const rank = document.querySelectorAll('ul.ranked-list li');
  // iterate through rank
  for (let i = 0; i < rank.length; i++) {
    // set current rank innerHTML as current rank index value plus n 
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n;
  }
}

function deepestChild() {
 // create array of all divs in #grand-node
 const boo = document.querySelectorAll('#grand-node div');
 // use spread syntax to iterate through array and return last div
 return [...boo].pop();
}
