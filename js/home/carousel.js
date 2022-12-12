
    $num = $('.my-card').length;
    $even = $num / 2;
    $odd = ($num + 1) / 2;

    $('.my-card:nth-child(' + 1 + ')').addClass('activa');
    $('.my-card:nth-child(' + 1 + ')').next().addClass('next');

    $('#serviceStylePrev').click(function() {
      console.log("Prev clicked");
      $('.activa').prev().trigger('click');
    });

    $('#serviceStyleNext').click(function() {
      console.log("Next clicked");
      $('.activa').next().trigger('click');
    });
    
    $('.designcard').click(function(event) {
      console.log("Card clicked");

      console.log("event : " + event.target.id);

      console.log("Position : "  +  this.id);
      $slide = $('.activa').width();
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $slide =  $slide * 1.2;
      }else{
        $slide =  $slide * .8;
      }

      $id = $('.activa').attr("id");
      console.log("activa id : " + $id);

      switch(this.id){
        case "card1": {
          console.log("passive id : card1");
          switch($id){
            case "card2": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card3": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card4": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card5": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card6": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card7": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card8": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card9": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card10": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card1": 
            default :{

            }
          }
          break;
        }
        case "card2": {
          console.log("passive id : card2");
          switch($id){
            case "card2": {

              break;
            }
            case "card3": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card4": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card5": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card6": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card7": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card8": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card9": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card10": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card1": 
            default :{
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
            }
          }
          break;
        }
        case "card3": {
          console.log("passive id : card3");
          switch($id){
            case "card2": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card3": {

              break;
            }
            case "card4": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card5": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card6": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card7": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card8": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card9": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card10": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card1": 
            default :{
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
            }
          }
          break;
        }
        case "card4": {
          console.log("passive id : card4");
          switch($id){
            case "card2": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card3": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card4": {

              break;
            }
            case "card5": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card6": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card7": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card8": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card9": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card10": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card1": 
            default :{
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
            }
          }
          break;
        }
        case "card5": {
          console.log("passive id : card5");
          switch($id){
            case "card2": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card3": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card4": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card5": {

              break;
            }
            case "card6": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card7": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card8": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card9": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card10": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card1": 
            default :{
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
            }
          }
          break;
        }
        case "card6": {
          console.log("passive id : card6");
          switch($id){
            case "card2": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card3": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card4": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card5": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card6": {

              break;
            }
            case "card7": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card8": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card9": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card10": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card1": 
            default :{
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
            }
          }
          break;
        }
        case "card7": {
          console.log("passive id : card7");
          switch($id){
            case "card2": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card3": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card4": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card5": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card6": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card7": {

              break;
            }
            case "card8": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card9": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card10": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card1": 
            default :{
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
            }
          }
          break;
        }
        case "card8": {
          console.log("passive id : card8");
          switch($id){
            case "card2": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card3": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card4": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card5": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card6": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card7": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card8": {

              break;
            }
            case "card9": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card10": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card1": 
            default :{
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
            }
          }
          break;
        }
        case "card9": {
          console.log("passive id : card9");
          switch($id){
            case "card2": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card3": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card4": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card5": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card6": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card7": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card8": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card9": {

              break;
            }
            case "card10": {
              $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
              break;
            }
            case "card1": 
            default :{
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
            }
          }
          break;
        }
        case "card10": {
          console.log("passive id : card10");
          switch($id){
            case "card2": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card3": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card4": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card5": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card6": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card7": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card8": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card9": {
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
              break;
            }
            case "card10": {

              break;
            }
            case "card1": 
            default :{
              $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
            }
          }
          break;
        }
      }
  
      $(this).removeClass('prev next');
      $(this).siblings().removeClass('prev activa next');
    
      $(this).addClass('activa');
      $(this).prev().addClass('prev');
      $(this).next().addClass('next');
      updateServiceType($(this).attr("id"));

    });

    function updateServiceType(id) {
      switch(id){
        case "card1" : 
        case "card2" : 
        case "card8" : 
        case "card9" :
        case "card3" : { 
          $('#pServiceType').text('Utilities');
          break;
        }
        case "card4" : 
        case "card5" : 
        case "card6" : { 
          $('#pServiceType').text('Buildings');
          break;
        }
        case "card7" : 
        case "card10" : {
          $('#pServiceType').text('IPPs, Utilities');
          break;
        }
      }
    }

    // Keyboard nav
    $('html body').keydown(function(e) {
      if (e.keyCode == 37) { // left
        $('.activa').prev().trigger('click');
      }
      else if (e.keyCode == 39) { // right
        $('.activa').next().trigger('click');
      }
    });