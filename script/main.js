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
  $('.sec8__blocks').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });
  $('.sec8__name').each(function() {
    const img = $(this).find('img');
    const paragraphText = $(this).find('p').text();

    if (!img.attr('src') || img[0].naturalWidth === 0) {
      img.replaceWith('<span>' + paragraphText.charAt(0).toUpperCase() + '</span>');
    }
  });
  $('.sec9__service-block:first-child').addClass('blue');
  $('.sec9__service-block:last-child h3').on('click', function() {
    $(this).next().slideToggle();

    $('.sec9__service-block').toggleClass('blue');
  });
})