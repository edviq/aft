// $(document).ready(function(){

// });

(function(){
  console.log("photos have loaded");

  //GET AND SAVE THE IMAGE CLASS FROM INDEX.HTML
  var img = $('.img-class');

  $(img).click(function(){
    //what is the image I'm clicking on?
    console.log($(this));

    var thisImg = $(this);
    var buttonClick;
    //does this image have its own class or id?
    if($(thisImg).hasClass('kale')){

    }

  })

  //FIGURE OUT THE HEIGHT OF THE VIEWPORT ON THE PHOTOS PAGE


  //FIND THE SECTION THAT HAS THE IMAGE I WANT BASED ON THE IMAGE CLICKED FROM INDEX
  
  //SCROLL TO IMAGE

  //IF I CLICK BACK TO THE INDEX PAGE (OR TO ANOTHER PAGE) THEN RESET THE CLICKED IMAGE


})();