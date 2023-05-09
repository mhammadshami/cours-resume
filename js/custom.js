$(document).ready(function () {
    // Loading Page Section
    $(".loading-overlay .sk-cube-grid").fadeOut(2000, function () {
                
        // Show The Scroll

        $("body").css("overflow", "auto");
        
        $(this).parent().fadeOut(2000, function () {
            
            $(this).remove();
        });
    });
    
    // Start Filling The Courses Section

    var li = $(this).find('ul.lesson-courses:first li');
    $('main .pdf-courses .courses-chap').text(li.parent('ul').prev('a').text());
    var numCourses = li.length;
    console.log(li);
    for (var i = 0; i < numCourses; i++) {
        var liItem = li[i].dataset;
        createPdfItem(liItem.name, liItem.type, liItem.size, 4,  liItem.link);
        console.log(liItem.link);
    }

    // End Filling The Courses Section 

    // When We Click On The Left Sidebar Items
    $('.bd-toc-item .nav .lesson').click(function (event) {
            event.preventDefault();
            $('main .pdf-courses .courses-chap').text($(this).data('name'));
            $('.pdf-courses .row').empty();
            var li = $(this).find('ul.lesson-courses li');
            var numCourses = li.length;
            //console.log(li[1].dataset.name);
            $('.pdf-courses .row').css('display', 'none');
            for (var i = 0; i < numCourses; i++) {
                var liItem = li[i].dataset;
                createPdfItem(liItem.name, liItem.type, liItem.size, 4,  liItem.link);
                console.log(liItem.link);
            }
            $('html, body').animate({
                scrollTop: $('.pdf-courses').offset().top
                }, 1000);
                $('.pdf-courses .row').fadeIn(1500);
            //$('.pdf-courses').css('display', 'block');

    });
    /*************************************************************************/
    /****Start  When We Click On Links On Left Sidebar***********************/
    /***********************************************************************/
    /*
    var courLink = $('.bd-sidenav .lesson a').click(function (e) {
        e.preventDefault();
        // Number Of Courses In Lesson
        var liCourses = $(this).next('ul.lesson-courses').children('li');
        // Create PDF Element Container Of All Courses
        var pdfCourses = "<div class='pdf-courses'></div>";
        // Append The h2 Element[ The Name Of Lesson]
        var h2 = '<h2>' + $(this).text() + '</h2>';
        // Create The Content Of The pdf-courses
        var divContent = '<div class="content"></div>';
        // Append The Type [pdf]
        var pdfType = '<p>PDF</p>';
        // Append The Size Of PDF
        //console.log(liCourses[0].data('size'));
    });
    */
    /**********************************************************************/
    /****End  When We Click On Links On Left Sidebar**********************/
    /********************************************************************/

    // Nav Links Active Class Adding
    $('.nav-link').click(function () {
        $(this).parent().addClass('active');
        //console.log($(this));
        $(this).parent().siblings('li').removeClass('active');
        $(this).parent().children('span').fadeIn('2000');
        $(this).parent().siblings('li').children('span').fadeOut('2000');
    });
    /***************************************************************************/
    /****** Start Add .show Class When Resizing Our Window In Small Screens****/
    /*************************************************************************/
    var windowWid = $(document).innerWidth();
    windowWid = $(document).innerWidth();
    if (windowWid <= 750) {
        $('#bd-docs-nav').addClass('show');
    } else {
        $('#bd-docs-nav').removeClass('show');
    }
    $(window).resize(function () {
        windowWid = $(document).innerWidth();
        if (windowWid <= 750) {
            $('#bd-docs-nav').addClass('show');
        } else {
            $('#bd-docs-nav').removeClass('show');
        }
        console.log(windowWid);
    });
    /***************************************************************************/
    /****** End Add .show Class When Resizing Our Window In Small Screens****/
    /*************************************************************************/
    // Move To pdf-courses Section When Clicking On Cours Nav link
        $('.nav-link').click(function(e) {
            e.preventDefault();
            var customAtt = $(this).attr('data-section');
            $('html, body').animate({
            scrollTop: $(customAtt).offset().top
            }, 1000);
        });

    /*****************************************/
    /**** Start Fuction Create PDF Item******/
    /***************************************/

    function createPdfItem(title, pdfType, pdfSize, numPages, pdfHref) {
        /***********************************************************************/
        /**************Start Creating PDF Div *********************************/
        /*********************************************************************/

        /*******************************/
        /******Start Pdf Item Div******/
        /*****************************/

        var pdfItem = document.createElement('div');
        pdfItem.classList.add('pdf-item','text-center');
        // Creat h2 Heading
        var h2 = document.createElement('h2');
        h2.innerText = title;
        pdfItem.append(h2);
        // Create Image Of PDF
        var pdfImage = document.createElement('img');
        pdfImage.src = 'images/pdf-item/icon-1.jpg';
        pdfImage.alt = 'PDF Image';
        pdfItem.append(pdfImage);

        /******************************/
        /**Start Created Content Div**/
        /****************************/

        var content = document.createElement('div');
        content.classList.add("content");
        // Create PDF Type [p]
        var type = document.createElement('p');
        type.innerHTML = pdfType;
        content.append(type);
        // Create PDF Size
        var size = document.createElement('p');
        size.innerText = pdfSize;
        content.append(size);
        // Start Creating Preview Button //
        var prevAnchor = document.createElement('a');
        prevAnchor.href = pdfHref;
        prevAnchor.target = "_blank";
        // create The Button Inside The Anchor
        var prevButt = document.createElement('button');
        prevButt.innerText = 'Preview';
        prevAnchor.append(prevButt);
        content.append(prevAnchor);

        // End Creating Preview Button //

        /******************************/
        /****End Created Content Div**/
        /****************************/
        var pdfLink = document.createElement('div');
        pdfLink.classList.add('col-sm-4', 'col-lg-3');
        pdfLink.append(pdfItem);
        $('.pdf-courses .row').append(pdfLink);
        pdfItem.append(content);
        pdfLink.append(pdfItem);
        /*******************************/
        /******End Pdf Item Div********/
        /*****************************/
        /***********************************************************************/
        /****************End Creating PDF Div *********************************/
        /*********************************************************************/
        }

        /***************************************/
        /**** End Fuction Create PDF Item******/
        /*************************************/

        /************************************/
        /******Start Loading Page Section***/
        /**********************************/
        $(window).on('load', function () {
            //alert('onload');
            "use strict";
            //console.log($(window).height() + 'height');
            // Loading Elements
            $(".loading-overlay .sk-cube-grid").fadeOut(2000, function () {
                
                // Show The Scroll
        
                $("body").css("overflow", "auto");
                
                $(this).parent().fadeOut(2000, function () {
                    
                    $(this).remove();
                });
            });
        });
        /************************************/
        /******End Loading Page Section***/
        /**********************************/

        // Caching The Scroll Top Element
            var scrollButton = $('#scroll-top');
            if ($(this).scrollTop() >= 220) {
                    
                scrollButton.show();
                
            } else {
                
                scrollButton.hide();
            }
            $(window).scroll(function () {
                //console.log($(this).scrollTop());
                if ($(this).scrollTop() >= 220) {
                    
                    scrollButton.show();
                    
                } else {
                    
                    scrollButton.hide();
                }
            });
    
    // Click On Button To Scroll Top
    
        scrollButton.click(function () {
            
            $("html,body").animate({ scrollTop : 0 }, 600);
            
        });

    // Start When We Click On Left Bar Items
    $('.lesson').click(function () {
        $(this).find('a').addClass('active');
        $(this).siblings('li.lesson').find('a').removeClass('active');
    });
    // End When We Click On Left Bar Items

    //$('#myForm #subMessage span:first-child').html('Before');
        /********************************/
        /* Start Contact Us Validation */
        /******************************/
          /*****************************/
         /* End Contact Us Validation */
        /****************************/
        $('#myForm #subMessage').on('click', function() {
          sendEmail();
        });
        function sendEmail() {
          var result = validateInputs();
          if (result) {
            var name = $("#myForm #username");
            var subject = $('#myForm #subject');
            var body = $('#myForm #body');
            if (isNotEmpty(name) && isNotEmpty(subject) && isNotEmpty(body)) {
              //console.log(subject.val());
              //console.log(body.val());
              var allBody = `From (${name.val()}) : \n ${body.val()} `;   // message With Name Of Sender
              var mailto = 'mailto:coursesourweb@gmail.com?subject=' + subject.val() + '&body=' + allBody;
              //console.log(allBody);
              location.href = mailto;  
            }
          }
        }
        //////////////////////////////
        // Start Validate Function //
        ////////////////////////////
        function validateInputs() {
          var valid = true;
          var name  = $('#myForm #username'),
              subject = $('#myForm #subject'),
              body = $('#myForm #body');
          if (!isNotEmpty(name)) {
            valid = false;
            $('.contact-form .name-div span').html('required *');
          } else {
            $('.contact-form .name-div span').css('display', 'none');
          }
          if (!isNotEmpty(subject)) {
            valid = false;
            $('.contact-form .subject-div span').html('required *');
          } else {
            $('.contact-form .subject-div span').html(''); 
          }
          if (!isNotEmpty(body)) {
            valid = false;
            $('.contact-form .body-div span').html('required *');
          } else {
            $('.contact-form .body-div span').html('');
          }
          return valid;
        }
        //////////////////////////////
        // End Validate Function //
        ////////////////////////////

        ////////////////////////////////////////////////////////////////////
        //// Start isNotEmpty() Function Test If Input Value Isn`t Empty///
        //////////////////////////////////////////////////////////////////
        function isNotEmpty(caller) {
          if (caller.val().trim() == '') {
            return false;
          } else {
            return true;
          }
        }
        ////////////////////////////////////////////////////////////////////
        //// End isNotEmpty() Function ////////////////////////////////////
        //////////////////////////////////////////////////////////////////
});
