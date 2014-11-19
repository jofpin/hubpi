/*! hubpi v1.0.1 | (c) Copyright 2014 - Jose Pino, @jofpin | MIT | Date: 27/04/2014 | https://github.com/jofpin/hubpi */
$(function() {
  
  "use-strict";

  /* data hubpers with url of json posts */

  var app = {
    hubpi: $.hubpi,
    attrPost: $("[data-hp-post]")
  }

    if (typeof app.hubpi === "undefined") { 
      app.hubpi = {};
    } 
  
    // $.hubpi = {};

      app.hubpi.get = {
      noDATA: function() {
        if (app.attrPost) {
          this.ajaxHP();
        } 
        else {
          app.attrPost.html("There is no data :(");
        }
      },

      ajaxHP: function() { /* data get json and ajax not cache :) */
        var self = this;
        $.ajaxSetup({
          cache: false
        });

      // loader of data content
      app.attrPost.html(
                  '<span class="' + "hp_loader" +'">' +
                  '<span class="' + "hp_loading" +'">' +
                  '</span>' +
                  '</span>'
                  );
      
      $.getJSON(app.attrPost.data('hp-post'),function(data) {
        
        var hp = self.topcontent(); 
        
        $.each(data,function(_,_item) {  
          hp += self.templatePOST(_item);
        });

        app.attrPost.html(hp);
        
      }).error(function(j,t,e) { // error load dataJSON :´(
        app.attrPost.html('<span class="' + "error-post-json" + '">' + "Error " + e + '</span>');
        console.log('Error : ' + e);
      });
    },
    
    // your div here here :)
    topcontent: function() {
      html = ('');
      return html;
    },

    templatePOST: function(data) { 
      var tmpl = {
        title: data.title,
        content: data.content,
        date: data.date
      }
      
      html = '<header class="' + "header-post" + '">' + 
             '<h1 class="' + "title-post" + '" title="' + tmpl.title + '">' + tmpl.title + '</h1>' +
             '</header>' +
             '<section class="' + "post-content box" + '">' +
             '<div class="' + "date-post" + '"> ' + tmpl.date + '</div>' + 
             '<article>' + tmpl.content +
             '</article>' +
             '</section>';
             console.log('Title post : ' + tmpl.title + ' | Date :' + tmpl.date);
      return html;
    }
  };

    $(document).ready(function() {
      app.hubpi.get.noDATA();
    });

});
