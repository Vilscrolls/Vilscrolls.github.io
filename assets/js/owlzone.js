/* header.js */
(function opacityPercentage() {
	var $header = $(".header"),
		$topbar = $(".header-topbar"),
		$mask = $(".opacity-mask"),
		$window = $(window),
		animateHeight = $header.rect().height - $topbar.rect().height,
		tick = false,
		opacity, resetHeight;

	var rAF = window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function (callback) { window.setTimeout(callback, 1000/60)};

	$window.on("scroll", requestTick);

	// fix issues: reflesh page and resize window.
	applyOpacity();
    $window.on("resize", function () {
        clearTimeout(resetHeight);
        resetHeight = setTimeout(opacityPercentage, 1000);
	});


	function applyOpacity() {
		tick = false;
		opacity = pageYOffset/animateHeight;
		$mask.css("opacity", opacity);
		if (opacity >= 1) {
			$topbar.addClass("topbar-shadow");
		} else {
			$topbar.removeClass("topbar-shadow");
		}
	}

	function requestTick () {
		if (!tick) {
			rAF(applyOpacity);
			tick = true;
		}
	}
})();


(function toggleNav() {
	var $item = $("#nav-main"),
		$icon = $("#nav-icon");

	$icon.on("click", function (e) {
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

	$scope.on('click', toggle);
	$close.on('click', collapse);

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
// (function codeBannerUtils() {
// 	var el = document.getElementsByClassName('highlight');
// 	var langList = [];
// 	for(var i = 0; i < el.length; i++) {
// 		langList.push(el[i].firstChild.firstChild.dataset.lang);
// 		el[i].setAttribute('data-lang', langList[i]);
// 	}
// })();