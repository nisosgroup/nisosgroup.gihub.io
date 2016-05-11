$(function($) {

    // Test mobile, disable skrollr
    function enableSkrollr(){
        var s = skrollr.init({
                    forceHeight: false,
                    smoothScrolling: true
                });
        skrollr.menu.init(s, {
            animate: true,
            easing: 'sqrt'
        });
    }

    function disableSkrollr(){
        var s = skrollr.init();
        s.destroy();
    }

    enquire.register("screen and (min-width: 1025px)", {
        match : function() {
            enableSkrollr();
        },  
        unmatch : function() {
            disableSkrollr();
        }
    });

    // Twitterstream animation
    $('#twitterstream').on('click', function(){
        var panel = $('#twitterstream-holder, #twitterstream-holder-bg');
        panel.data({animating: false});
        if (panel.data('animating') === true){
            panel.velocity('stop', true).velocity('reverse',{duration:300});
            panel.data({animating:false});
        } else {
            if (panel.hasClass('hidden')) {
                panel.removeClass('hidden');
                panel.velocity({
                    p: {translateX: -210},
                    o: {duration: 300, 
                        easing: 'ease-in-out',
                        begin: function(){
                            panel.data({animating:true});
                        },
                        complete: function(){
                            panel.data({animating:false});
                        }
                    }
                });
            } else {
                panel.addClass('hidden');
                panel.velocity({
                    p: {translateX: 0},
                    o: {duration: 300, 
                        easing: 'ease-in-out',
                        begin: function(){
                            panel.data({animating:true});
                        },
                        complete: function(){
                            panel.data({animating:false});
                        }
                    }
                });
            }
            
        }
    });

    // Contact panel animation
    $('.contact-trigger').on('click', function(){
        console.log('clickity');
        var panel = $('#contact-drop, #contact-drop-bg');
        panel.data({animating: false});
        if (panel.data('animating') === true){
            panel.velocity('stop', true).velocity('reverse',{duration:300});
            panel.data({animating:false});
        } else {
            if (panel.hasClass('hidden-contact')) {
                panel.removeClass('hidden-contact');
                panel.velocity('transition.fadeIn', {
                        duration: 300, 
                        easing: 'ease-in-out',
                        begin: function(){
                            panel.data({animating:true});
                        },
                        complete: function(){
                            panel.data({animating:false});
                        }
                    }
                );
            } else {
                panel.addClass('hidden-contact');
                panel.velocity('transition.fadeOut', {
                        duration: 300, 
                        easing: 'ease-in-out',
                        begin: function(){
                            panel.data({animating:true});
                        },
                        complete: function(){
                            panel.data({animating:false});
                        }
                    }
                );
            }
            
        }
    });

    // Animate various header drawings
    function bleedoutLogo() {
        $('#blue-bg')
            .velocity({
                p: {backgroundColor: '#4796FF'},
                o: {duration: 1000, easing: 'ease-in-out'}
            })
            .velocity({
                p: {backgroundColorAlpha: 0},
                o: {duration: 1000, delay: 150, easing: 'ease-in-out'}
            });
        $('#logo-svg path')
            .velocity({
                p: {strokeOpacity: '0', fillOpacity: '1'},
                o: {duration: 1000, easing: 'ease-in-out'}
            });
        $('nav').transition({y:0}, 1000, 'ease');
    }

    function bleedoutSlogan2() {
        $('#slogan-2-1-svg path').velocity({
            p: {strokeOpacity: '0', fillOpacity: '1'},
            o: {duration: 1000, easing: 'ease-in-out'}
        });
        $('#slogan-2-1-svg path.evolving-hook').velocity({
            p: {fill:'#E1DD17'},
            o: {duration: 1000, easing: 'ease-in-out'}
        }).velocity({
            p: {fill:'#FFFFFF'},
            o: {duration: 1000, easing: 'ease-in-out'}
        }).velocity({
            p: {fill:'#ffae28'},
            o: {duration: 1000, easing: 'ease-in-out'}
        }).velocity({
            p: {fill:'#4796FF'},
            o: {duration: 1000, easing: 'ease-in-out'}
        });
    }

    function bleedoutSlogan3() {
        $('#slogan-3-svg path').velocity({
            p: {strokeOpacity: '0', fillOpacity: '1'},
            o: {duration: 1000, easing: 'ease-in-out'}
        });
    }

    function bleedoutSlogan4() {
        $('#slogan-4-svg path').velocity({
            p: {strokeOpacity: '0', fillOpacity: '1'},
            o: {duration: 1000, easing: 'ease-in-out'}
        });
    }

    function bleedoutSlogan5() {
        $('#slogan-5-svg path').velocity({
            p: {strokeOpacity: '0', fillOpacity: '1'},
            o: {duration: 1000, easing: 'ease-in-out'}
        });
    }

    // Nav menu home button (logo)
    $('.small-logo').on('click', function(){
        $("header").velocity("scroll", { mobileHA: false, easing: 'ease-in-out' });
    });

    // Drawing Code
    var logo = new Vivus('logo-svg', {type: 'async', duration: 30, start: 'manual'}, bleedoutLogo);
    var slogan2a = new Vivus('slogan-2-1-svg', {type: 'async', duration: 30, start: 'inViewport'}, bleedoutSlogan2);
    var slogan3 = new Vivus('slogan-3-svg', {type: 'async', duration: 30, start: 'inViewport'}, bleedoutSlogan3);
    var slogan4 = new Vivus('slogan-4-svg', {type: 'async', duration: 30, start: 'inViewport'}, bleedoutSlogan4);
    var slogan5 = new Vivus('slogan-5-svg', {type: 'async', duration: 30, start: 'inViewport'}, bleedoutSlogan5);
    $('#logo-svg-hold').css({opacity: 1});
    logo.play();

    // Waypoints
    var insufficienciesPlayed = false;
    var insufficiencies = new Waypoint({
        element: document.getElementById('mission-content'),
        handler: function(direction) {
            if (direction === 'down' && insufficienciesPlayed === false) {
                $('.threat-para').velocity("transition.slideUpIn", { stagger: 500, complete: function() {
                    $('#mission-content').velocity({
                        p: {borderColorAlpha: 0.4},
                        o: {duration: 400}
                    });
                }});
                insufficienciesPlayed = true;
            }
        },
        offset: '65%'
    });

    var reasonsPlayed = false;
    var reasons = new Waypoint({
        element: document.getElementById('reasons'),
        handler: function(direction) {
            if (direction === 'down' && reasonsPlayed === false) {
                $('.reason').velocity("transition.slideUpIn", { stagger: 500 });
                reasonsPlayed = true;
            }
        },
        offset: '65%'
    });

    var skillsPlayed = false;
    var skills = new Waypoint({
        element: document.getElementById('stocontainer'),
        handler: function(direction) {
            if (direction === 'down' && skillsPlayed === false) {
                $('.stos').velocity("transition.slideUpIn", { stagger: 500 });
                skillsPlayed = true;
            }
        },
        offset: '65%'
    });

    var pitchesPlayed = false;
    var pitches = new Waypoint({
        element: document.getElementById('pitch'),
        handler: function(direction) {
            if (direction === 'down' && pitchesPlayed === false) {
                $('.pitches').velocity("transition.slideUpIn", { stagger: 500 });
                pitchesPlayed = true;
            }
        },
        offset: '65%'
    });

    // Swipe Carousel
    var preservation = $('#preservation');
    var creation = $('#creation');
    window.mySwipe = new Swipe(document.getElementById('slider'),{
        continuous: false,
        callback: function(i,e){
            switch(i){
                case 0:
                    $('.bullet-selected svg circle').velocity({fillOpacity: 0, r: '5px'}, 200);
                    $('.bullet-selected').removeClass('bullet-selected');
                    preservation.addClass('bullet-selected');
                    $('#preservation-bullet circle').velocity({fillOpacity: 1, r: '7px'}, 200);
                    //$('#divider-arrow-right').velocity({fillOpacity: 1}, 200);
                    //$('#divider-arrow-left').velocity({fillOpacity: 0}, 200);
                    break;
                case 1:
                    $('.bullet-selected svg circle').velocity({fillOpacity: 0, r: '5px'}, 200);
                    $('.bullet-selected').removeClass('bullet-selected');
                    creation.addClass('bullet-selected');
                    $('#creation-bullet circle').velocity({fillOpacity: 1, r: '7px'}, 200);
                    //$('#divider-arrow-right').velocity({fillOpacity: 0}, 200);
                    //$('#divider-arrow-left').velocity({fillOpacity: 1}, 200);
                    break;
                default:
                    $('.bullet-selected svg circle').velocity({fillOpacity: 0, r: '5px'}, 200);
                    $('.bullet-selected').removeClass('bullet-selected');
                    preservation.addClass('bullet-selected');
                    $('#preservation-bullet circle').velocity({fillOpacity: 1, r: '7px'}, 200);
                    //$('#divider-arrow-right').velocity({fillOpacity: 1}, 200);
                    //$('#divider-arrow-left').velocity({fillOpacity: 0}, 200);
            }
        }
    });
    preservation.on('click', function(){
        window.mySwipe.slide(0,500);
    });
    creation.on('click', function(){
        window.mySwipe.slide(1,500);
    });
    preservation.hover(
        function(){
            if (!preservation.hasClass('bullet-selected')){
                $('#preservation-bullet circle').velocity({r: '7px'}, 200);
            }
        },
        function(){
            if (!preservation.hasClass('bullet-selected')){
                $('#preservation-bullet circle').velocity({r: '5px'}, 200);
            }
        }
    );
    creation.hover(
        function(){
            if (!creation.hasClass('bullet-selected')){
                console.log('ass!');
                $('#creation-bullet circle').velocity({r: '7px'}, 200);
            }
        },
        function(){
            if (!creation.hasClass('bullet-selected')){
                $('#creation-bullet circle').velocity({r: '5px'}, 200);
            }
        }
    );

    // Social Links
    $('#email').on('click', function(){
        window.location = 'mailto:info@nisosgroup.com';
    });
    $('#twitter').on('click', function(){
        window.location = 'http://twitter.com/nisosgroup/';
    });
    $('#linkedin').on('click', function(){
        window.location = 'https://www.linkedin.com/company/nisos-group/';
    });
});

// Scrolling code
$(window).scroll(function(){
    var panel = $('#twitterstream-holder, #twitterstream-holder-bg');
    if (!panel.hasClass('hidden')) {
        panel.addClass('hidden');
        panel.velocity({
            p: {translateX: '110%'},
            o: {duration: 300, 
                easing: 'ease-in-out'
            }
        });
    }
    var scrollVal = $(this).scrollTop();
    $('#birds-front').css({
            'transform': 'translate(0px, -' + scrollVal / 60 + '%)'
    });
    $('#tower').css({
            'transform': 'translate(0px, -' + scrollVal / 100 + '%)'
    });
    $('#birds-back').css({
            'transform': 'translate(0px, -' + scrollVal / 140 + '%)'
    });
    $('#splash-bg').css({
            'transform': 'translate(0px, -' + scrollVal / 300 + '%)'
    });
});