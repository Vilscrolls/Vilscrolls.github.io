/* header.js */
(function opacityPercentage() {
	var $header = $(".header"),
		$topbar = $(".header-topbar"),
		$mask = $(".opacity-mask"),
		animateHeight = $header.rect().height - $topbar.rect().height,
		didScroll = false,
		opacity, throttleScroll, resetHeight;

    $(window).bind("scroll", function () {
		didScroll = true;
	});

	setInterval(function () {
		if (didScroll) {
			didScroll = false;
			opacity = pageYOffset/animateHeight;
			$mask.css("opacity", opacity);
			if (opacity >= 1) {
				$(".header-topbar").addClass("topbar-shadow");
			} else {
				$(".header-topbar").removeClass("topbar-shadow");
			}
		}
	}, 100);

	var rAF = window.requestAnimationFrame ||
			  window.webkitRequestAnimationFrame ||
			  window.mozRequestAnimationFrame ||
			  window.msRequestAnimationFrame ||
			  function (callback) { window.setTimeout(callback, 1000/60)};


    // if header height has been changed on resize, we need to reset this function;
    $(window).bind("resize", function () {
        clearTimeout(resetHeight);
        resetHeight = setTimeout(opacityPercentage, 1000);
    });
})();


(function toggleNav() {
	var $item = $("#nav-main"),
		$icon = $("#nav-icon");

	$icon.bind("click", function (e) {
		$item.toggleClass("nav-dropdown");
	});

	document.addEventListener("click", function (e) {
		var isClickInside = $icon[0].contains(e.target);

		if (!isClickInside) {
			$item.removeClass("nav-dropdown");
		}
	});
})();


(function toggleSearch() {
	var $scope = $('#trigger-search'),
		$close = $('#collapse-search'),
		$bar = $('#search-field'),
		$logo = $('.logo');

	$scope.bind('click', toggle);
	$close.bind('click', collapse);

	function toggle(e) {
		$scope.addClass('search-hidden');
		$close.addClass('search-visible');
		$bar.addClass('search-visible');
		$logo.addClass('logo-responsive');
	}

	function collapse() {
		$scope.removeClass('search-hidden');
		$close.removeClass('search-visible');
		$bar.removeClass('search-visible');
		$logo.removeClass('logo-responsive');
	}
})();


/* codeBanner.js */
(function codeBannerUtils() {
	var el = document.getElementsByClassName('highlight');
	var langList = [];
	for(var i = 0; i < el.length; i++) {
		langList.push(el[i].firstChild.firstChild.dataset.lang);
		el[i].setAttribute('data-lang', langList[i]);
	}
})();