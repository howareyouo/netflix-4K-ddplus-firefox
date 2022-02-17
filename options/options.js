function findOptions () {
  var inputs = document.querySelectorAll('input'),
      obj    = {}

  inputs.forEach(el => {
    obj[el.id] = el.checked
  })
  return obj
}

function saveOption () {
  var options = findOptions()
  browser.storage.local.set(options).then(() => {
    document.querySelector('i').style.opacity = 1
  })
}

function readOptions () {
  var options = findOptions()
  browser.storage.local.get(options).then(items => {
    console.log(items)
    for (key in items) {
      document.getElementById(key).checked = items[key]
    }
  })
}

function closePopup () {
  browser.tabs.query({active: true}).then(tabs => {
    console.log(tabs)
    var code = 'window.location.reload()'
    browser.tabs.executeScript(tabs[0].id, {code})
  })
  window.close()
}

document.querySelector('button').addEventListener('click', saveOption)
document.querySelector('a').addEventListener('click', closePopup)
document.addEventListener('DOMContentLoaded', readOptions)
