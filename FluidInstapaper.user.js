// ==UserScript==
// @name        Fluid Atlassian Jira
// @namespace   http://fluidapp.com
// @description Jira and Fluid integration.
// @include     *
// @author      Gergo Sulymosi <gergo.sulymosi@gmail.com>
// ==/UserScript==

(function(){
	if (window.fluid){

		// Provides a simple API to get Wave information
		FluidInstapaper = {

			getBookmarkCount: function(){
				return document.getElementById("bookmark_list").childElementCount
			}
		};

		// Badge updating
		setInterval(function(){
			window.fluid.dockBadge = FluidInstapaper.getBookmarkCount() || null;
		}, 1000);

	}
})();