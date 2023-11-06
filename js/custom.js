
//
$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 600,
				'autoScrolling': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
			});
		});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})
  
$

function handleIntersection(entries, observer) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			// L'élément est devenu visible, exécutez votre code JavaScript ici
			console.log("L'élément est visible à l'écran.");
			$(".sql").animate({ 
				width: "95%", 
			}, 2600); 
			$(".web").animate({ 
				width: "80%", 
			}, 2500); 
			$(".algo").animate({ 
				width: "70%", 
			}, 2300); 
			$(".c").animate({ 
				width: "90%", 
			}, 2600); 
			// Une fois que vous avez exécuté votre code, vous pouvez cesser d'observer l'élément.
			observer.unobserve(entry.target);
		}
	});
}

// Créez un observer qui observe l'élément avec la classe "trigger-element"
const observer = new IntersectionObserver(handleIntersection);

// Sélectionnez l'élément à observer
const elementToObserve = document.querySelector('.trigger-element');

// Commencez à observer l'élément
observer.observe(elementToObserve);
