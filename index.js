function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  document.getElementsByClassName(getFirstSelector)
}
