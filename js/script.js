$(function(){
    createButtons();
    var words; // Global variable

// Drag and Drop
    for (i = 0; i < words.length; i++) {
        $("#word-"+i).draggable({

            helper: "clone",
            cancel: false,
            revert: function (event, ui) {
                if(!event){
                    // dialg box
                    // $('#section-drop').css({'filter': 'blur(5px)'});
                    // $("#dialog-message").dialog("open");
                    // comment section
                    $('#comment-section').text('Please try once again');
                    $('#comment-section').removeClass('comment-success')
                    $('#comment-section').css({"opacity":"1"});
                    $('#comment-section').addClass('comment-sec')
                }
                return !event;
            }
        });
    }


    $("#pronouns").droppable({
        accept: function(d) {
                return true;
            },

        // hoverClass: "highlight",
        tolerance: "fit",

        activate: function (evt, ui) {
            // $(this).find("h2").css("background-color", "cornsilk");
        },
        deactivate: function (evt, ui) {
            $(this).find("h2").css("background-color", "");
        },
        drop: function(evt, ui) {
            $(this).css({'background-color':'rgb(5, 107, 98)'});
            $(this).find('h2').css({'color':'#fff'});
            $(this).append($(ui.draggable).clone());
            //shake effect
            // $(this).effect( "shake", { times:2 }, 300);

            // display Comment success
            displayCommentSuccess();

            var IDs = [];
            $("#droppable-items").find("button").each(function(){ IDs.push(this.id); });
            console.log(IDs);

            for (i = 0; i < IDs.length; i++) {
                $('#'+IDs[i]).draggable({ disabled: true });
                $('#'+IDs[i]).css({'color':'rgba(153, 153, 153, 0.6)'});
                $('#'+IDs[i]).css({"background-color":"#fff"});
                $('#'+IDs[i]).css({ "pointer-events": "none"});

            }
        }
    });


    // auxilary-verb
        $("#auxilary-verb").droppable({
        accept: function(d) {
            return true;
        },

        // hoverClass: "highlight",
        tolerance: "fit",

        activate: function (evt, ui) {
            // $(this).find("h2").css("background-color", "cornsilk");
        },
        deactivate: function (evt, ui) {
            $(this).find("h2").css("background-color", "");
        },
        drop: function(evt, ui) {
            $(this).css({'background-color':'rgb(5, 107, 98)'});
            $(this).find('h2').css({'color':'#fff'});
            $(this).append($(ui.draggable).clone());
            //shake effect
            // $(this).effect( "shake", { times:2 }, 300);

            // display Comment success
            displayCommentSuccess();

            var IDs = [];
            $("#droppable-items").find("button").each(function(){ IDs.push(this.id); });
            console.log(IDs);

            for (i = 0; i < IDs.length; i++) {
                $('#'+IDs[i]).draggable({ disabled: true });
                $('#'+IDs[i]).css({'color':'rgba(153, 153, 153, 0.6)'});
                $('#'+IDs[i]).css({"background-color":"#fff"});
                $('#'+IDs[i]).css({ "pointer-events": "none"});

            }
        }
    });


    // Main verb
    $("#main-verb").droppable({
        accept: function(d) {
            return false;
        },

        // hoverClass: "highlight",
        tolerance: "fit",

        activate: function (evt, ui) {
            // $(this).find("h2").css("background-color", "cornsilk");
        },
        deactivate: function (evt, ui) {
            $(this).find("h2").css("background-color", "");
        },
        drop: function(evt, ui) {
            $(this).css({'background-color':'rgb(5, 107, 98)'});
            $(this).find('h2').css({'color':'#fff'});
            $(this).append($(ui.draggable).clone());
            $()

            console.log(  $(this).find('h2').css({'background-color':'#4e5a59'}));


            var IDs = [];
            $("#droppable-items").find("button").each(function(){ IDs.push(this.id); });
            console.log(IDs);

            for (i = 0; i < IDs.length; i++) {
                $('#'+IDs[i]).draggable({ disabled: true });
                $('#'+IDs[i]).css({'color':'rgba(153, 153, 153, 0.6)'});
                $('#'+IDs[i]).css({"background-color":"#fff"});
                $('#'+IDs[i]).css({ "pointer-events": "none"});

            }
        }
    });




//    Reading Question
//   var question= $('.drag-Question').text();
//   var words= question.match(/\b(\w+)\b/g);
//   console.log(words);


  // Create buttons
    function createButtons(){
        var question= $('.drag-Question').text();
        words= question.match(/\b(\w+)\b/g);
        var input="";
        for (i = 0; i < words.length; i++) {
          var  butn = '<button type="button" id="word-' + i + '" class="btn btn-default">' + words[i] + '</button>';
            input= input+butn;
        }
        $("#butns-area").append(input);
    }

    // function to display comments
 function displayCommentSuccess(){
     $('#comment-section').removeClass('comment-sec');
     $('#comment-section').addClass('comment-success');
     $('#comment-section').text('Success');
     $('#comment-section').css({"opacity":"1"});
 }


    // Dialog box for comments
    // $("#dialog-message").dialog({
    //     autoOpen : false,
    //     resizable : false,
    //     width : 200,
    //     height:200,
    //     modal : true,
    //     buttons: {
    //         "Close" : function(){
    //             $( this ).dialog( "close" );
    //         }
    //     },
    //     open: function(event) {
    //         $('.ui-dialog-content.ui-widget-content').css({'height':'auto'});
    //         $('.ui-dialog-buttonpane').css({'padding':'0'});
    //         $('.ui-dialog-buttonpane .ui-dialog-buttonset').css({'float':'unset'});
    //         $('.ui-dialog-buttonpane').find('button:contains("Close")').addClass('closeButton');
    //     },
    //     close : function(ev, ui) {
    //         $('#section-drop').css({'filter': 'blur(0px)'});
    //         return true;
    //     }
    // });




})// execute on document load