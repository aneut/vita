$(function() {

    //chcemy sie dostac do takiego linka ktory ma # ale jeszcze cos poza tym no #menu - inaczej slepe wleca :D
    //szukaj takich linkow ktore aczynaja sie od # ale na @ sie nie koncza: 'a[href^="#"]'
    $('a[href^="#"]').on('click', function(e) {
        //ponizsza konstrukcja: dodatkowy dolec to jest obiekt JQuery ="zwracaj obiekt"
        var target = $( $(this).attr('href') );
        //console.log(target.length);
        if(target.length) {
            //jezeli target jest wiekszy od zera - skrocona notacja :)
            //
            
            e.preventDefault();
            console.log(target.offset().top); // domyslna zasada dzialania przegladarki - tu skok :D
            $('html').animate({
                scrollTop: target.offset().top //scrollTop - wlasciwosc wbudowana w java script ktora powowduje przesuwanie dodanego elementu
                //skroluj od gory , target - zmienna z metoda offset ktora przehcowuje aktualna offset top - skroluj od gory o wlasciwosc offset na ktory wskazuje - od gory ile pixeli
            }, 1000);
        }

        
    })



});
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