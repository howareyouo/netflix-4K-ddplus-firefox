function findOptions() {
  var inputs = document.querySelectorAll('input'),
    obj = {}

  inputs.forEach(el => {
    obj[el.id] = el.checked
  })
  return obj
}

function saveOption() {
  var options = findOptions()
  browser.storage.local.set(options).then(() => {
    document.querySelector('i').style.opacity = 1
  })
}

function readOptions() {
  var options = findOptions()
  browser.storage.local.get(options).then(items => {
    for (key in items) {
      document.getElementById(key).checked = items[key]
    }
  })
}

function closePopup() {
  browser.tabs.query({ active: true }).then(tabs => {
    browser.tabs.executeScript(tabs[0].id, {
      code: 'location.reload()'
    })
  })
  window.close()
}

document.querySelector('button').addEventListener('click', saveOption)
document.querySelector('a').addEventListener('click', closePopup)
document.addEventListener('DOMContentLoaded', readOptions)
