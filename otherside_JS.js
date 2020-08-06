//JavaScipt Document

function scrollToTop() {
	$("html, body").animate({ scrollTop: 0}, 1000);
}

function disableScroll() {
	document.body.classList.add("stop-scrolling");
}

function enableScroll() {
	document.body.classList.remove("stop-scrolling");
}

document.addEventListener("DOMContentLoaded", function() {
	disableScroll('html');
	setTimeout(function () {
		enableScroll('html');
	}, 1001);
});

var backgroundChange = 1;

$(document).ready(function() {
	$(window).scroll(function() {
		$('#disclaimer').css('visibility', 'hidden');
		$(".onload_title").css("opacity", 1-$(document).scrollTop()/777);
		function dimming(target) {
			var scrollTop = $(window).scrollTop();
			var elementOffset = $(target).offset().top;
			var distance = (elementOffset - scrollTop);
			if (distance <= window.innerHeight) {
				if (distance > 0) {
					$(target).css('opacity', .6+distance/window.innerHeight);
				} else if (distance <= 0) {
					$(target).css('opacity', .45);
				}
			} else if (distance/window.innerHeight >= .4) {
				$(target).css('opacity', 1.0);
			}
		}
		var distanceFromTop = $(document).scrollTop();
		if (distanceFromTop >= $('#slide1').height()) {
			$('#banner').addClass('fixed');
		}
		if (($(window)).scrollTop() < $('#slide1').height()) {
			$('#banner').removeClass('fixed');
		}
		var targetHeight = $('.onload_title').height();
		if (distanceFromTop >= targetHeight/3) {
			$('#slide2_title').addClass('appear');
		} 
		if (distanceFromTop >= targetHeight/2) {
			$('#malcolmx_quote').addClass('appear');
		}
		if (distanceFromTop >= targetHeight) {
			$('#slide2_content').addClass('appear');
			$('#slide2').css('margin-top', '20vh');
		}
		targetHeight += $('#slide2').height();
		if (distanceFromTop >= 0.65*targetHeight) {
			$('#part1_header').addClass('appear');
			$('#slide2').css('margin-top', '10vh');
			$('#slide3_title').addClass('appear');
		}
		if (distanceFromTop >= .8*targetHeight) {
			$('#slide3_content').addClass('appear');
		}
		if (distanceFromTop >= 1.2*targetHeight) {
			setTimeout(function () {$('#slide3_image').addClass('slideUp');}, 10);
		}
		targetHeight += $('#slide3').height();
		if (distanceFromTop >= .85*targetHeight) {
			$('#slide4_title').addClass('slideUp');
			$('#slide4_content').addClass('slideUp');
		}
		if (distanceFromTop >= targetHeight) {
			$('.slide4_parallax').addClass('appear');
			var scrollTop = $(window).scrollTop();
			var elementOffset = $('.slide4_parallax').offset().top;
			var distance = (elementOffset - scrollTop);
			var img_opacity = 2*distance/window.innerHeight;
			if (distance/window.innerHeight >= .6) {
				img_opacity = img_opacity + 0.3;
			}
			document.querySelector('.slide4_front').style.opacity = img_opacity;
		}
		targetHeight += $('.slide4_parallax.appear').height();
		if (distanceFromTop >= targetHeight) {
			$('#slide4_content_2').addClass('slideUp');
		}
		targetHeight = targetHeight-$('.slide4_parallax.appear').height()+$('#slide4').height();
		if (distanceFromTop >= .9*targetHeight) {
			$('#slide5_title').addClass('appear');
			$('#slide5_content').addClass('appear');
		}
		if (distanceFromTop >= targetHeight) {
			$('#slide5_content_2').addClass('appear');
		}
		targetHeight += $('#slide5').height();
		if (distanceFromTop >= 1*targetHeight) {
			$('#part2_header').addClass('appear');
			$('#slide6_title').addClass('appear');
			$('html').css('background-color', 'white');
			$('#slide4').css('color', 'black');
			$('#slide5').css('color', 'black');
			$('#slide6').css('color', 'black');
			$('#slide6_content').addClass('appear');
			$('#banner.fixed').css('color', 'black');
			$('.links').css('color', 'black');
		} else if (distanceFromTop <= targetHeight) {
			$('html').css('background-color', 'black');
			$('#slide4').css('color', 'white');
			$('#slide5').css('color', 'white');			
			$('#slide5').css('color', 'white');
			$('#slide6').css('color', 'white');
			$('#banner.fixed').css('color', 'white');
			$('.links').css('color', 'white');
		}
		if (distanceFromTop >= 1.1*targetHeight) {
			$('#slide6_image').addClass('slideUp');
			$('#slide6_image_caption').addClass('slideUp');
		}
		if (distanceFromTop >= 1.225*targetHeight) {
			$('#slide6_content_2').addClass('appear');
			targetHeight += $('#slide6').height();
			if (distanceFromTop > .99*targetHeight) {
				$('#slide7_title').addClass('slideUp');
			}
			if (distanceFromTop > 1*targetHeight) {
				$('#slide7_content').addClass('slideUp');
			}
			if (distanceFromTop > 1.1*targetHeight) {
				$('#slide7_images').addClass('appear');
				$('#slide7_images').css('opacity', 1);
			}
		}
		if (distanceFromTop > 1.2*targetHeight) {
			$('#slide7_content_2').addClass('slideUp');
			targetHeight += $('#slide7').height();
			if (distanceFromTop > targetHeight) {
				$('#slide8_title').addClass('appear');
			}
			if (distanceFromTop > 1.03*targetHeight) {
				$('#slide8_content').addClass('appear');
				targetHeight += $('#slide8').height();
				scrollTop = $(window).scrollTop();
				elementOffset = $('#slide8_title').offset().top;
				distance = (elementOffset - scrollTop);
				if (distance < .5*window.innerHeight || distance+$('#slide8').height() > 0) {
					disableScroll('html');
					setTimeout(function () {
					enableScroll('html');
					}, 1001);
					$('html').addClass('slide8_parallax');
					$('#slide6_content_2.appear').css('color', 'white');
					$('#slide7').css('color', 'white');
					$('#slide8').css('color', 'white');
					$('.links').css('color', 'white');
					$('#banner.fixed').css('color', 'white');
					$('.bottom').css('opacity', '0');
					$('#slide7_images').css('display', 'none');
					$('#slide7_content_2').css('margin-top', '4vh');
					$('#slide5').css('margin-top', '70vh');
					$('#slide7').addClass('slide8_parallax_background');
					$('#slide6').addClass('slide8_parallax_background');
					$('html').css('background-image', "url('images/slide8_image.jpg')");
					$('#slide9').css('color', 'white');
					$('#slide8').addClass('slide8_parallax_background');
					$('#slide9').addClass('slide8_parallax_background');
					if (backgroundChange == 1) {
						backgroundChange = 2;
						var y = $(window).scrollTop();
						$(window).scrollTop(y+window.innerHeight/10*4);
					} else if (distance > .9*window.innerHeight) {
						disableScroll('html');
						setTimeout(function () {
						enableScroll('html');
						}, 1001);
						$('html').removeClass('slide8_parallax');
						$('html').css('background-image', 'none');
						$('#slide6').css('color', 'black');
						$('#slide7').css('color', 'black');
						$('#slide8').css('color', 'black');
						$('.links').css('color', 'black');
						$('#slide9').css('color', 'black');
						$('#banner.fixed').css('color', 'black');
						$('.bottom').css('opacity', '1');
						$('#slide7_images').css('display', 'block');
						$('#slide6_content_2.appear').css('color', 'black');
						$('#slide7_content_2').css('margin-top','64vh');
						$('#slide6').css('margin-top', '10vh');
						$('#slide6').css('margin-bottom', '0vh');
						$('#slide8').removeClass('slide8_parallax_background');
						$('#slide7').removeClass('slide8_parallax_background');
						$('#slide6').removeClass('slide8_parallax_background');
						$('#slide9').removeClass('slide8_parallax_background');
						$('#slide5').css('margin-top', '10vh');
						if (backgroundChange == 2) {
							var y2 = $(window).scrollTop();
							$(window).scrollTop(y2-window.innerHeight/10*4);
							backgroundChange = 1;
						}
				}
				targetHeight += $('#slide8').height();
				if (distanceFromTop > 1.025*targetHeight) {
					$('#slide9_title').addClass('slideUp');
				}
				if (distanceFromTop >1.04*targetHeight) {
					$('#slide9_content').addClass('slideUp');
					targetHeight += $('#slide9').height();
					if (distanceFromTop >= 1.025 * targetHeight) {
						$('#part3_header').addClass('appear');
						$('#slide10_title').addClass('appear');
						$('#part3_header').addClass('slide8_parallax_background');
						$('#slide10_title').addClass('slide8_parallax_background');
						$('#part3_header').css('margin-left', 0);
					}
					if (distanceFromTop >= 1.06* targetHeight) {
						$('#slide10_content').addClass('appear');
						$('html').removeClass('slide8_parallax');
						$('html').css('background-image', 'none');
						$('html').css('background-color', 'black');
						$('#slide10').css('color', 'white');
						$('.links').css('color', 'white');
						$('#part3_header').removeClass('slide8_parallax_background');
						$('#slide10_title').removeClass('slide8_parallax_background');
						$('#slide9').removeClass('slide8_parallax_background');
						$('#slide8').removeClass('slide8_parallax_background');
					}
					if (distanceFromTop >= 1.09*targetHeight) {
						$('.slide10_parallax').addClass('appear');
						scrollTop = $(window).scrollTop();
						elementOffset = $('.slide10_parallax').offset().top;
						distance = (elementOffset - scrollTop);
						img_opacity = 3*distance/window.innerHeight;
						if (distance <= 0.9*window.innerHeight) {
							img_opacity = img_opacity + 0.01;
						}
						document.querySelector('.slide10_front').style.opacity = img_opacity;
					}
					if (distanceFromTop >= 1.16*targetHeight) {
						$('#slide10_content_2').addClass('appear');
						targetHeight += $('#slide10').height();
						if (distanceFromTop >= 1.02*targetHeight) {
							$('#slide11_title').addClass('slideUp');
							$('#slide11').addClass('slide11_parallax');
						}
						if (distanceFromTop >= 1.05*targetHeight) {
							$('#slide11_content').addClass('slideUp');
						}
						if (distanceFromTop >= 1.09*targetHeight) {
							$('#slide11_content_2').addClass('slideUp');
							targetHeight += $('#slide11').height();
							if (distanceFromTop >= 1*targetHeight) {
								$('#slide12_title').addClass('appear');
							}
							if (distanceFromTop >= 1.04*targetHeight) {
								$('#slide12_content').addClass('appear');
								$('#scroll-buffer').css('height', '15vh');
								$('#scroll-buffer').addClass('hide');
							}
							if (distanceFromTop >= 1.07*targetHeight) {
								$('#slide12_content_2').addClass('appear');
							}
						}
					}
				}
				}
			}
		}
		dimming('#slide2_title');
		dimming('#slide2_content');
		dimming('#malcolmx_quote');
		dimming('#part1_header');
		dimming('#slide3_title');
		dimming('#slide3_content');
		dimming('#slide4_title');
		dimming('#slide4_content');
		dimming('#part3_header');
		dimming('#slide10_title');
		dimming('#slide10_content');
		dimming('#slide10_content_2');
		dimming('#slide11_title');
		dimming('#slide11_content');
		dimming('#slide11_content_2');
		dimming('#slide12_title');
		dimming('#slide12_content');
		dimming('#slide12_content_2');
	});
});