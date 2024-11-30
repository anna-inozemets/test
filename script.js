$(() => {
  function setViewportHeight() {
    const viewportHeight = window.innerHeight;
    console.log(viewportHeight);
    $('.pdf-container-wrapper').css('--vh', `${viewportHeight * 0.01}px`);
  }

  setViewportHeight();

  $(window).on('resize', setViewportHeight);
})