$(() => {
  $("a[href^='#']").on("click", function (e) {
    e.preventDefault();

    let target = $($(this).attr("href"));
    let headerHeight = $("header").outerHeight();

    if (target.length) {
      $("html, body").animate(
        { scrollTop: target.offset().top - (headerHeight / 1.2) },
        600
      );
    }

    if ($(this).closest(".header--mobile").length) {
      $('.header--mobile nav').removeClass('open');
      $("body").removeClass("overflow");
    }
  });

  $('#open-burger').on('click', () => {
    $('.header--mobile nav').addClass('open');
    $('body').addClass('overflow');
  });
  $('#close-burger').on('click', () => {
    $('.header--mobile nav').removeClass('open');
    $('body').removeClass('overflow');
  });

  $('.sec4__img img').each(function() {
    if (!$(this).attr('src') || $(this).attr('src').trim() === '') {
        $(this).css('display', 'none');
    }
  });
  
  $('.sec5__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
  });
  $('.sec8__blocks').slick({
    infinite: true,
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
  $('.sec9__service-block:last-child').on('click', function () {
    $(this).find('h3').next().slideToggle();
  });

  $('.sec9__service-block')
    .on('mouseenter', function () { $(this).addClass('blue'); })
    .on('mouseleave', function () { $(this).removeClass('blue'); });

  $('.sec9__service-block').on('touchstart', function (event) {
    event.stopPropagation();
    $('.sec9__service-block').not(this).removeClass('blue');
    $(this).addClass('blue');
  });

  $(document).on('touchstart', function () {
    $('.sec9__service-block').removeClass('blue');
  });

  $('.sec10__cards').slick({
    infinite: true,
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

  $(window).on('resize', () => {
    updateTextBasedOnWidth();
  })


  //just for test
  $('button.accent-btn[type="submit"]').on('click', (event) => {
    event.preventDefault();

    const isGitHubPages = window.location.hostname.includes('github.io');
    let targetUrl;
  
    if (isGitHubPages) {
      targetUrl = '/test/contact-form.html';
    } else {
      targetUrl = './contact-form.html';
    }

    window.location.href = targetUrl;
  });
})