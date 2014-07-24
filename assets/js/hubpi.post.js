/*! hubpi v1.0.1 | (c) Copyright 2014 - Jose Pino, @jofpin | MIT | Date: 27/04/2014 | https://github.com/jofpin/hubpi */
$(function() {
  
  "use-strict";

  /* data hubpers with url of json posts */

  var attrData  = $('[data-hp-post]');

    if (typeof $.hubpi === "undefined") { 
      $.hubpi = {};
    } 
  
    // $.hubpi = {};

      $.hubpi.get = {
      noDATA: function() {
        if (attrData) {
          this.ajaxHP();
        } 
        else {
          attrData.html("There is no data :(");
        }
      },

      ajaxHP: function() { /* data get json and ajax not cache :) */
        var self = this;
        $.ajaxSetup({
          cache: false
        });

      // loader of data content
      attrData.html(
                  '<span class="' + "hp_loader" +'">' +
                  '<span class="' + "hp_loading" +'">' +
                  '</span>' +
                  '</span>'
                  );
      
      $.getJSON(attrData.data('hp-post'),function(data) {
        
        var hp = self.content_hubpers(); 
        
        $.each(data,function(_,_item) {  
          hp += self.templatePOST(_item);
        });

        attrData.html(hp);
        
      }).error(function(j,t,e) { // error load dataJSON :´(
        attrData.html('<span class="' + "error-post-json" + '">' + "Error " + e + '</span>');
        console.log('Error : ' + e);
      });
    },
    
    // your div here here :)
    content_hubpers: function() {
      html = ('');
      return html;
    },

    templatePOST: function(data) { 
      var content = data.content;
      var title = data.title;
      var date = data.date;

      html = '<header class="' + "header-post" + '">' + 
             '<h1 class="' + "title-post" + '" title="' + title + '">' + title + '</h1>' +
             '</header>' +
             '<section class="' + "post-content box" + '">' +
             '<div class="' + "date-post" + '"> ' + date + '</div>' + 
             '<article>' + content +
             '</article>' +
             '</section>';
             console.log('Title post : ' + title + ' | Date :' + date);
      return html;
    }
  };

    $(document).ready(function() {
      $.hubpi.get.noDATA();
    });

});
