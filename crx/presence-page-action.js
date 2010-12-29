var site_notice = document.getElementById('siteNotice');
if (site_notice)
  site_notice.addEventListener('DOMSubtreeModified', changed, false);

function changed(e) {
  var banner = site_notice.querySelector('*[id*=Banner]');
  // console.warn('Site notice changed; banner:', banner);
  if (banner) {
    site_notice.removeEventListener('DOMSubtreeModified', changed, false);
    chrome.extension.sendRequest({}, function(response) {});
  }
}
