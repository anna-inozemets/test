$(() => {
  $("a[href^='#']").on("click", function (e) {
    e.preventDefault();

    let target = $($(this).attr("href"));
    let headerHeight = $("header").outerHeight();

    if (target.length) {
      $("html, body").animate(
        { scrollTop: target.offset().top - (headerHeight / 1.8) },
        600
      );
    }
  });

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
  $('.sec10__cards').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
    ]
  });

  $('.sec11__block button').click(function() {
    const block = $(this).closest('.sec11__block');
    const paragraph = block.find('p');

    block.toggleClass('active');
    paragraph.slideToggle();
  });

  function updateTextBasedOnWidth() {
    $('[data-mobile-text]').each(function() {
      const element = $(this);
      const mobileText = element.data('mobile-text');
      const desktopText = element.data('desktop-text');

      if ($(window).width() < 575 && mobileText) {
        element.text(mobileText);
      } 

      else if ($(window).width() >= 575 && desktopText) {
        element.text(desktopText);
      }
    });
  }

  updateTextBasedOnWidth();

  $(window).resize(function() {
    updateTextBasedOnWidth();
  });
})