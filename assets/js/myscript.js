$(document).ready(function() {
	$('.reload').css({'display': 'none'})
	$('.github').css({'display': 'none'})
})

function reload() {
	window.location.reload()
}

function letsGo() {
	var velocity = $('#velocity').val()
	var textarea = $('#text').val()

	if (textarea == "") {
		swal("Error!", "Text Required", "error")
	} else {
		core(velocity, textarea)
	}
}

function core(velocity, textarea) {

	var countdown = ['3', '2', '1']
	var text      = textarea
	var atext     = []

	atext = text.split(' ')

	//calculo da velocidade
	velocity = ((atext.length * 200) / velocity)

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

		atext.forEach(function(txt, indice) {
			$('.hot-area').fadeIn(velocity, function() {
				$('.hot-area').text(txt)
				textFit(document.getElementsByClassName('hot-area')[0]);
				console.log(txt + ' > ' + Date.now() + ' > ' + indice)
			})
			$('.hot-area').fadeOut(velocity, function() {
				$('.hot-area').text("")
			})
		})

		setTimeout(function() {
			$('.words').css({'display': 'none'})
			$('.form-options').css({'display': 'none'})
			$('.github').css({'display': 'inline-block'})
		}, 6000 + (velocity * atext.length))

	}, 7300)
}