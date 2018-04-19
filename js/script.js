$(document).ready(function() {

	$(".image").mouseleave(function() {
		$("#image-1").css("width", "33%");
		$("#image-2").css("width", "33%");
		$("#image-3").css("width", "33%");
		$("#letter-3").css("color", "#137f8f");
		$("#letter-2").css("color", "#137f8f");
		$("#letter-1").css("color", "#137f8f");
	});

	$("#image-1").mouseenter(function() {
		$("#image-1").css("width", "49%");
		$("#image-2").css("width", "25%");
		$("#image-3").css("width", "25%");
		$("#letter-1").css("color", "#19a7bc");
		$("#letter-2").css("color", "#137f8f");
		$("#letter-3").css("color", "#137f8f");
	});

	$("#image-2").mouseenter(function() {
		$("#image-1").css("width", "25%");
		$("#image-2").css("width", "49%");
		$("#image-3").css("width", "25%");
		$("#letter-2").css("color", "#19a7bc");
		$("#letter-1").css("color", "#137f8f");
		$("#letter-3").css("color", "#137f8f");
	});

	$("#image-3").mouseenter(function() {
		$("#image-1").css("width", "25%");
		$("#image-2").css("width", "25%");
		$("#image-3").css("width", "49%");
		$("#letter-3").css("color", "#19a7bc");
		$("#letter-2").css("color", "#137f8f");
		$("#letter-1").css("color", "#137f8f");
	});

	if (document.body.scrollTop == 0) {
		$("header").css("background", "rgba(0,13,26,0.65)");
	} else {
		$("header").css("background", "rgba(0,13,26,0.75)");
	}

	$("#home").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".container").offset().top
	    }, 700);
	});

	$("#about").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#entry1").offset().top - 90
	    }, 700);
	});

	$("#events").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#entry2").offset().top - 90
	    }, 700);
	});

	$("#officers").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#entry3").offset().top - 90
	    }, 700);
	});

	$("#contact").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#entry4").offset().top - 90
	    }, 700);
	});

	$("#election").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#election-entry").offset().top - 90
	    }, 700);
	});

    

	$('.trigger').click(function() {
    	$('.modal-wrapper').toggleClass('open');
    	$('.page-wrapper').toggleClass('blur');
  	});

  	$('.rochelle').click(function() {              
    	document.getElementById("modal-content").innerHTML = "Hello fellow food lovers!" + 
		"I am running to be YOUR Food Science and Tech at Cal President for the " +
		"2016-2017 school year. Currently, I am serving you as your Vice President, and " +
		"I have served you as Secretary since the establishment of the club. Through " +
		"these two positions, I have garnered a lot of experience as to how clubs are " +
		"run logistically and what it takes to cast and execute the club vision. It has " +
		"been rewarding seeing our student organization grow as a community as well as " +
		"in our curiosity towards the food industry. If elected, I intend to continue " +
		"this pursuit of learning by actively searching for new club opportunities like " +
		"competitions and hackathons, as well as maintaining traditions our club has " +
		"grown to love, like cooking challenges! Even with my extensive experience as a " +
		"leader of this organization, I am always looking to improve upon existing " +
		"ideas and am not afraid of change. I look forward to serving this club once " +
		"more!<br><br> " +
		"TL;DR: Rochelle + Food Science and Tech @ Cal = WOW/AMAZING/FANTASTIC";
		document.getElementById("modal-name").innerHTML = "Rochelle Lai";
		});

    $('.paolo').click(function() {         
    	document.getElementById("modal-content").innerHTML = "I would like to assist the club in better cementing " +
															"itself as the premier food science and tech group here on campus. For me, " +
															"achieving membership with IFT would be beneficial for verifying our status as " +
															"a food science and tech group at Cal. As president, I would get in touch with " +
															"food companies around the Bay Area to give talks to our club, as I feel it " +
															"broadens members' experiences to the possibilities of a food science career. " +
															"Exposing members and the general campus community to food science as an " +
															"academic and occupational discipline would be a top priority for me. ";
		document.getElementById("modal-name").innerHTML = "Paolo David";
	});

	$('.clare').click(function() {         
    	document.getElementById("modal-content").innerHTML = "I have been in FST for two years and I have been in the board for one year. Last year, as a secretary, I have been participating in all the board meeting and taking notes for each one. I also have close relationship with the food science team in UC Davis. Last summer, I went to IFT in Chicago with multiple food science members from different colleges. Last semester, I organized an independent research project with Kuli KUli's sponsorship. Our experiment result helped them pivot their moringa protein bar idea. Two years in Berkeley I have built some leadership skills and some connections with other clubs and food related factories. If I am elected as the vice president, I will assist the president to reach out to them and make sure there are enough events happening for FST next year.";
		document.getElementById("modal-name").innerHTML = "Clare Lou";
	});

	$('.jennifer').click(function() {         
    	document.getElementById("modal-content").innerHTML = "Hi everyone! I am running to be the Vice President for FST@Cal for the 2016-2017 school year. Most likely you guys have seen me at club meetings. If you haven’t so, then you must have seen all my Facebook events for the club. I am currently the Media and Publicity Chair, and I make all the flyers and cover photos for the FB events. I also made the current T-shirt for the club! I am very responsible, get things done on time, and communicate and work well with others. In order to publicize the events, I talk to the officer responsible for the event and confirm with he or she about the event’s logistics. In addition, to hold my own event, I get in touch with various companies and actively follow up with them to make sure that the event runs smoothly. I believe through my current chair position I possess the qualities that the Vice President of the club should have. ";
		document.getElementById("modal-name").innerHTML = "Jennifer Chang";
	});

	$('.hasti').click(function() {         
    	document.getElementById("modal-content").innerHTML = "Hi, I hope you are doing well. I have decided to run for Vice President because I believe I have the organization required for such a role, as well as very strong interpersonal skills. A good vice president requires lots of organization to maintain effective communication and I love organizing things--whether it is like last weekend where we sorted food in the Food Pantry,  my Bio 1A notes which resemble a 3rd grader's coloring book due to the number of colors I use, or organizing logistics for a club. In addition, working with many individuals from diverse cultures and different fields of work has helped me develop the necessary communication skills. This exposure has also helped me become a very strategic problem solver and I want to apply those skills for something I am passionate about as a Nutrition major. I hope to share my expertise and learn from FST as we together help FST thrive. ";
		document.getElementById("modal-name").innerHTML = "Hasti Taghados";
	});

	$('.christine').click(function() {         
    	document.getElementById("modal-content").innerHTML = "After having been the Treasurer of the FST founding board and of this school year, I believe that I have the time and experience needed to fully understand what is required and expected of not only being a cabinet member, but also as a Secretary from being able to observe Rochelle and Claire personally. I have shown these past two years of being the Treasurer how I am capable of being responsible by filling out many types of forms in order to earn money allocations for our club and contacting local shops to hold fundraisers in order to gain cash flow to hold events. By doing so, I was able to build a budget up from $0 to over $500 in less than a year. In order to do this, I also showed organizational skills by formatting and updating my own Treasury Budget in order to keep track of all our incomes and expenses and fill out annual budgeting applications more precisely. In addition, I am a meticulous note taker in class, so I believe this trait will be vital in my performance as the Secretary.  I look forward to continue meeting deadlines and filling out forms as a trustworthy and reliable Secretary for this club and would do my best to make this club successful. I will be sure to uphold this hard work and responsibility onto next year if I am elected Secretary.";
		document.getElementById("modal-name").innerHTML = "Christine Cheung";
	});

});