(function(){var B,E,C=/#.*/,D="active-tab",A="active-pane";AJS.tabs={setup:function(){B=AJS.$("div.aui-tabs:not(.aui-tabs-disabled)");for(var F=0,G=B.length;F<G;F++){E=AJS.$("ul.tabs-menu",B[F]);AJS.$("a",E).click(function(H){AJS.tabs.change(AJS.$(this),H);H&&H.preventDefault()})}},change:function(G,H){var F=AJS.$(G.attr("href").match(C)[0]);F.addClass(A).siblings().removeClass(A);G.parent("li.menu-item").addClass(D).siblings().removeClass(D);G.trigger("tabSelect",{tab:G,pane:F})}};AJS.$(AJS.tabs.setup)})();