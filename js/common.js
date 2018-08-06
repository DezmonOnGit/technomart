$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items: 1,
  	autoplay: true,
  	stopOnHover : true,
  	loop: true,
  	dots: false,
  	nav: true,
  });

  function commonSwitchTab (selector) {
    var getAttr = $(this).attr('data-tabControl');
    $(selector + ' [data-tabControl]').removeClass('active')
    $(this).addClass('active')
    $(selector).attr('data-tab', '')
    $(selector + '[data-tab]').attr('data-tab', getAttr)
    $(selector + ' [data-tabContent]').removeClass('active');
    $(selector + ' [data-tabContent="'+ getAttr + '"]').addClass('active')
	}
	function tabCall(selector) {
	    $(selector + ' [data-tabControl]').on('click', function () {
	        commonSwitchTab.call(this, selector);
	    });
	}

	tabCall('.tabs__js')
});