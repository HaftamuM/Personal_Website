$(function() {
	setupNavbar();
	setupContactFormSubmission();
	renderThumbnails();	
});

function setupNavbar() {
	$("#nav li").click(function() {
		var target = $(this).data("target");
		$("html, body").animate({
			scrollTop: $(target).offset().top }, 500);
	});
}

function setupContactFormSubmission() {
	$("#contactForm input[type=submit]").click(function(e) {
		e.preventDefault();
		alert("Not ready yet!");
	});
}


function createThumbnail(thumbnail) {
	var html = $("#templates .thumbnail-wrapper").clone();
	html.find(".thumbnail-title span").text(thumbnail.title);
	html.find(".thumbnail-image img").attr("src", thumbnail.artworkURL);
	html.find(".thumbnail-caption a").attr("href", thumbnail.authorURL).text(thumbnail.author);

	return html;
}
// Add new js file - 
$(document).ready(function() {
	// executes when HTML-Document is loaded and DOM is ready
   console.log("document is ready");
	 
   
	 $( ".card" ).hover(
	 function() {
	   $(this).addClass('shadow-lg').css('cursor', 'pointer'); 
	 }, function() {
	   $(this).removeClass('shadow-lg');
	 }
   );
	 
   // document ready  
   });
   // Baro 
   


   // Add 
   $(document).ready(function(){
	$(".humberger-icon").click(function(){
	  $(this).toggleClass("cross");
	  $('.menubar').slideToggle();
	});
  });


  // Add to a new card 
  