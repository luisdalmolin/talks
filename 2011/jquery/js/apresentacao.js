
var 
	x      = 1, 
	total  = 0, 
	hash   = window.location.hash;


$(document).ready(function() {
	// Header
	$('header').hover(
		function() {
			$(this).stop().animate({
				'opacity' : '1.0'
			}, 500);
		}, function() {
			$(this).animate({
				'opacity' : '0.2'
			}, 500);
		}
	);
	
	
	// Passar os slides
	total = $('.slide').length;
	hash  = hash.replace('#', '');
	if( hash <= total && hash > 0 ) {
		x = hash;
	}
	
	$('.slide').hide();
	exibir( $('#slide-' + x) );
	
	/**
	 * Clicando nas setas de navegação
	 */
	$('.seta').click(function(e) {
		//e.preventDefault();
		
		var id = $(this).attr('id');
		
		if( id == 'seta-direita' ) {
			x++;
			if( x > total )
				x = 1;
		} else {
			x--;
			if( x < 1 )
				x = total;
		}
		$(this).attr('href', '#' + x);
		exibir( $('#slide-' + x) );
	});
	
	$('.seta').hover(
		function() {
			$(this).stop().animate({
				'opacity' : '1.0'
			}, 500);
		}, function() {
			$(this).animate({
				'opacity' : '0.2'
			}, 500);
		}
	);
	
	
	
	// Margin
	$('.minhaClasse').hover(
		function() {
			$(this).stop().animate({ 'margin-left' : '15px' }, 200);
		}, function() {
			$(this).animate({ 'margin-left' : '0px' }, 200);
		}
	);
	// Link
	$('.link').click(function(e) {
		e.preventDefault();
		
		alert( $(this).attr('href') );
	});
	
	
	
	
	
	/**
	 * jQuery UI
	 */
	$('.data').datepicker();
	$('.botao').button();
	
	$('#tabs').tabs();
	
	/**
	 * Carregando
	 */
	$("#carregar").click(function() {
		carregar();
	});
	function carregar() {
		var i = 1;
		var intervalo = window.setInterval(function() {
			$( "#loader" ).progressbar({
				value: i
			});
			i++;
			
			if( i == 101 )
				clearInterval( intervalo );
		}, 50);
	}
	
	/**
	 * Autocomplete
	 */
	var availableTags = [
		"jQuery", 
		"Feevale", 
		"ActionScript",
		"AppleScript",
		"Asp",
		"BASIC",
		"C",
		"C++",
		"Clojure",
		"COBOL",
		"ColdFusion",
		"Erlang",
		"Fortran",
		"Groovy",
		"Haskell",
		"Java",
		"JavaScript",
		"Lisp",
		"Perl",
		"PHP",
		"Python",
		"Ruby",
		"Scala",
		"Scheme"
	];
	$( "#tags" ).autocomplete({
		source: availableTags
	});
	
	
	/**
	 * Dialog
	 */
	$('#abre-dialogo').click(function() {
		$( "#dialog-message" ).dialog({
			modal   : true,
			buttons : {
				Ok: function() {
					$( this ).dialog( "close" );
				}
			}
		});
	});
	
	
	$('a[rel="zoom"]').fancybox();
	$('a').pluginteste({ altura : 250, tempo : 750 });
});


var tempo = 500;
function exibir( item )
{
	$('.slide').animate({
		'width'  : 'hide', 
		'height' : 'hide'
	}, tempo);
	
	window.setTimeout(function() {
		item.animate({
			'width'  : 'show', 
			'height' : 'show'
		}, 500);
	}, tempo);
}




/**
 * Plugin
 */
(function($) {	
    $.fn.pluginteste = function(options) {
        var defaults = {
            altura  : 200,
            largura : 300,
            tempo   : 5000
        }		
        var opt  = $.extend( defaults, options );
		
		console.log('Altura: ' + opt.altura + ' | Largura: ' + opt.largura + ' | Tempo: ' + opt.tempo);	
	}
})(jQuery);

$('.seta').pluginteste({ altura : 250, tempo : 750 });