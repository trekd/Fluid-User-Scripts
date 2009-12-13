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
		FluidJira = {

			getOpenIssueCount: function(num){
				num = num || 0;
				var match = document.getElementsByTagName("small")[num].firstChild.data.match(/\(Displaying ([0-9]+) of ([0-9]+)\)/)[2];
				return match ? match[0] : 0;
			},
			
			getIssuesAssignedCount: function(){
				return this.getOpenIssueCount(1);
			},
			
			getBadgeText: function(){
				return this.getOpenIssueCount() + "/" + this.getIssuesAssignedCount();
			}

		};

		// Badge updating
		setInterval(function(){
			window.fluid.dockBadge = FluidJira.getBadgeText() || null;
		}, 1000);

	}
})();