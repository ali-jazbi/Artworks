function onRemoved(cookie) {
    console.log(`Removed: ${cookie}`);
  }
  
  function onError(error) {
    console.log(`Error removing cookie: ${error}`);
  }
  
  function removeCookie(tabs) {
    let removing = browser.cookies.remove({
      url: tabs[0].url,
      name: "favorite-color"
    });
    removing.then(onRemoved, onError);
  }
  
  let getActive = browser.tabs.query({active: true, currentWindow: true});
  getActive.then(removeCookie);