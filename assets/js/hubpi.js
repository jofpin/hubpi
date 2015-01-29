/*!
 *
 * hubpi.js
 * ========
 * Its awesome and sexy written text to hubpear
 * version: 1.0.2
 * Date: 27/04/2014
 * last update: 17/12/2014 
 *
 * Find the project on GitHub: 
 * https://github.com/jofpin/hubpi
 *
* ============================
* Copyright, MIT - 2014
* @author Jose Pino, @jofpin
* ============================
 *
 */
$(function() {

  "use-strict";
  /* hubpi plays to be boyfriend of json :) */

/* core */
  var app = {
    cms: "Hubpi",
    url: "http://hubpi.co",
    version: "1.0.2",
    id: {
      update: update,
      username: username,
      description: description,
      avatar: avatar,
      twitter: twitter,
      instagram: instagram,
      github: github,
      codepen: codepen
    },
    position: {
      top: "top",
      bottom: "bottom",
      center: "center",
      left: "left",
      right: "right"
    },
    prefix: {
      wk: "-webkit-",
      moz: "-moz-",
      ms: "-ms-",
      o: "-o-"
    },
    self: this,
    background: $(".top-box"),
    bg: "background",
    loader: "<div data-loader=\"content\"></div>",
    effect: $("header"),
    anim: "animation",
    valueDelay: "0.2s",
    valueNormal: "intro .4s ease both",
    tagStyle: "style",
    hubpi: $.hubpi,
    attr: $("[data-hp]"),
    log: function(value) {
      // simplification > console.log
      console.log(value);
    },
    deploy: function() {
      // run credits
      app.self.credits("Jose Pino", "@jofpin", "http://jofpin.github.io");
      // effect
      app.self.effect();
      // run all posts
      app.self.reflectPosts();
      // update posts
      app.self.updatePosts();
      // config
      app.self.config($username, $description, $avatar, $twitter, $instagram, $github, $codepen);
    }
  };

  // animation header intro > hubpi :p
  app.self.effect = function() {
    var keyframes  = '<' + app.tagStyle + '>' + 
  '@-webkit-keyframes intro { 0% { top: -20em; opacity: 0; } 100% { top: 0; opacity: 1; } } @-moz-keyframes intro { 0% { top: -20em; opacity: 0; } 100% { top: 0; opacity: 1; } } @-ms-keyframes intro { 0% { top: -20em; opacity: 0; } 100% { top: 0; opacity: 1; } } @-o-keyframes intro { 0% { top: -20em; opacity: 0; } 100% { top: 0; opacity: 1; } } @keyframes intro { 0% { top: -20em; opacity: 0; } 100% { top: 0; opacity: 1; } }' + 
  '</' + app.tagStyle + '>';

    /* Intro CSS animation sexy */    
    app.effect.css(app.prefix.wk + app.anim, app.valueNormal);
    app.effect.css(app.prefix.moz + app.anim, app.valueNormal);
    app.effect.css(app.prefix.ms + app.anim, app.valueNormal);
    app.effect.css(app.prefix.o + app.anim, app.valueNormal);
    app.effect.css(app.prefix.wk + app.anim + "-" + "delay", app.valueDelay);
    app.effect.css(app.prefix.moz + app.anim + "-" + "delay", app.valueNormal);
    app.effect.css(app.prefix.ms + app.anim + "-" + "delay", app.valueDelay);
    app.effect.css(app.prefix.o + app.anim + "-" + "delay", app.valueDelay);
    app.effect.css(app.anim + "-" + "delay", app.valueDelay);
    app.effect.css(app.anim, app.valueNormal);

    // reflect animation
    $(keyframes).appendTo(app.effect);
  };

  // Credits of Hubpi ;-)
  app.self.credits = function(author, twitter, domain) {
    app.log("CREDITS:" + " " + app.cms + " " + app.version);
    app.log("URL: " + app.url);
    app.log("------------------------------");
    app.log("Designed and coded by ( " + author + ", " + twitter + " | " + domain + " )");
    app.log("------------------------------");
  }

    if (typeof app.hubpi === "undefined") { /* data without reason hubpi */
      app.hubpi = {};
      //log(app.hubpi);
    }

  // $.hubpi = {};

    app.hubpi.get = {

      pull: function() {
        if (app.attr) {
          this.getAJAX("hp");
          app.log("\n" + "Posts:");
          app.log("==============================");
        } 
        else {
          //app.attr.html("There is no data :(");
            app.log("information:" + " " + "There is no data :(");
        }
      },

      getAJAX: function(suffix) { 
        /* data get json and ajax not cache :) */
        var self = this;
        // setup
        $.ajaxSetup({
          cache: false,
          headers: {
            "cache-control": "no-cache"
          }
        });

      // loader of data content (JSON is revealed)
      app.attr.html(app.loader);

      $.getJSON(app.attr.data(suffix), function(data) {
        // dataURL ("hp")
        var hp = self.relationship();
        
        $.each(data,function(_,_item) {  
          hp += self.template(_item);
        });

        app.attr.html(hp);
        
      }).error(function(j,t,e) { // error load dataJSON :´(
        app.attr.html('<div data-error="' + "json" + '">' + "Error" + " " + e + '</div>');
        app.log("Error:" + " " + e);
      });
    },
    
    // your div here run :)
    relationship: function() {
      html = ("");
      return html;
    },

    template: function(data) {
      var tmpl = {
        id: data.id,
        title: data.title,
        summary: data.summary,
        link: data.link,
        date: data.date
      };

      // template html with dataJson (preview post)
      html = '<div class="' + "post" + '">' + 
             '<div box-color="' + "red only" + '" data-post-id="' + tmpl["id"] + '"></div>'  +
             '<h2 class="' + "title_post" + '" title="' + tmpl["title"] + '"><a href="' + tmpl["link"] + '">' + tmpl["title"] + '</a></h2>' +
             '<time class="' + "post_date" + '"> ' + tmpl["date"] + '</time>' +
             '<p class="' + "summary_post" + '"> ' + tmpl["summary"] + '</p>' +
             '<a href="' + tmpl["link"] + '" box-color="' + "blue" + '" hp-button="' + "read-more" + '">Read more <span class="' + "fa fa-angle-right" + '"></span></a>' +
             '</div>';

             // preview data post in console
             app.log('ID: ' + tmpl["id"] + ' | Title post : ' + tmpl["title"] + ' | Date : ' + tmpl["date"]);

      return html;
    }
  };
 
    // data preview direct
    app.self.reflectPosts = function() {
      app.hubpi.get.pull();
    }; 

    // update data hubpers 
    app.self.updatePosts = function() {
      $(app.id.update).click(function() {
        return app.hubpi.get.pull();
        return false;
    });
  };

  /* config of user */
  app.self.config = function(username, description, avatar, twitter, instagram, github, codepen) {
    $(app.id.username).append(username);
    $(app.id.description).append(description);
    $(app.id.avatar).append("<img class=\"avatar\" src=" + avatar + " alt='" + username + "'/>");
    $(app.id.twitter).append('<a href="https://twitter.com/' + twitter + '"><span class=\"fa fa-twitter\"></span></a>');
    $(app.id.github).append('<a href="https://github.com/' + github + '"><span class=\"fa fa-github\"></span></a>');
    $(app.id.codepen).append('<a href="http://codepen.io/' + github + '"><span class=\"fa fa-codepen\"></span></a>');
    $(app.id.instagram).append('<a href="http://instagram.com/' + instagram + '"><span class=\"fa fa-instagram\"></span></a>');
      // app.log('User information:- ' + 'Username : ' + username + ' | Description : ' + description + ' | Twitter : ' + '@' + twitter + ' | GitHub : ' + github + ' | CodePen : ' + codepen);
    var bgimg = "linear-gradient(to " + app.position.bottom + " " + app.position.right + ", rgba(41, 36, 132, .4), rgba(52,73,94,.8)) " + app.position.center + " " + app.position.center + "/cover fixed,url('" + $bgImg + "')";
    var bgcolor = $bgColor;

    // Css background > header
     app.background.css(app.bg, bgimg);
     app.background.css(app.bg + "-" + "color", bgcolor);
     app.background.css(app.bg + "-" + "position", app.position.center + " " + app.position.center);
     app.background.css(app.prefix.wk + app.bg + "-" + "size", "cover");
     app.background.css(app.prefix.moz + app.bg + "-" + "size", "cover");
     app.background.css(app.prefix.ms + app.bg + "-" + "size", "cover");
     app.background.css(app.prefix.o + app.bg + "-" + "size", "cover");
     app.background.css(app.bg + "-" + "size", "cover");
     app.background.css(app.bg + "-" + "attachment", "fixed");
  };

  // run functions (hubpi)
  app.deploy();

});
