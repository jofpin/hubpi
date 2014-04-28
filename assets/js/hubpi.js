/**
 *
 * hubpi.js
 *
 * Its awesome and sexy written text to hubpear
 * version: 1.0
 *
 * Find the project on GitHub: 
 * https://github.com/mrjopino/hubpi
 *
  * ============================
  * Copyright, 2014 by Jose Pino
  * https://twitter.com/mrjopino
  * ============================
 *
 */
$(document).ready(function() {

  /* data hubpers with url of json */
    $data_hp            = $('[data-hp]');
    $data_url_json_hp   = $data_hp.data('hp');
    $hp_scroll          = $('[data-hp-scroll]');
    hp_update           = $('#updatehp');
    hp_txt_error        = "Error ";
    hp_class_error      = "hp_error_json";
    hp_class_content    = "hp_hubper_content";
    hp_class_title      = "hp_title";
    hp_class_id         = "hp_id";
    hp_class_date       = "hp_date";
    hp_class_loader_a   = "hp_loader";
    hp_class_loader_b   = "hp_loading";
    _hp_img             = "img";
    _animation_scroll_a = "slow";
    _animation_scroll_b = "swing";
    _awepush            = "header, .hp_btn_update";
    s_ap                = '0.4s'; 
    tag_style           = 'style';
    tag_body_fix        = 'html,body';
    animation_value_css = 'awepush_intro .6s ease both'
    kf_awepush          = '<' + tag_style + '>' + '@-webkit-keyframes awepush_intro { 0% { top: -20em; opacity: 0; } 100% { top: 0; opacity: 1; } } @-moz-keyframes awepush_intro { 0% { top: -20em; opacity: 0; } 100% { top: 0; opacity: 1; } } @-ms-keyframes awepush_intro { 0% { top: -20em; opacity: 0; } 100% { top: 0; opacity: 1; } } @-o-keyframes awepush_intro { 0% { top: -20em; opacity: 0; } 100% { top: 0; opacity: 1; } } @keyframes awepush_intro { 0% { top: -20em; opacity: 0; } 100% { top: 0; opacity: 1; } }' + '</' + tag_style + '>'

    $(kf_awepush).appendTo(_awepush);
/* Intro animation sexy */    
    $(_awepush).css({
      "-webkit-animation": animation_value_css,
      "-moz-animation": animation_value_css,
      "-ms-animation": animation_value_css,
      "-o-animation": animation_value_css,
      "animation": animation_value_css,
      "-webkit-animation-delay": s_ap,
      "-moz-animation-delay": s_ap,
      "-ms-animation-delay": s_ap,
      "-o-animation-delay": s_ap,
      "animation-delay": s_ap
  });

    if (typeof $.hubpi === "undefined") { /* data without reason hubpi */
      $.hubpi = {};
    }
  
      $.hubpi.get = {
      no_data_hp: function() {
        if ($data_hp) {
          this.get_json_hp();
        } 
        else {
          $data_hp.html("There is no data :(");
        }
      },
      get_json_hp: function() { /* data get json and ajax not cache :) */
        var auto = this;
        $.ajaxSetup({
          cache: false
        });

      // loader of data hubpers
      $data_hp.html(
                  '<span class="'+ hp_class_loader_a +'">' +
                  '<span class="'+ hp_class_loader_b +'">' +
                  '</span>' +
                  '</span>'
                  );
      
      $.getJSON($data_url_json_hp,function(data) {
        
        var hp = auto.content_hubpers(); 
        
        $.each(data,function(_,_item) {  
          hp += auto.c_hubpers_inner(_item);
        });

        $data_hp.html(hp);
        
      }).error(function(j,t,e) { // error
        $data_hp.html('<span class="'+ hp_class_error +'">' + hp_txt_error + e + '</span>');
      });
    },
    
    // your div here here :)
    content_hubpers: function() {
      html = ('');
      return html;
    },
    c_hubpers_inner: function(data) {
      html = '<div class="'+ hp_class_content +'">' + 
             '<li id="' + data.id + '">' +
             '<a href="' + data.link + '">' +
             '<h2 class="' + hp_class_title + '" title="' + data.title + '">' + data.title +
             '<span class="' + hp_class_id + '" data-hubper-id="' + '#' + data.id + '"></span>' + 
             '</h2>' +
             '<span class="' + hp_class_date + '">' + data.date + '</span>' +
             '</a>' +
             '</li>' +
             '</div>';
             console.log('ID hubper : ' + data.id + ' | Title post :' + data.title + ' | Date :' + data.date)
      return html;
    }
  };
  
  $("#twitter").append('<a href="https://twitter.com/' + $twitter + '" class="entypo-twitter tw-footer" title="' + $twitter + '"></a>');
  $(_hp_img).css("max-width","100%");

/* sexy scroll hp :)*/
 $.fn.hp_scroll = function () {
   $(this).click(function (hp_scroll_click_run) {
         _href = "href";
         _tag_body = tag_body_fix;
     var hp_scroll_href = $(this).attr(_href),hp__target_s;

     if (hp_scroll_href.charAt(0) == "#" && hp_scroll_href.length > 1 && (hp__target_s = $(hp_scroll_href)).length > 0) {
       var _scroll = Math.max(hp__target_s.offset().top, 0);
       hp_scroll_click_run.preventDefault();
       $(_tag_body).animate({
         scrollTop: _scroll
       }, _animation_scroll_a, _animation_scroll_b);
     }
   });
 };
  $($hp_scroll).hp_scroll();

    // update data hubpers
    $(hp_update).click(function() {
      $.hubpi.get.no_data_hp();
      return false;
    });
    $(document).ready(function() {
      $.hubpi.get.no_data_hp();
    });

/* config of user */
$("#username").append($username);
$("#description").append($description);
$("#avatar").append("<img src=" + $avatar + " alt='" + $username + "'/>");
console.log('Username : ' + $username + ' | Description :' + $description + ' | Twitter : ' + '@' +$twitter );
hp_background_img = "linear-gradient(to bottom right, rgba(30, 1, 5, 0.30), rgba(41, 36, 132, 0.85)),url('" + $background_image + "') center center fixed"
hp_background_color = $background_color

$('#hubpi').css({
  "background": hp_background_img,
  "background-color": hp_background_color,
  "-webkit-background-size": "cover",
  "-moz-background-size": "cover",
  "-ms-background-size": "cover",
  "-o-background-size": "cover",
  "background-size": "cover",
  "background-position": "center center",
  "background-attachment": "fixed"
 });

});

(function ($) {
    focusfix = function (focusfix_img) {
      tag_body_fix = 'html,body';

        var _previewIMG = 'pfocus',
            $window = $(window),
            $hp_focusfix_body = $(tag_body_fix),
            $_focusfix_bg = $(document.createElement('div')).addClass('focusfix').hide();

        focusfix_img = focusfix_img || '#focus';

        var $t_img = $(focusfix_img);
        $t_img.filter(':first').before($_focusfix_bg);

        $t_img.each(function () {
            var $this = $(this);
            $this.addClass('focusfix_size');
            $this.click(function () {
                var $this = $(this);
                $_focusfix_bg.toggle();
                $this.toggleClass(_previewIMG);
                $hp_focusfix_body.toggleClass('puff');
            });

            // off pal click :'(
            $hp_focusfix_body.click(function (event) {
                if (!$(event.target).closest('.pfocus').length) {
                    $('.pfocus').removeClass('pfocus');
                    $('.focusfix').hide('focusfix');
                    $(tag_body_fix).removeClass('puff');
                }
            });
        });
    };

    window.focusfix = focusfix;
})(jQuery);

focusfix();
