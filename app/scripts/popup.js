'use strict';

$(document).ready(function(){ 
		$.getJSON ("http://api.twitch.tv/api/team/solomid/live_channels.json", function(json) {
			var twitchData = json.channels;
				console.log(twitchData);
			var html = '<ul class="theStreams">\n';

			for (var i = 0; i < twitchData.length; i++) {
				var obj = twitchData[i];
					console.log(obj);
				var streamer = obj.channel.display_name;
					console.log(streamer);
				var streamLink = obj.channel.link;
					console.log(streamLink);
				var game = obj.channel.meta_game;
					console.log(game);
				var streamTitle = obj.channel.title;
					console.log(streamTitle);
				var thumbnail = obj.channel.image.size600;
					
				html += '<li class="clearfix">\n';
				html += '<img src="' + thumbnail + '" class="thumbimg">\n';
       			html += '<div class="linkdetails"><h1>' + streamer + '</h1>\n';
        		html += '<h2>' + streamTitle + '</h2>\n'
        		html += '<h3>' + game + '</h3>\n'
        		html += '<a href="' + streamLink + '" class="blubtn" target="_blank">Watch on Twitch!</a>';
        		html += '</div></li>\n';
			}

			htmlOutput(html);
		});


		function htmlOutput(html) {
    		html += '</ul>';
    
   			 $('body').html(html);
  		}


});