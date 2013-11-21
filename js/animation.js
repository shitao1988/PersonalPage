        $(document).ready(function(){
          $(".main-title").fadeIn(1000, function(){
            $("#grid").fadeIn(1000);
          });
          $("a.first").click(function(){
            $("#grid").fadeOut(400,function(){
              $("#content").slideDown(1000);
              $(".ribbon").fadeIn(1200);
              
            });
            $(".main-title").animate({'padding-top': '20px','margin-bottom':'30px', 'width': '80%'},900);
            $(".content-title").animate({width: '100%'});
            $(".content-subtitle").animate({width: '100%'});
          });
          $("a.second").click(function(){
            $("#grid").fadeOut(400,function(){
              $("#project").slideDown(1000);
              
            });
            $(".main-title").animate({'padding-top': '20px','margin-bottom':'30px', 'width': '80%'},900);
            $(".content-title").animate({width: '100%'});
            $(".content-subtitle").animate({width: '100%'});
           
          });
          $("a.third").click(function(){
            $("#grid").fadeOut(400,function(){
              $("#about").slideDown(1000);
              $(".ribbon").fadeIn(1200);
              
            });
            $(".main-title").animate({'padding-top': '20px','margin-bottom':'30px', 'width': '80%'},900);
            $(".content-title").animate({width: '100%'});
            $(".content-subtitle").animate({width: '100%'});
          });

         
});