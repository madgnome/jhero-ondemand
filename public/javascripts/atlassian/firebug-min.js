AJS.warnAboutFirebug=function(B){if(!AJS.Cookie.read("COOKIE_FB_WARNING")&&window.console&&window.console.firebug){if(!B){B="Firebug is known to cause performance problems with Atlassian products. Try disabling it, if you notice any issues."}var A=AJS.$("<div id='firebug-warning'><p>"+B+"</p><a class='close'>Close</a></div>");AJS.$(".close",A).click(function(){A.slideUp("fast");AJS.Cookie.save("COOKIE_FB_WARNING","true")});A.prependTo(AJS.$("body"))}};