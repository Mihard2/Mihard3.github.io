$(document).ready(function () {
  var link = $('.dropdown-link'),
      linkActive = $('.dropdown-link_active'),
      menu = $('.dropdown'),
      navLink = $('.dropdown ul li a'),
      boxLogo = $('.box-logo');


  link.click(function () {
      link.toggleClass('dropdown-link_active');
      menu.toggleClass('dropdown_active');
      boxLogo.toggleClass('box-logo_active');
  });

  navLink.click(function () {
      link.toggleClass('dropdown-link_active');
      menu.toggleClass('dropdown_active');
      boxLogo.toggleClass('box-logo_active');
  });
});

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
  responsive: [  
    {
        breakpoint: 480,
        settings: {
            arrows: true,
        }
    }
  ]
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  arrows: false,
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  responsive: [  
    {
        breakpoint: 480,
        settings: {
            dots: false,
            slidesToShow: 2,
        }
    }
  ]
});

 
$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top-182}, 1500);
	});
});