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
        $('#logo-svg')
            .transition({
                filter: 'drop-shadow( -2px -2px 2px #000 )',
                '-webkit-filter': 'drop-shadow( -2px -2px 2px #000 )',
                delay: 1200
            }, 1000, 'ease');                
        $('#slogan-svg')
            .transition({
                filter: 'drop-shadow( -2px -2px 2px #000 )',
                '-webkit-filter': 'drop-shadow( -2px -2px 2px #000 )',
                delay: 1200
            }, 1000, 'ease');
        $('nav').transition({y:0}, 1000, 'ease');
    }

    function bleedoutSlogan2() {
        $('#slogan-2-1-svg path').velocity({
            p: {strokeOpacity: '0', fillOpacity: '1'},
            o: {duration: 1000, easing: 'ease-in-out'}
        });
    }

    function bleedoutGraph() {
        $('.axes-arrowheads').velocity({
            p: {fillOpacity: '1'},
            o: {duration: 200, easing: 'ease-in-out'}
        });
        $('#label-time, #label-sophistication').velocity({
            p: {opacity: '1'},
            o: {delay: 200, duration: 200, easing: 'ease-in-out'}
        });
        $('.graph-line').velocity({
            p: {strokeDashoffset: '0'},
            o: {delay: 400, duration: 500, easing: 'ease-in-out'}
        });
        $('#label-attacks, #label-defenses').velocity({
            p: {opacity: '1'},
            o: {delay: 900, duration: 400, easing: 'ease-in-out'}
        });
        $('.label-arrow').velocity({
            p: {strokeDashoffset: '0'},
            o: {delay: 1300, duration: 400, easing: 'ease-in-out'}
        });
        $('.pointers-arrowheads').velocity({
            p: {fillOpacity: '1'},
            o: {delay: 1700, duration: 200, easing: 'ease-in-out'}
        });
        $('#graph-shading').velocity({
            p: {opacity: '1'},
            o: {delay: 1900, duration: 300, easing: 'ease-in-out'}
        });
        $('#today-line-line').velocity({
            p: {strokeOpacity: '1'},
            o: {delay: 2200, duration: 200, easing: 'ease-in-out'}
        });
        $('#today-line path').velocity({
            p: {fillOpacity: '1'},
            o: {delay: 2400, duration: 200, easing: 'ease-in-out'}
        });
        $('#graph-nisos').velocity({
            p: {opacity: '1'},
            o: {delay: 2700, duration: 300, easing: 'ease-in-out'}
        });
    }

    function bleedoutRisk() {
        $('#risk-svg path').velocity({
            p: {strokeOpacity: '0', fillOpacity: '1'},
            o: {duration: 1000, easing: 'ease-in-out'}
        });
        bracket.play();
    }

    function bleedoutBracket() {
        $('#bracket-svg path').velocity({
            p: {strokeOpacity: '0', fillOpacity: '1'},
            o: {duration: 1000, easing: 'ease-in-out'}
        });
    }

    function bleedoutSlogan3() {
        $('#slogan-3-svg path').velocity({
            p: {strokeOpacity: '0', fillOpacity: '1'},
            o: {duration: 1000, easing: 'ease-in-out'}
        });
    }

    function bleedoutAboutUs() {
        $('#about-us-svg path').velocity({
            p: {strokeOpacity: '0', fillOpacity: '1'},
            o: {duration: 1000, easing: 'ease-in-out'}
        });
    }
    
    // Hover color change for glyphs
    $('.list-bullet').hover(function(){
        $('h5', this).css({color: 'rgb(29,42,64)'});
        var svgFill = $('.glyph svg path, .glyph svg polygon', this);
        svgFill.data({animating: false});
        if (svgFill.data('animating') === true){
            svgFill.velocity("stop", true).velocity('reverse',{ duration:300});
            svgFill.data({animating:false});
        } else {
            svgFill.velocity({
                p: {fillRed: 29, fillGreen: 42, fillBlue: 64, fillOpacity: 1},
                o: {duration: 200, 
                    easing: 'ease-in-out',
                    begin: function(){
                        svgFill.data({animating:true});
                    },
                    complete: function(){
                        svgFill.data({animating:false});
                    }
                }
            });
        }
        var svgStroke = $('.glyph svg circle', this);
        svgStroke.data({animating: false});
        if (svgStroke.data('animating') === true){
            svgStroke.velocity("stop", true).velocity('reverse',{ duration:300});
            svgStroke.data({animating:false});
        } else {
            svgStroke.velocity({
                p: {strokeRed: 29, strokeGreen: 42, strokeBlue: 64, strokeOpacity: 1},
                o: {duration: 200, 
                    easing: 'ease-in-out',
                    begin: function(){
                        svgFill.data({animating:true});
                    },
                    complete: function(){
                        svgFill.data({animating:false});
                    }
                }
            });
        }
    },function(){
        $('h5', this).css({color: 'rgba(0,0,0,.3)'});
        var svgFill = $('.glyph svg path, .glyph svg polygon', this);
        svgFill.data({animating: false});
        if (svgFill.data('animating') === true){
            svgFill.velocity("stop", true).velocity('reverse',{ duration:300});
            svgFill.data({animating:false});
        } else {
            svgFill.velocity({
                p: {fillRed: 0, fillGreen: 0, fillBlue: 0, fillOpacity: 0.3},
                o: {duration: 200, 
                    easing: 'ease-in-out',
                    begin: function(){
                        svgFill.data({animating:true});
                    },
                    complete: function(){
                        svgFill.data({animating:false});
                    }
                }
            });
        }
        var svgStroke = $('.glyph svg circle', this);
        svgStroke.data({animating: false});
        if (svgStroke.data('animating') === true){
            svgStroke.velocity("stop", true).velocity('reverse',{ duration:300});
            svgStroke.data({animating:false});
        } else {
            svgStroke.velocity({
                p: {strokeRed: 0, strokeGreen: 0, strokeBlue: 0, strokeOpacity: 0.3},
                o: {duration: 200, 
                    easing: 'ease-in-out',
                    begin: function(){
                        svgFill.data({animating:true});
                    },
                    complete: function(){
                        svgFill.data({animating:false});
                    }
                }
            });
        }
    });

    // Nav menu home button (logo)
    $('.small-logo').on('click', function(){
        $("header").velocity("scroll", { mobileHA: false, easing: 'ease-in-out' });
    });

    // Drawing Code
    var logo = new Vivus('logo-svg', {type: 'async', duration: 50, start: 'manual'}, bleedoutLogo);
    var slogan2a = new Vivus('slogan-2-1-svg', {type: 'async', duration: 30, start: 'inViewport'}, bleedoutSlogan2);
    var graph = new Vivus('graph-axes-svg', {type: 'async', duration: 20, start: 'inViewport'}, bleedoutGraph);
    var slogan3 = new Vivus('slogan-3-svg', {type: 'async', duration: 30, start: 'inViewport'}, bleedoutSlogan3);
    var slogan4 = new Vivus('about-us-svg', {type: 'async', duration: 30, start: 'inViewport'}, bleedoutAboutUs);
    $('#logo-svg-hold').css({opacity: 1});
    logo.play();

    // Waypoints
    var insufficienciesPlayed = false;
    var insufficiencies = new Waypoint({
        element: document.getElementById('mission-content'),
        handler: function(direction) {
            if (direction === 'down' && insufficienciesPlayed === false) {
                $('.adapt-lose').velocity("transition.slideUpIn", { stagger: 500, complete: function() {
                    $('#mission-content').velocity({
                        p: {borderColorAlpha: 0.4},
                        o: {duration: 400}
                    });
                }});
                insufficienciesPlayed = true;
            }
        },
        offset: '75%'
    });

    var gapperPlayed = false;
    var gapper = new Waypoint({
        element: document.getElementById('gap'),
        handler: function(direction) {
            if (direction === 'down' && gapperPlayed === false) {
                $('#gap').velocity("transition.slideUpIn", { stagger: 500, });
                gapperPlayed = true;
            }
        },
        offset: '75%'
    });

    var approachesPlayed = false;
    var approaches = new Waypoint({
        element: document.getElementById('approaches-boxes'),
        handler: function(direction) {
            if (direction === 'down' && approachesPlayed === false) {
                $('.list-bullet').velocity("transition.slideUpIn", { stagger: 500, });
                approachesPlayed = true;
            }
        },
        offset: '75%'
    });

    var skillsPlayed = false;
    var skills = new Waypoint({
        element: document.getElementById('slider-control'),
        handler: function(direction) {
            if (direction === 'down' && skillsPlayed === false) {
                $('.skill-holder').velocity("transition.slideUpIn");
                skillsPlayed = true;
            }
        },
        offset: '75%'
    });

    // Swipe Carousel
    var remote = $('#remote');
    var special = $('#special');
    var technical = $('#technical');
    window.mySwipe = new Swipe(document.getElementById('slider'),{
        continuous: false,
        callback: function(i,e){
            switch(i){
                case 0:
                    $('.bullet-selected svg circle').velocity({fillOpacity: 0, r: '5px'}, 200);
                    $('.bullet-selected').removeClass('bullet-selected');
                    remote.addClass('bullet-selected');
                    $('#remote-bullet circle').velocity({fillOpacity: 1, r: '7px'}, 200);
                    $('#divider-arrow-right').velocity({fillOpacity: 1}, 200);
                    $('#divider-arrow-left').velocity({fillOpacity: 0}, 200);
                    break;
                case 1:
                    $('.bullet-selected svg circle').velocity({fillOpacity: 0, r: '5px'}, 200);
                    $('.bullet-selected').removeClass('bullet-selected');
                    special.addClass('bullet-selected');
                    $('#special-bullet circle').velocity({fillOpacity: 1, r: '7px'}, 200);
                    $('#divider-arrow-right').velocity({fillOpacity: 1}, 200);
                    $('#divider-arrow-left').velocity({fillOpacity: 1}, 200);
                    break;
                case 2:
                    $('.bullet-selected svg circle').velocity({fillOpacity: 0,r: '5px'}, 200);
                    $('.bullet-selected').removeClass('bullet-selected');
                    technical.addClass('bullet-selected');
                    $('#technical-bullet circle').velocity({fillOpacity: 1, r: '7px'}, 200);
                    $('#divider-arrow-right').velocity({fillOpacity: 0}, 200);
                    $('#divider-arrow-left').velocity({fillOpacity: 1}, 200);
                    break;
                default:
                    $('.bullet-selected svg circle').velocity({fillOpacity: 0, r: '5px'}, 200);
                    $('.bullet-selected').removeClass('bullet-selected');
                    remote.addClass('bullet-selected');
                    $('#remote-bullet circle').velocity({fillOpacity: 1, r: '7px'}, 200);
                    $('#divider-arrow-right').velocity({fillOpacity: 1}, 200);
                    $('#divider-arrow-left').velocity({fillOpacity: 0}, 200);
            }
        }
    });
    remote.on('click', function(){
        window.mySwipe.slide(0,500);
    });
    special.on('click', function(){
        window.mySwipe.slide(1,500);
    });
    technical.on('click', function(){
        window.mySwipe.slide(2,500);
    });
    remote.hover(
        function(){
            if (!remote.hasClass('bullet-selected')){
                $('#remote-bullet circle').velocity({r: '7px'}, 200);
            }
        },
        function(){
            if (!remote.hasClass('bullet-selected')){
                $('#remote-bullet circle').velocity({r: '5px'}, 200);
            }
        }
    );
    special.hover(
        function(){
            if (!special.hasClass('bullet-selected')){
                $('#special-bullet circle').velocity({r: '7px'}, 200);
            }
        },
        function(){
            if (!special.hasClass('bullet-selected')){
                $('#special-bullet circle').velocity({r: '5px'}, 200);
            }
        }
    );
    technical.hover(
        function(){
            if (!technical.hasClass('bullet-selected')){
                $('#technical-bullet circle').velocity({r: '7px'}, 200);
            }
        },
        function(){
            if (!technical.hasClass('bullet-selected')){
                $('#technical-bullet circle').velocity({r: '5px'}, 200);
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