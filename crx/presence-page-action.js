var banner = document.querySelector('#siteNotice #centralNotice');
if (banner) banner.addEventListener('DOMSubtreeModified', changed, false);

// await the banner's jQuery-mediated insertion, and then:
function changed(e) {
  function toggle() {
    banner.style.display = banner.style.display ? '' : 'block !important';
  }

  function pageActionClick(req, from, sendResponse) {
    if (!from.tab) toggle(); // only reacts to messages from the background page
  }

  if ((banner.querySelector('*[id*=Banner], *[class*=banner]'))) {
    banner.removeEventListener('DOMSubtreeModified', changed, false);
    chrome.extension.sendRequest({}, function(response) {});
    chrome.extension.onRequest.addListener(pageActionClick);
  }
}
