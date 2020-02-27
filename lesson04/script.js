jQuery(document).ready(function() {
    jQuery('.medicare-plan').addClass('hidden').viewportChecker({
        classToAdd: "visible animated bounceInDown",
        offset: 300
    });

    jQuery('.services-grid').addClass('hidden').viewportChecker({
        classToAdd: "visible animated flash",
        offset: 300
    });

    jQuery('.why-choose-us').addClass('hidden').viewportChecker({
        classToAdd: "visible animated swing",
        offset: 300
    });

    jQuery('.statistics-grid').addClass('hidden').viewportChecker({
        classToAdd: "visible animated pulse",
        offset: 300
    });

    jQuery('.worksAndCreative').addClass('hidden').viewportChecker({
        classToAdd: "visible animated wobble",
        offset: 300
    });

    jQuery('.gallery').addClass('hidden').viewportChecker({
        classToAdd: "visible animated fadeInLeft",
        offset: 300
    });

    jQuery('.ourTeam').addClass('hidden').viewportChecker({
        classToAdd: "visible animated bounceInDown",
        offset: 300
    });

    jQuery('.newPatient').addClass('hidden').viewportChecker({
        classToAdd: "visible animated wobble",
        offset: 300
    });

    jQuery('footer').addClass('hidden').viewportChecker({
        classToAdd: "visible animated flash",
        offset: 300
    });

    jQuery('.copy').addClass('hidden').viewportChecker({
        classToAdd: "visible animated bounceInDown",
        offset: 50
    });


    jQuery('.logo1').hover(
        function(){
            jQuery('.logo1').addClass('animated shake')},
        function() {
            jQuery('.logo1').removeClass('animated shake')}
    );

    jQuery('.logo2').hover(
        function(){
            jQuery('.logo2').addClass('animated shake')},
        function() {
            jQuery('.logo2').removeClass('animated shake')}
    );

    jQuery('.logo3').hover(
        function(){
            jQuery('.logo3').addClass('animated shake')},
        function() {
            jQuery('.logo3').removeClass('animated shake')}
    );

    jQuery('.logo4').hover(
        function(){
            jQuery('.logo4').addClass('animated shake')},
        function() {
            jQuery('.logo4').removeClass('animated shake')}
    );




});
