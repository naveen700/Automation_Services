"use strict";


// Prealoder
function prealoader() {
    if ($('#preloader_1').length) {
        $('#preloader_1').fadeOut(); // will first fade out the loading animation
        $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({ 'overflow': 'visible' });
    };
}


// placeholder remove
function removePlaceholder() {
    if ($("input,textarea").length) {
        $("input,textarea").each(
            function() {
                $(this).data('holder', $(this).attr('placeholder'));
                $(this).on('focusin', function() {
                    $(this).attr('placeholder', '');
                });
                $(this).on('focusout', function() {
                    $(this).attr('placeholder', $(this).data('holder'));
                });

            });
    }
}


// Scroll to top
function scrollToTop() {
    if ($('.scroll-top').length) {

        //Check to see if the window is top if not then display button
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 200) {
                $('.scroll-top').fadeIn();
            } else {
                $('.scroll-top').fadeOut();
            }
        });

        //Click event to scroll to top
        $('.scroll-top').on('click', function() {
            $('html, body').animate({ scrollTop: 0 }, 1500);
            return false;
        });
    }
}


// Theme-banner Video slider 
function BannerVideoSlider() {
    var banner = $("#main-banner-slider.video-slider");
    if (banner.length) {
        banner.revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            loops: false,
            delay: 10000,
            navigation: {
                arrows: {
                    style: "hermes",
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: false,
                    tmp: '<div class="tp-arr-allwrapper"> <div class="tp-arr-imgholder"></div>  <div class="tp-arr-titleholder">{{title}}</div> </div>',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: false,
                }

            },
            responsiveLevels: [2220, 1183, 975, 751],
            gridwidth: [1170, 970, 770, 350],
            gridheight: [850, 850, 850, 700],
            shadow: 0,
            spinner: "off",
            autoHeight: "off",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                disableFocusListener: false,
            }
        });
    };
}


//Add OnepageNav / Sidebar
function onePageFixedNav() {
    if ($('body').length) {
        // Add scrollspy to 
        $('body').scrollspy({ target: ".theme-main-header", offset: 70 });

        // Add smooth scrolling on all links inside the one-page-menu
        $(".one-page-menu li a").on('click', function(event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 1000, function() {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
    }
}


// Mixitup gallery
function mixitupGallery() {
    var mixItem = $(".project-gallery");
    if (mixItem.length) {
        mixItem.mixItUp()
    };
}

// Progress Bar
function bootstrapProgress() {
    var smartskill = $('.skills');
    if (smartskill.length) {
        smartskill.skill();
    }
}


// Client SLider
function clientSlider() {
    var cSldier = $(".client-slider");
    if (cSldier.length) {
        cSldier.owlCarousel({
            animateOut: 'slideOutLeft',
            loop: true,
            nav: false,
            navText: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 7000,
            autoplaySpeed: 5500,
            lazyLoad: true,
            items: 1,
        })
    }
}


// Partner Logo Footer 
function partnersLogo() {
    var logoSlide = $("#partner_logo");
    if (logoSlide.length) {
        logoSlide.owlCarousel({
            loop: true,
            margin: -1,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplaySpeed: 1000,
            lazyLoad: true,
            singleItem: true,
            responsive: {
                0: {
                    items: 1
                },
                550: {
                    items: 2
                },
                751: {
                    items: 3
                },
                1001: {
                    items: 5
                }
            }
        })
    }
}


//Contact Form Validation
function contactFormValidation() {
    var activeForm = $('.form-validation');
    if (activeForm.length) {
        activeForm.validate({ // initialize the plugin
            rules: {
                Fname: {
                    required: true
                },
                Lname: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                sub: {
                    required: true
                },
                message: {
                    required: true
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    success: function() {
                        $('.form-validation :input').attr('disabled', 'disabled');
                        activeForm.fadeTo("slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor', 'default');
                            $('#alert-success').fadeIn();
                        });
                    },
                    error: function() {
                        activeForm.fadeTo("slow", 1, function() {
                            $('#alert-error').fadeIn();
                        });
                    }
                });
            }
        });
    }
}

// Close suddess Alret
function closeSuccessAlert() {
    var closeButton = $(".closeAlert");
    if (closeButton.length) {
        closeButton.on('click', function() {
            $(".alert-wrapper").fadeOut();
        });
        closeButton.on('click', function() {
            $(".alert-wrapper").fadeOut();
        })
    }
}


// Sticky header
function stickyHeader() {
    if ($('.theme-main-header').length) {
        var sticky = $('.theme-main-header'),
            scroll = $(window).scrollTop();

        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');

    };
}

// Calendar
function cladendar() {
    var calender = $('#blog-calendar');
    if (calender.length) {
        calender.monthly();
    }
}

// Tooggle Home page menu click Function 
function subMenuExpend() {
    if ($(".theme-main-header").length) {
        $('.theme-main-header li.dropdown-holder').append(function() {
            return '<i class="fa fa-angle-down"></i>';
        });
        $('.theme-main-header li.dropdown-holder .fa').on('click', function() {
            $(this).parent('li').children('ul').slideToggle();
        });
    }
}

// DOM ready function
jQuery(document).on('ready', function() {
    (function($) {
        removePlaceholder();
        scrollToTop();
        BannerVideoSlider();
        onePageFixedNav();
        mixitupGallery();
        bootstrapProgress();
        clientSlider();
        partnersLogo();
        contactFormValidation();
        closeSuccessAlert();
        cladendar();
        subMenuExpend()
    })(jQuery);
});


// Window scroll function
jQuery(window).on('scroll', function() {
    (function($) {
        stickyHeader()
    })(jQuery);
});


// Window load function
jQuery(window).on('load', function() {
    (function($) {
        prealoader()
    })(jQuery);
});
// document.getElementById('menu').addEventListener('click', () => {
//   setTimeout(() => {

//   if(!document.getElementById('navbar-collapse-1').classList.contains('collapsing'))
//   {
//     document.getElementById('navbar-collapse-1').classList.remove('collapse');
//     document.getElementById('navbar-collapse-1').classList.add('collapsing');
//   }
//   else{
//     document.getElementById('navbar-collapse-1').classList.add('collapse');
//     document.getElementById('navbar-collapse-1').classList.remove('collapsing');
//   }
//   }, 1000)
// })


var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("sell");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    document.getElementById('service-form').reset();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById('service-form').reset();
    }
}

var img = '';
var text = '';

function showFormModal(service) {
    var myModal2 = document.getElementById('myModal2');
    switch (service) {
        case 'machineLearning':
            img = "https://automationedge.com/wp-content/uploads/2017/07/MachineLearning.png";
            text = "Machine learing is a part of Artificial Intelligence which is continously adapted by the bigger companies to grow their Business they are ready for this Are You? Machine learning is an application of artificial intelligence (AI) that provides systems  the ability to automatically learn and improve from experience without being explicitly programmed. Machine learning focuses on the development of computer programs that can access data and use it learn for " +
                "themselves. The process of learning begins with observations or data, such as examples, direct experience, or instruction, in order to look for patterns in data and make better decisions in the future based" +
                "on the examples that we provide. The primary aim is to allow the computers learn automatically without human intervention or assistance and adjust actions accordingly. ";
            break;
        case 'chatbot':
            img = "https://automationedge.com/wp-content/uploads/2017/07/chatbot.png";
            text = "Recently, new tools designed to simplify the interaction between humans and computers have hit the market: Chatbots or Virtual Assistants. In banking, chatbots and virtual assistants are some of the industry’s newest tools designed to simplify the interaction between humans and computers A chatbot is an artificial intelligence (AI) software that can simulate a conversation (or a chat) with a user in natural language through messaging applications, websites, mobile apps or through the telephone." +
                "Why are chatbots important? A chatbot is often described as one of the most advanced and promising expressions of interaction between humans and machines."
            break;
        case 'BPA':
            img = "https://automationedge.com/wp-content/uploads/2018/04/NOC-and-Event-Resolution-Automation.png";
            text = "Build apps, automate workflows and improve efficiency. Get started for free! More focused employees. Happier customers. Lower operational cost. Higher ROI. Powering 2M Businesses. Services: Live chat support, SMS/Email notifications, QR/barcode scanning, Automated workflows. More flexibility in process automation: discover Process Control System SIMATIC PCS 7 V9. Making it safer and easier to plan your start on the path to digitalization. Learn more! Scalability. Improve efficiency. Enhance flexibility. Increase availability.";
            break;

        case 'ERP':
            img = "https://automationedge.com/wp-content/uploads/2017/12/7.png";
            text = "ERP software is considered to be a type of enterprise application, that is software designed to be used by larger businesses and often requires dedicated teams to customize and analyze the data and to handle upgrades and deployment. In contrast, Small business ERP applications are lightweight business management software solutions, often customized for a specific business industry or vertical." +
                "Today most organizations implement ERP systems to replace legacy software or to incorporate ERP applications because no system currently exists.";
            break;
        case 'Analytics':
            img = "https://automationedge.com/wp-content/uploads/2017/12/6.png";
            text = "Organizations may apply analytics to business data to describe, predict, and improve business performance. Specifically, areas within analytics include predictive analytics, prescriptive analytics, enterprise decision management, descriptive analytics, cognitive analytics, Big Data Analytics, retail analytics, supply chain analytics, store assortment and stock-keeping unit optimization, marketing optimization and marketing mix modeling, web analytics, call analytics, speech analytics, sales force sizing and optimization, price and promotion modeling, predictive science, credit risk analysis, and fraud analytics. Since analytics can require extensive computation (see big data), the algorithms and software used for analytics harness the most current methods in computer science, statistics, and mathematics We Provide All";
            break;

        case 'virtualCTO':
            img = "https://automationedge.com/wp-content/uploads/2017/12/5-1.png";
            text = "Organizations may apply analytics to business data to describe, predict, and improve business performance. Specifically, areas within analytics include predictive analytics, prescriptive analytics, enterprise decision management, descriptive analytics, cognitive analytics, Big Data Analytics, retail analytics, supply chain analytics, store assortment and stock-keeping unit optimization, marketing optimization and marketing mix modeling, web analytics, call analytics, speech analytics, sales force sizing and optimization, price and promotion modeling, predictive science, credit risk analysis, and fraud analytics. Since analytics can require extensive computation (see big data), the algorithms and software used for analytics harness the most current methods in computer science, statistics, and mathematics";
            break;
        case 'corporateTraining':
            img = "https://automationedge.com/wp-content/uploads/2017/12/5-1.png";
            text = 'Corporate training has evolved rapidly in recent years to move beyond training just new hires, sales people and leaders. Learning and development professionals and corporate trainers are seen as strategic partners who are critical to the success of their business. Why? Organizations today suffer from a skills gap. And many companies say that it takes 3-5 years to take a seasoned professional and make them productive. This means companies have to train, retrain, and jointly educate employees and managers in order to grow. As millennials take on more responsibility, companies will need to build leadership and communication skills at all levels and in all locations around the world.'
            break;
        default:
            img = "https://automationedge.com/wp-content/uploads/2017/12/5-1.png";
            text = 'Corporate training has evolved rapidly in recent years to move beyond training just new hires, sales people and leaders. Learning and development professionals and corporate trainers are seen as strategic partners who are critical to the success of their business. Why? Organizations today suffer from a skills gap. And many companies say that it takes 3-5 years to take a seasoned professional and make them productive. This means companies have to train, retrain, and jointly educate employees and managers in order to grow. As millennials take on more responsibility, companies will need to build leadership and communication skills at all levels and in all locations around the world.'
            break;
    }
    document.getElementById('service-img').src = img;
    document.getElementById('service-text').innerText = text;
    myModal2.style.display = "flex";
    document.getElementsByClassName('close')[1].onclick = function() {
        myModal2.style.display = "none";
        document.getElementById('service-form2').reset();
    }
    document.getElementById('service-form2').reset();
    window.onclick = function(event) {
        if (event.target == myModal2) {
            myModal2.style.display = "none";
        }
    }

}

function toggleMenuBar(){
    document.getElementById('navbar-collapse-1').classList.remove('in');
}