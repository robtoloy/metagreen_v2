"use strict";
$.noConflict();

$(document).ready(function($){

	$(window).scroll(()=>{
		var height = $(window).scrollTop();
		if(height > 100){
			$('#backToTop').fadeIn();
		} else {
			$('#backToTop').fadeOut();
		}
	});

	$('#backToTop').click(event=>{
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, 'slow');
		return false;
	});

	let displayProps = [150, 'linear'];
	let slideProps = [250, 'linear'];

	// icon hover states
		$('.lpi-btn-1').hover(()=>{
			$('.lpi-desc-1').slideToggle(slideProps).display(displayProps);
		});
		$('.lpi-btn-2').hover(()=>{
			$('.lpi-desc-2').slideToggle(slideProps).display(displayProps);
		});
		$('.lpi-btn-3').hover(()=>{
			$('.lpi-desc-3').slideToggle(slideProps).display(displayProps);
		});
		$('.lpi-btn-4').hover(()=>{
			$('.lpi-desc-4').slideToggle(slideProps).display(displayProps);
		});
		$('.lpi-btn-5').hover(()=>{
			$('.lpi-desc-5').slideToggle(slideProps).display(displayProps);
		});

		$('.cw-btn-1').hover(()=>{
			$('.cw-desc-1').slideToggle(slideProps).display(displayProps);
		});
		$('.cw-btn-2').hover(()=>{
			$('.cw-desc-2').slideToggle(slideProps).display(displayProps);
		});
		$('.cw-btn-3').hover(()=>{
			$('.cw-desc-3').slideToggle(slideProps).display(displayProps);
		});
		$('.cw-btn-4').hover(()=>{
			$('.cw-desc-4').slideToggle(slideProps).display(displayProps);
		});
		$('.cw-btn-5').hover(()=>{
			$('.cw-desc-5').slideToggle(slideProps).display(displayProps);
		});

		$('.LPI1 .desc-btns').each(()=>{
			$(this).hover(()=>{
				$('.lpi-line').toggle(slideProps);
				$('.LPI1').toggleClass('br');
			})
		});
		$('.CW1 .desc-btns').each(()=>{
			$(this).hover(()=>{
				$('.cw-line').toggle(slideProps);
				$('.CW1').toggleClass('bl');
			})
		});

	// absolutely position modal pop ups in center of screen
	$(()=>{
	    function reposition() {
	        var modal = $(this),
	        dialog = modal.find('.modal-dialog');
	        modal.css('display', 'block');
	        // Dividing by two centers the modal exactly, but dividing by three
	        // or four works better for larger screens.
	        dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
	    }
	    // Reposition when a modal is shown
	    $('.modal').on('show.bs.modal', reposition);
	    // Reposition when the window is resized
	    $(window).on('resize', ()=>{
	        $('.modal:visible').each(reposition);
	    });
	});

	$('.navbar-toggle').on('click', ()=>{
		$('.navbar').css('border', 'none');
	});

});
