function insertScript(scriptText) {
  var el = document.createElement('script')
  el.text = scriptText
  document.head.appendChild(el)
}

var conf = {
  useDDplus: 1,
  useAVCH: 0,
  useDV: 1,
  useHEVC: 0,
  useHEACC: 1,
  useAV1: 0,
  useVP9: 1,
  useAVC: 0,
  useAVCH_: 0,
  useAllSub: 0,
  autoMaxBitrate: 0,
}

// very messy workaround for accessing chrome storage outside of background / content scripts
browser.storage.local.get(conf).then(items => {
  var text = ''
  Object.keys(conf).forEach(key => {
    text += text ? ',' : 'var '
    text += key + '=' + (items[key] || 0)
  })
  insertScript(text)
})

var scriptUrl = browser.runtime.getURL('max_bitrate.js')
var xhr = new XMLHttpRequest()
xhr.open('GET', scriptUrl, true)
xhr.onload = function (e) {
  var xhr = e.target
  if (xhr.status == 200) {
    insertScript(xhr.responseText)
  }
}
xhr.send()
