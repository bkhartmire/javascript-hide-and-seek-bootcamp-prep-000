function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const ranks = document.querySelectorAll('.ranked-list')
  for (var i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML + n)
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let next = node.children[0]
  while (next) {
    node = next
    next = node.children[0]
  }
  return node
}
