/**
 * hubpi.post.js > for posts
 * Its awesome and sexy written text to hubpear
 * @author Jose Pino http://mrjopino.com, @mrjopino
 * Copyright, 2014
 */
$(document).ready(function() {

  /* data hubpers with url of json posts */
    $data_hp_post       = $('[data-hp-post]');
    $data_url_json_hp   = $data_hp_post.data('hp-post');
    hp_txt_error        = "Error ";
    hp_class_error      = "hp_error_json";
    hp_header_post      = "hp_post_header";
    hp_post_date        = "hp_post_date";
    hp_content_box      = "hp_post_content box";
    hp_class_loader_a   = "hp_loader";
    hp_class_loader_b   = "hp_loading";

    if (typeof $.hubpi === "undefined") { /* data without reason hubpi */
      $.hubpi = {};
    }
  
      $.hubpi.get = {
      no_data_hp: function() {
        if ($data_hp_post) {
          this.get_json_hp();
        } 
        else {
          $data_hp_post.html("There is no data :(");
        }
      },
      get_json_hp: function() { /* data get json and ajax not cache :) */
        var auto = this;
        $.ajaxSetup({
          cache: false
        });

      // loader of data hubpers
      $data_hp_post.html(
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

        $data_hp_post.html(hp);
        
      }).error(function(j,t,e) { // error
        $data_hp_post.html('<span class="'+ hp_class_error +'">' + hp_txt_error + e + '</span>');
        console.log('Error : ' + e)
      });
    },
    
    // your div here here :)
    content_hubpers: function() {
      html = ('');
      return html;
    },
    c_hubpers_inner: function(data) { 
      html = '<header class="' + hp_header_post + '">' + 
             '<h1 title="' + data.title + '">' + data.title + '</h1>' +
             '</header>' +
             '<section class="' + hp_content_box + '">' +
             '<div class="' + hp_post_date + '">' + data.date + '</div>' + 
             '<article>' + data.content +
             '</article>' +
             '</section>';
             console.log('Title post : ' + data.title + ' | Date :' + data.date + ' | Date :' + data.date + ' | Content : ' + data.content)
      return html;
    }
  };

    $(document).ready(function() {
      $.hubpi.get.no_data_hp();
    });

    $("#twitter").append('<a href="https://twitter.com/' + $twitter + '" class="entypo-twitter tw-footer" title="' + $twitter + '"></a>');

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
