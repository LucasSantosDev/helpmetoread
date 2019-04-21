function changeText(cont1,cont2,speed){
	var Otext    = cont1.text()
	var Ocontent = Otext.split("")
	var i        = 0

	function show() {
	    if(i < Ocontent.length) {  
	      	cont2.append(Ocontent[i])
	      	i = i + 1
		}
	}
  	var Otimer = setInterval(show, speed)
}

$(document).ready(function() {

	changeText($(".text-hide"), $(".script-type"), 150)

  	clearInterval(Otimer)

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
	switch (velocity) {
		case '100':
			velocity = 1000
		case '200':
			velocity = 900
		case '300':
			velocity = 800
		case '400':
			velocity = 700
		case '500':
			velocity = 600
		case '600':
			velocity = 500
		case '700':
			velocity = 400
		case '800':
			velocity = 300
		case '900':
			velocity = 200
		case '1000':
			velocity = 100
	}

	// velocity = (velocity * atext.length) / 60

	$('.reload').css({'display': 'inline-block'})
	$('.words').css({'display': 'inline-block'})
	$('.form-options').css({'display': 'none'})
	$('.github').css({'display': 'none'})

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