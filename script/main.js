$(() => {
  $('#open-burger').on('click', () => {
    $('.header--mobile nav').addClass('open')
  });
  $('#close-burger').on('click', () => {
    $('.header--mobile nav').removeClass('open')
  });
  $('.sec5__slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
  });
})