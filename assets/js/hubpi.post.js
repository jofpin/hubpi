/*! hubpi v1.0.1 |name: hubpi.post.js| (c) Copyright 2014 - Jose Pino, @jofpin | MIT | Date: 27/04/2014 | https://github.com/jofpin/hubpi */
$(function(){"use-strict";var e=$("[data-hp-post]");if(typeof $.hubpi==="undefined"){$.hubpi={}}$.hubpi.get={noDATA:function(){if(e){this.ajaxHP()}else{e.html("There is no data :(")}},ajaxHP:function(){var t=this;$.ajaxSetup({cache:false});e.html('<span class="'+"hp_loader"+'">'+'<span class="'+"hp_loading"+'">'+"</span>"+"</span>");$.getJSON(e.data("hp-post"),function(n){var r=t.content_hubpers();$.each(n,function(e,n){r+=t.templatePOST(n)});e.html(r)}).error(function(t,n,r){e.html('<span class="'+"error-post-json"+'">'+"Error "+r+"</span>");console.log("Error : "+r)})},content_hubpers:function(){html="";return html},templatePOST:function(e){var t=e.content;var n=e.title;var r=e.date;html='<header class="'+"header-post"+'">'+'<h1 class="'+"title-post"+'" title="'+n+'">'+n+"</h1>"+"</header>"+'<section class="'+"post-content box"+'">'+'<div class="'+"date-post"+'"> '+r+"</div>"+"<article>"+t+"</article>"+"</section>";console.log("Title post : "+n+" | Date :"+r);return html}};$(document).ready(function(){$.hubpi.get.noDATA()})})();