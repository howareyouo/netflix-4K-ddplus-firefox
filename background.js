browser.webRequest.onBeforeRequest.addListener(
  function () {
    return { redirectUrl: browser.runtime.getURL('cadmium-playercore-6.0034.323.911.js') }
  },
  {
    types: ["script"],
    urls: ['*://assets.nflxext.com/*/ffe/player/html/*.js']
  },
  ['blocking']
)
