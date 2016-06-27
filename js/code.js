 $(document).ready(function(){
 
	$("#videoContainer #jquery_jplayer_1").jPlayer({
		ready: function () {
		 $(this).jPlayer("setMedia", {
			title: "Man's Best Friend",
			m4v:"media/DuckTapecommercial.m4v",
			ogv: "media/DuckTapecommercial.ogv",
			webm:"media/LeahandLindsayDuckTapecommercial.webm",
			poster: "media/DuckTapeCommercial.png"
		 });
		},
		cssSelectorAncestor: "#videoContainer #jp_container_1",
		swfPath: "media",
		supplied: "m4v,ogv,webm",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		remainingDuration: true,
		toggleDuration: true
	});
	
	$("#jplayer_inspector_1").jPlayerInspector({jPlayer:$("#jquery_jplayer_1")});
	
	//audio player
	new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_2",
		cssSelectorAncestor: "#jp_container_2"
	}, [
		{
			title:"Cannons",
			mp3:"media/Cannons.mp3",
		},
		{
			title:"Do The Trick",
			mp3:"media/Do The Trick.mp3",
		},
		{
			title:"Same Days",
			mp3:"media/Same Days.mp3",
		},
		{
			title:"Try a Little Tenderness",
			mp3:"media/Try a Little Tenderness.mp3",
		},
		{
			title:"Ceilings",
			mp3:"media/Ceilings.mp3",
		},
		{
			title:"Home",
			mp3:"media/Home.mp3",
		},
		{
			title:"Everlasting Arms",
			mp3:"media/Everlasting Arms.mp3",
		},
		{
			title:"Hannah Hunt",
			mp3:"media/Hannah Hunt.mp3",
		},
		{
			title:"The Tallest Man _ I Like It (f. Grand Puba)",
			mp3:"media/The Tallest Man _ I Like It (f. Grand Puba).mp3",
		},
		{
			title:"Man On Fire",
			mp3:"media/Man On Fire 031212.mp3",
		},
		{
			title:"I Dont Wanna",
			mp3:"media/I Dont Wanna 031212.mp3",
		},
		{
			title:"Amidinine",
			mp3:"media/Amidinine.mp3",
		},
		{
			title:"You Put the Flame on It (feat. Menahan Street Band)",
			mp3:"media/You Put the Flame on It (feat. Menahan Street Band).mp3",
		}
	], {
		swfPath: "media",
		supplied: "mp3",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true
	});

	$("#jplayer_inspector_1").jPlayerInspector({jPlayer:$("#jquery_jplayer_1")});
	    
});
	
	
    
