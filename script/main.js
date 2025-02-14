$(() => {
  $('#open-burger').on('click', () => {
    $('.header--mobile nav').addClass('open')
  });
  $('#close-burger').on('click', () => {
    $('.header--mobile nav').removeClass('open')
  });
})