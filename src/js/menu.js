window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	var $header = $('header');
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		shrinkNavHeight($header);
	} else {
		expandNavHeight($header);
	}
}

function shrinkNavHeight(header) {
	if (!header.hasClass("fixed")) {
		header.addClass("fixed");
	}
}

function expandNavHeight(header) {
	if (header.hasClass("fixed")) {
		header.removeClass("fixed");
	}
}

$(function () {
	$('body').on('click', '#Nav-Search', function() {
		var $search = $('.primary-navigation__search');
		var $searchBox = $search.find('input');
		if ($searchBox.is(':visible')){
			console.log("search for stuff");
		}
		else {
			$searchBox.show();
		}
	});
	
	$('body').on('click', '.menu-toggle', function() {
		$('.primary-navigation__mobile-menu').toggle();
		$('.menu-toggle__buttons-open').toggle();
		$('.menu-toggle__buttons-close').toggle();
	});
});