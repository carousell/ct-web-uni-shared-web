export function bindTrackingHeaderEvents(utag) {
  const tid = setInterval(() => {
    if (document.readyState !== 'complete') return;
  clearInterval(tid);

  let chatElem = document.getElementById('xe_headbar_chat');
  chatElem = chatElem ? chatElem.parentElement : chatElem;

  let menuDropdownElem = document.getElementById('NavDropdown_3');
  menuDropdownElem = menuDropdownElem
    ? menuDropdownElem.parentElement
    : menuDropdownElem;

  let postAdButton = document.getElementById('xe_headbar_postad');
  postAdButton = postAdButton ? postAdButton.firstChild : postAdButton;

  const clickListeners = [
    {
      elem: document.getElementById('xe_headbar_logo'),
      name: 'xe_headbar_logo',
      type: 'action'
    },
    {
      elem: chatElem,
      name: 'xe_headbar_chat',
      type: 'action'
    },
    {
      elem: document.getElementById('xe_headbar_login'),
      name: 'xe_headbar_account',
      type: 'action'
    },
    {
      elem: document.getElementById('xe_headbar_account'),
      name: 'xe_headbar_account',
      type: 'action'
    },
    {
      elem: menuDropdownElem,
      name: 'xe_headbar_more',
      type: 'action'
    },
    {
      elem: postAdButton,
      name: 'xe_headbar_postad',
      type: 'action'
    }
  ];

  clickListeners.map(item => {
    utag.link({
    xtClickListener: {
      elem: item.elem,
      name: item.name,
      type: item.type
    }
  });
  return 0;
});
}, 100);
}
