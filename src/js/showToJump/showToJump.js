$(function(){
    const pageHeight = $(window).height() / 2;
    //console.log(pageHeight); tu podzielilam pol wysokosc okna zeby tam 'zakotwiczyc' wracajacy button w polowie strony
    $(window).on('scroll', function() { //przechwytywanie scrolowania <-
        var YOffset = $(window).scrollTop();
        //offset - miejsce  wktoym aktualnie jestem
        //console.log(YOffset);// teraz porownujemy czy YOffset jest dalej niz Page height

        if(YOffset > pageHeight) {
                $('#to_top').fadeIn(1000);
        } else {
                $('#to_top').fadeOut(1000);
        }
    })

})