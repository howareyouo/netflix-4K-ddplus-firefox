browser.webRequest.onBeforeRequest.addListener(
  function () {
    return { redirectUrl: browser.runtime.getURL('cadmium-playercore.js') }
  },
  {
    types: ["script"],
    urls: ['*://assets.nflxext.com/*/ffe/player/html/*.js']
  },
  ['blocking']
)
