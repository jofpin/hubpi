/*! hubpi v1.0.2 | (c) Copyright 2014 - Jose Pino, @jofpin | MIT | Date: 27/04/2014 | https://github.com/jofpin/hubpi */
$(function() {
  
  "use-strict";

  /* data hubpers with url of json posts */

  var app = {
    href: window.location.href,
    loader: "<div data-loader=\"content\"></div>",
    hubpi: $.hubpi,
    attrPost: $("[data-hp-post]")
  }

  // simplification > console.log
  var log = function(value) {
    console.log(value);
  }

   /* if (typeof app.hubpi === "undefined") { 
      app.hubpi = {};
    } */
  
    app.hubpi = {};


      app.hubpi.get = {

      pull: function() {
        if (app.attrPost) {
          this.getAJAX("hp-post");
        } 
        else {
          log("information:" + " " + "There is no data :(");
        }
      },

      getAJAX: function(suffix) { 
        /* data get json and ajax not cache :) */
        var self = this;
        $.ajaxSetup({
          cache: false
        });

      // loader of data content (JSON is revealed)
      app.attrPost.html(app.loader);
      
      $.getJSON(app.attrPost.data(suffix),function(data) {
        
        var hp = self.relationship(); 
        
        $.each(data,function(_,_item) {  
          hp += self.templatePost(_item);
        });

        app.attrPost.html(hp);
        
      }).error(function(j,t,e) { 
      // error load dataJSON :´(
        app.attrPost.html('<div data-error="' + "json" + '">' + "Error" + " " + e + '</div>');
        log("Error:" + " " + e);
      });
    },
    
    // your div here here :)
    relationship: function() {
      html = ('');
      return html;
    },

    templatePost: function(data) { 
      var tmpl = {
        id: data.id,
        title: data.title,
        content: data.content,
        date: data.date
      }

      /* template post preview */
      html = '<div class="post-view">' + 
             '<header class="header" box-color="blue only">' + 
             '<h1 class="title--post">' + tmpl["title"] + '</h1>' + 
             '</header>' +
             '<div class="preview--post">' +
             '<div box-color="red only" data-post-id="' + tmpl["id"] + '"></div>' +
             '<h2 class="author-info--post">' +
             '<img class="mini-avatar" src="' + $avatar + '" alt="' + $username + '"> By <a href="https://twitter.com/' + $twitter + '">' + $username + '</a> in wrote on <time data-post-date="' + tmpl["date"] + '"></time>' + 
             '</h2>'
             + 
             tmpl.content 
             + 
             '<a href="https://www.facebook.com/sharer/sharer.php?u=' + app.href + '" box-color="facebook" hp-button="share-fb"><span class="fa fa-facebook"></span></a>' +
             '<a href="https://twitter.com/intent/tweet?url=' + app.href + '" box-color="twitter" hp-button="share-tw"><span class="fa fa-twitter"></span></a>' +
             '</div>';

             // preview data in console 
             log('Title post : ' + tmpl["title"] + ' | Date :' + tmpl["date"]);
      return html;
    }
  };


  var reflectPost = function() {
      app.hubpi.get.pull();
    }; 


  var deploy = function() {
    reflectPost();
  };

// run functions
deploy();

});
