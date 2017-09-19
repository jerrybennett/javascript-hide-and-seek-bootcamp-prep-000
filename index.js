function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return getFirstSelector('.target')
}

function increaseRankBy(n) {
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < list.length; i++) {
    const start = parseInt(list[i].innerHTML)
    list[i].innerHTML = (start + n)
  }
}

function deepestChild() {
  
}
