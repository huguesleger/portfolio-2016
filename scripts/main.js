// appel du parallax
	$('#scene').parallax();
    $('#scene2').parallax();
    $('#scene3').parallax();
    $('#scene4').parallax();



//main-home
	var homeHeight = $(window).height();
	$('#home .item').css('height',homeHeight);

	$(window).resize(function(){'use strict',
		$('#home .item').css('height',homeHeight);
	});


//Scroll Menu
$(window).on('scroll', function(){
	if( $(window).scrollTop()>homeHeight ){
		$('.main').addClass('navbar-fixed-top');
	} else {
		$('.main').removeClass('navbar-fixed-top');
	}

});

// Navigation Scroll
	$(window).scroll(function(event) {
		Scroll();
	});

	$('.navbar-collapse ul li a').on('click', function() {
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 85}, 800);
		return false;
	});

	//User define function
	function Scroll() {
		var contentTop      =   [];
		var contentBottom   =   [];
		var winTop      =   $(window).scrollTop();
		var rangeTop    =   200;
		var rangeBottom =   300;
		$('.navbar-collapse').find('.scroll a').each(function(){
			contentTop.push( $( $(this).attr('href') ).offset().top);
			contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
		})
		$.each( contentTop, function(i){
			if ( winTop > contentTop[i] - rangeTop ){
				$('.navbar-collapse li.scroll')
				.removeClass('active')
				.eq(i).addClass('active');
			}
		})
	};

	$('#tohash').on('click', function(){
		$('html, body').animate({scrollTop: $(this.hash).offset().top}, 800);
		return false;
	});



	//Initiat WOW JS
	new WOW().init();



	// Scroll-top section web

	function Top() {
			$('.fa-angle-up').bind("click", function () {
					$('#work-web').animate({ scrollTop: 0 }, 1200);
					return false;
			});
	};



	//-------------------detail-work-----------------//

	var afficheProjets; // je declare ma variable globale qui selectionne et cache mes projets
	$(".btn-diamond, .btn-work-web").click(function(){
		$('body').css('overflow','hidden');// je cache le scroll du body
		var select = $(this).attr("name"); // qui selectionne les valeurs de l'attributs name au clik du btn default et qui le stock dans la variable select
		$("#work-web").width ("100%");
		$("#web").css("margin-top", "750px");
		$("#work-web div[name="+select+"]").show(); //on affecte la valeur de la variable select au nom des div enfants de work-salegosse. et on les affiches
		afficheProjets = $("#work-web div[name="+select+"]"); //on affecte la valeur de la variable select au nom des div enfants de work-salegosse et on les stocks dans la variable  afficheProjets
	})
	$(".closebtnwork").click(function(){
		$('body').css('overflow','visible');
		$("#work-web").width ("0");
		$("#web").css("margin-top", "0");
		$(afficheProjets).hide();
	})



	//--------------------link-print-----------------//
	$("#btn-amka").mouseenter(function(){
	  $("#txt-amka").show();
	});

	$("#btn-amka").mouseleave(function(){
	  $("#txt-amka").hide();
	});

	$("#btn-serigraphie").mouseenter(function(){
		$("#txt-serigraphie").show();
	});

	$("#btn-serigraphie").mouseleave(function(){
		$("#txt-serigraphie").hide();
	});


	$("#btn-fiveo").mouseenter(function(){
	  $("#txt-fiveo").show();
	});

	$("#btn-fiveo").mouseleave(function(){
	  $("#txt-fiveo").hide();
	});

	$("#btn-darkdog").mouseenter(function(){
	  $("#txt-darkdog").show();
	});

	$("#btn-darkdog").mouseleave(function(){
	  $("#txt-darkdog").hide();
	});


	//-------------------scroll-top-work-----------------//
	$("#scrolltop").mouseenter(function(){
	  $(".txt-scrolltop").show();
	});

	$("#scrolltop").mouseleave(function(){
	  $(".txt-scrolltop").hide();
	});




//-------------------detail-print-----------------//

function openSkull() {
    document.getElementById("skull").style.width = "100%";
    document.getElementById("img-print-serigraphie").style.opacity = "0.5";
    document.getElementById("btn-serigraphie").style.display = "none";
}

function closeSkull() {
    document.getElementById("skull").style.width = "0";
    document.getElementById("img-print-serigraphie").style.opacity = "1";
    document.getElementById("btn-serigraphie").style.display = "";
}

function openAmka() {
    document.getElementById("amkashop").style.width = "100%";
    document.getElementById("img-print-amka").style.opacity = "0.5";
    document.getElementById("btn-amka").style.display = "none";
}

function closeAmka() {
    document.getElementById("amkashop").style.width = "0";
    document.getElementById("img-print-amka").style.opacity = "1";
    document.getElementById("btn-amka").style.display = "";
}

function openFiveo() {
    document.getElementById("fiveoshop").style.width = "100%";
    document.getElementById("img-print-fiveo").style.opacity = "0.5";
    document.getElementById("btn-fiveo").style.display = "none";
}

function closeFiveo() {
    document.getElementById("fiveoshop").style.width = "0";
    document.getElementById("img-print-fiveo").style.opacity = "1";
    document.getElementById("btn-fiveo").style.display = "";
}

function openDarkdog() {
    document.getElementById("dark").style.width = "100%";
    document.getElementById("img-print-darkdog").style.opacity = "0.5";
    document.getElementById("btn-darkdog").style.display = "none";
}

function closeDarkdog() {
    document.getElementById("dark").style.width = "0";
    document.getElementById("img-print-darkdog").style.opacity = "1";
    document.getElementById("btn-darkdog").style.display = "";
}



//-------------------contact-----------------//

function openContact() {
   if (window.matchMedia("(min-width: 900px)").matches) {
      document.getElementById("contact-me").style.width = "50%";
   } else {
  document.getElementById("contact-me").style.width = "100%";
 }
    document.getElementById("container").style.marginLeft = "50%";
    document.body.style.overflow = "hidden";
    document.getElementById("container").style.opacity = "0.5";
}

function closeContact() {
    document.getElementById("contact-me").style.width = "0";
    document.getElementById("container").style.marginLeft = "0";
    document.body.style.overflow = "visible";
    document.getElementById("container").style.opacity = "1";
}
