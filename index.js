function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return getFirstSelector('.target')
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < lis.length; i++) {
    parseInt(lis[i].innerHTML = (i++))
  }
}
