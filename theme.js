/*
 * jQuery v1.9.1 included
 */

$(document).ready(function() {
  //community page design customizations
  if ($('.community-heading').html() == "Community"){
     $('.community-heading').css("color", "#ffffff");
      /*$('body').css("background-color", "#f4f6f6");
      $('body').css("-webkit-box-shadow", "-900px 0 #f4f6f6, 900px 0 #f4f6f6");*/
      $('.sub-nav').removeClass('sub-nav').addClass('search-box');
      $('.community-heading').html('Search discussions for');
      $('.community-heading').css("font-family", "Proxima Nova, sans-serif");
      $('.community-heading').css("font-weight", "lighter");
      $('.community-heading').css("color", "#ffffff");
      $("#query").attr("placeholder", "New ideas for the site");
      $('body').css("-webkit-box-shadow", "-900px 0 #f4f6f6, 900px 0 #f4f6f6");
      $(".topic-title a").css('color','black');
      $(".question-title a").css('color','black');
      $(".question-author a").css('color','#C5C5C5');
      $(".community-sub-nav").prepend("<h2>Discussion Topics</h2>");
  }
  
  // toggle categories and sections on the home page
  $(".category-tree").on("click", "h2 a, h3 a", function() {
    $(this).parent().nextAll().toggle();
    return false;
  });

  // social share popups
  $(".share a").click(function(e) {
    e.preventDefault();
    window.open(this.href, "", "height = 500, width = 500");
  });

  // toggle the share dropdown in communities
  $(".share-label").on("click", function(e) {
    e.stopPropagation();
    var isSelected = this.getAttribute("aria-selected") == "true";
    this.setAttribute("aria-selected", !isSelected);
    $(".share-label").not(this).attr("aria-selected", "false");
  });

  $(document).on("click", function() {
    $(".share-label").attr("aria-selected", "false");
  });

  // show form controls when the textarea receives focus
  $(".answer-body textarea").one("focus", function() {
    $(".answer-form-controls").show();
  });

  $(".comment-container textarea").one("focus", function() {
    $(".comment-form-controls").show();
  });

  // copy ?userId=... from URL to hidden form field
  var userIdRegex = /(?:^\?|&)userId=([^&]+)/;
  var $userIdInput = $("#request_custom_fields_22555874");
  var match = userIdRegex.exec(window.location.search);
  if ($userIdInput.length && match) {
    $userIdInput.val(decodeURIComponent(match[1]));
  }

  // nav bar text
  $(".header .submit-a-request").text("Report a problem");
  $(".header .login").text("Log in");

  // search box placeholder text
  $("#query").attr("placeholder", "creating an account, understanding mastery challenges");
  
  // add tags to h1 based on breadcrumbs, using paths that look like categories
  var categoryIdRegex = /^\/hc\/en-us\/categories\/(\d+)/;
  var match = categoryIdRegex.exec(window.location.pathname);
  $(".breadcrumbs a").each(function() {
    if (match) {
      return false;
    }
    match = categoryIdRegex.exec(this.pathname);
  });
  if (match) {
    $("h1").addClass("category-" + match[1]);
  }
  
});

setTimeout(function(){var a=document.createElement("script");
var b=document.getElementsByTagName("script")[0];
a.src=document.location.protocol+"//dnn506yrbagrg.cloudfront.net/pages/scripts/0011/5719.js?"+Math.floor(new Date().getTime()/3600000);
a.async=true;a.type="text/javascript";b.parentNode.insertBefore(a,b)}, 1);
