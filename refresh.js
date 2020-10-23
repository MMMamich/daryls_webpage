(function () {
  reloadPage();
  function reloadPage() {
    setInterval(function () {
      window.location.reload(true);
    }, 60 * 60000);
  }
})();
