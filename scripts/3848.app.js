$(".js-about").hide(),$(".js-blog").hide(),$(".js-contact").hide(),$(".js-tour").hide(),$(".js-hero").click(function(){$(".js-header").css("display","block"),$(".js-header").hide(),$(".js-content-primary").css("display","block"),$(".js-hero").hide(),$(".js-header").fadeIn(2e3),$(".js-about").show(1e3)}),$(".js-link-about").click(function(){$(".js-about").show(1e3),$(".js-blog").hide(1e3),$(".js-contact").hide(1e3),$(".js-tour").hide(1e3),$(".js-li-about").addClass("active"),$(".js-li-contact").removeClass("active"),$(".js-li-tour").removeClass("active")}),$(".js-link-blog").click(function(){$(".js-about").hide(1e3),$(".js-blog").show(1e3),$(".js-contact").hide(1e3),$(".js-tour").hide(1e3)}),$(".js-link-contact").click(function(){$(".js-about").hide(1e3),$(".js-blog").hide(1e3),$(".js-contact").show(1e3),$(".js-tour").hide(1e3),$(".js-li-about").removeClass("active"),$(".js-li-contact").addClass("active"),$(".js-li-tour").removeClass("active")}),$(".js-link-tour").click(function(){$(".js-about").hide(1e3),$(".js-blog").hide(1e3),$(".js-contact").hide(1e3),$(".js-tour").show(1e3),$(".js-li-about").removeClass("active"),$(".js-li-contact").removeClass("active"),$(".js-li-tour").addClass("active")});