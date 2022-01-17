/*! Modales */
function closePopup() {$.magnificPopup.close();}




/*! Ouverture automatique PRE-HOME */
/*$(document).ready(function () {
    setTimeout(function() {
     if ($('#prehome').length) {
       $.magnificPopup.open({
        items: {
            src: '#prehome' 
        },
        type: 'inline'
          });
       }
     }, 100);
    });*/



	
/*! Liens dons boutons radio */
var valeurdons = 100;
document.getElementById("liendon").href = "https://dons.fnh.org/lp-ecoacteur20/fill?engagement=don_simple&montant="+valeurdons;
document.getElementById("liendon-2").href = "https://dons.fnh.org/lp-ecoacteur20/fill?engagement=don_simple&montant="+valeurdons;
document.getElementById("liendon-3").href = "https://dons.fnh.org/lp-ecoacteur20/fill?engagement=don_simple&montant="+valeurdons;


document.querySelector("#header-radio").addEventListener('change', function () {
    var elts = document.querySelectorAll('#header-radio input');
    for (var i = 0; i < elts.length; i++) {
        if ( elts[i].checked === true ) break;
    }
    console.log('value => '+elts[i].value);
    var valeurdons = elts[i].value;
    document.getElementById("liendon").href = "https://dons.fnh.org/lp-ecoacteur20/fill?engagement=don_simple&montant="+valeurdons;
})

document.querySelector("#section__hulot").addEventListener('change', function () {
    var elts = document.querySelectorAll('#section__hulot input');
    for (var i = 0; i < elts.length; i++) {
        if ( elts[i].checked === true ) break;
    }
    console.log('value => '+elts[i].value);
    var valeurdons = elts[i].value;
    document.getElementById("liendon-2").href = "https://dons.fnh.org/lp-ecoacteur20/fill?engagement=don_simple&montant="+valeurdons;
})

document.querySelector("#modal__radio-mobile").addEventListener('change', function () {
    var elts = document.querySelectorAll('#modal__radio-mobile input');
    for (var i = 0; i < elts.length; i++) {
        if ( elts[i].checked === true ) break;
    }
    console.log('value => '+elts[i].value);
    var valeurdons = elts[i].value;
    document.getElementById("liendon-3").href = "https://dons.fnh.org/lp-ecoacteur20/fill?engagement=don_simple&montant="+valeurdons;
})




/*! Démarrage de l'animation à l'affichage JQuery */
function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit, blink') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}
// Check if it's time to start the animation.
function checkAnimation() {
    var $elem = $('#cercles > div > svg > .circle');

    // If the animation has already been started
    if ($elem.hasClass('start')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start');
    }
}
// Capture scroll events
$(window).scroll(function(){
    checkAnimation();
});


