var site_notice = document.getElementById('siteNotice');
if (site_notice)
  site_notice.addEventListener('DOMSubtreeModified', changed, false);

// await the banner's jQuery-mediated insertion, and then:
function changed(e) {
  function toggle() {
    banner.style.display = banner.style.display ? '' : 'block !important';
  }

  function pageActionClick(req, from, sendResponse) {
    if (!from.tab) toggle(); // only react to the background page
  }

  var banner = site_notice.querySelector('*[id*=Banner]');
  // console.warn('Site notice changed; banner:', banner);

  if (banner) { // banner confirmed; stop waiting and pop the page action icon
    site_notice.removeEventListener('DOMSubtreeModified', changed, false);
    chrome.extension.sendRequest({}, function(response) {});
    chrome.extension.onRequest.addListener(pageActionClick);
  }
}
