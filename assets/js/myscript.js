$(document).ready(function() {
	$('.reload').css({'display': 'none'})
})

function reload() {
	window.location.reload()

	$('.form-options').css({'display': 'inline-block'})
	$('.words').css({'display': 'none'})
	atext = []
}

function letsGo() {
	var velocity = $('#velocity').val()
	var textarea = $('#text').val()

	if (textarea == "") {
		alert("Text required")
	} else {
		core(velocity, textarea)
	}
}

function core(velocity, textarea) {

	var countdown = ['3', '2', '1']
	var text      = textarea
	var atext     = []

	atext = text.split(' ')

	$('.reload').css({'display': 'inline-block'})
	$('.words').css({'display': 'inline-block'})
	$('.form-options').css({'display': 'none'})

	//Countdown to init read
	$('body').css({'overflow': 'hidden'})
	$('.countdown').css(
		{
			'font-size':'400px', 
			'margin-top': '-80px', 
			'color': '#FFF',
			'font-weight': '900',
			'text-shadow': '-1px -2px 18px rgba(173,80,144,0.99)'
		}
	)

	countdown.forEach(function(count) {
		$('.countdown').fadeIn(900, function() {
			$('.countdown').text(count)
			textFit(document.getElementsByClassName('hot-area')[0]);
		})
		$('.countdown').fadeOut(900, function() {
			$('.countdown').text("")
		})
	})

	setTimeout(function() {		
		$('.countdown').css({'display': 'none'})
		$('.hot-area').css(
			{
				'font-size':'3em !important', 
				'font-weight':'600', 
				'margin-top': '100px', 
				'magin-left': '0px',
				'magin-right': '0px',
				'color': '#FFF',
				'display': 'none',
				'text-shadow': '-1px -2px 18px rgba(2,17,33,0.99)'
			}
		)

		atext.forEach(function(txt) {
			$('.hot-area').fadeIn(velocity, function() {
				$('.hot-area').text(txt)
				textFit(document.getElementsByClassName('hot-area')[0]);
				console.log(txt)
			})
			$('.hot-area').fadeOut(velocity, function() {
				$('.hot-area').text("")
			})
		})
	}, 7300)
}