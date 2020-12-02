(function ($) {

const scrollIndicatorElt = document.getElementById('scrollIndicator');
const maxScrollableHeight = document.body.scrollHeight - window.innerHeight;
window.addEventListener('scroll', moveScrollIndicator);

function moveScrollIndicator() {
	const percentage = ((window.scrollY) / maxScrollableHeight) * 75;
	scrollIndicatorElt.style.width = percentage + '%';
  }
  
//

//Footer
//document.getElementById("siteInfo").innerHTML = 'Coding & Design by <b>Alex Cherneda</a></b><br>© 2005-2019 ver. 3.6';





////////////////////* ScrollMagic *////////////////////
/*Slides
var controller = new ScrollMagic.Controller({
	globalSceneOptions: {
		triggerHook: 'onLeave',
		duration: "200%" // this works just fine with duration 0 as well
		// However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
		// Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
	}
});

// get all slides
var slides = document.querySelectorAll("section.panel");

// create scene for every slide
for (var i=0; i<slides.length; i++) {
	new ScrollMagic.Scene({
			triggerElement: slides[i]
		})
		.setPin(slides[i], {pushFollowers: false})
		.addIndicators() // add indicators (requires plugin)
		.addTo(controller);
}
*/


////////* Pins & Scenes *////////

/*/ siteName
// init controller
var controller = new ScrollMagic.Controller();

// build tween
var tween = TweenMax.to(".head", 0.5, {className: "+=visible", ease : Power1.easeInOut});

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#slide01", duration: 0, triggerHook: 0, offset: 0})
				.setTween(tween)
				.addTo(controller)

//

var scene = new ScrollMagic.Scene({
	triggerElement: "#home",
	
})
.setTween("#siteName", 1, {y:1, duration:1,}) // trigger a TweenMax.to tween
.addTo(controller);

//

// Init ScrollMagic
var controller = new ScrollMagic.Controller();

// build Tween
var tween = new TimelineMax()
.from(".head", 0.5, {opacity: 0, y:-200, ease: Linear.easeNone})
.to(".head", 0.5, {opacity: 1, y:0, ease: Power1.easeOut})

// build scene
new ScrollMagic.Scene({
		triggerElement: "#slide01",
		//triggerHook: "OnLeave",
		triggerHook: 0.5,
		//duration: "100%",
	})
	.setTween(tween)
	.addTo(controller);

/*/

// Init ScrollMagic
var controller = new ScrollMagic.Controller();

// get all slides
var slides = ["#slide01", "#slide02"];

// get all headers in slides that trigger animation
var articles = ["#slide01 #pagecell", "#slide02 #info"];

// get all break up sections
var breakSections = ["#cb01", "#cb02"];


//* About Me

// Init ScrollMagic
var controller = new ScrollMagic.Controller();

// build tween
var tween = TweenMax.staggerFromTo("pagecell, #img", 1,
{scale: 0.8, y:50, opacity: 0}, 
{opacity: 1, scale: 1, y:0, ease: Expo.easeOut, }, 1);

// build scene
var scene = new ScrollMagic.Scene({
	triggerElement: "#slide01",
	//triggerHook: 0.1,
	reverse: true,
	offset: -100,
	triggerHook: "OnEnter",
	
})
.setTween(tween)
.addTo(controller);


// SCENE 1
// create scenes for each of the headers


articles.forEach(function (article, index) {
	
	// number for highlighting scenes
	var num = index+1;

	// make scene
	var headerScene = new ScrollMagic.Scene({
		triggerElement: article, // trigger CSS animation when header is in the middle of the viewport 
		offset: -95 // offset triggers the animation 95 earlier then middle of the viewport, adjust to your liking
	})
	.setClassToggle('#slide0'+num, 'is-active') // set class to active slide
	//.addIndicators() // add indicators (requires plugin), use for debugging
	.addTo(controller);
});

// SCENE 2
// change color of the nav for dark content blocks
breakSections.forEach(function (breakSection, index) {
	
	// number for highlighting scenes
	var breakID = $(breakSection).attr('id');

	// make scene
	var breakScene = new ScrollMagic.Scene({
		triggerElement: breakSection, // trigger CSS animation when header is in the middle of the viewport 
		triggerHook: 1,

	})
	.setClassToggle('#'+breakID, 'is-active') // set class to active slide
	.on("enter", function (event) {
		$('nav').attr('class','is-light');
	})
	.addTo(controller);
});

/*/ SCENE 4 - parallax effect on each of the slides with bcg
// move bcg container when slide gets into the view
slides.forEach(function (slide, index) {

	var $bcg = $(slide).find('.bcg');

	var slideParallaxScene = new ScrollMagic.Scene({
		triggerElement: slide, 
		//triggerHook: 1,
		duration: "100%",
		triggerHook: "OnEnter",

	})
	.setTween(TweenMax.from($bcg, 1, {y: '100%', autoAlpha: 0.1, ease:Power0.easeNone}))
	.addTo(controller);
});
*/

// SCENE 5 - parallax effect on the intro slide
// move bcg container when intro gets out of the the view

var introTl = new TimelineMax();

introTl
	.to($('#home, #about, .arrowdown',), 0.5, {autoAlpha: 0, ease:Power1.easeNone})
	.to($('#home'), 0.7, {autoAlpha: 1, ease:Power1.easeNone}, 0);

var introScene = new ScrollMagic.Scene({
	triggerElement: '#slide01', 
	triggerHook: 1,
	duration: "100%"
})
.setTween(introTl)
.addTo(controller);


// SCENE 6 - pin the first section
// and update text

var pinScene01Tl = new TimelineMax();

pinScene01Tl
	.to($('#home h1'), 0.2, {autoAlpha: 0, ease:Power1.easeNone}, 1.5)
	.to($('#home section'), 0.2, {autoAlpha: 0, ease:Power1.easeNone}, 1.5)
	.set($('#home h1'), {text: "I'm a freelance frontend developer and web designer. I creating simple and functional sites."})
	.set($('#home p'), {text: "I started web development just a few months ago, so I offer my time at low price."})
	.fromTo($('#home h1'), 0.7, {y: '+=0'}, {y: 0, autoAlpha: 1, ease:Power1.easeOut}, '+=0.4')
	.fromTo($('#home section'), 0.6, {y: '+=0'}, {y: 0, autoAlpha: 1, ease:Power1.easeOut}, '-=0.6')
	.set($('#home h1'), {autoAlpha: 1}, '+=2');

var pinScene01 = new ScrollMagic.Scene({
	triggerElement: '#home', 
	triggerHook: 0,
	duration: "100%"
})
.setPin("#home")
.setTween(pinScene01Tl)
.addTo(controller);

/*/ SCENE 7 - pin the second section
// and update text

var pinScene02Tl = new TimelineMax();

pinScene02Tl
	.to($('#slide01 h1'), 0.2, {autoAlpha: 0, ease:Power1.easeNone}, 1.5)
	.to($('#slide01 section'), 0.2, {autoAlpha: 0, ease:Power1.easeNone}, 1.5)
	.set($('#slide01 h1'), {text: "The Memories"})
	.set($('#slide01 p'), {text: "You never climb the same mountain twice, not even in memory. Memory rebuilds the mountain, changes the weather, retells the jokes, remakes all the moves."})
	.to($('#slide01 .bcg'), 0.6, {scale: 1.2, transformOrigin: '0% 0%', ease:Power0.easeNone})
	.fromTo($('#slide01 h1'), 0.7, {y: '+=20'}, {y: 0, autoAlpha: 1, ease:Power1.easeOut}, '+=0.4')
	.fromTo($('#slide01 section'), 0.6, {y: '+=20'}, {y: 0, autoAlpha: 1, ease:Power1.easeOut}, '-=0.6')
	.set($('#slide01 h1'), {autoAlpha: 1}, '+=2.5');

var pinScene02 = new ScrollMagic.Scene({
	triggerElement: '#slide01', 
	triggerHook: 0,
	duration: "100%"
})
.setPin("#slide01")
.setTween(pinScene02Tl)
.addTo(controller);


//////////* Navigation *//////////



//* Menu Links *//

/*/
//* Home
var scene = new ScrollMagic.Scene({
	triggerElement: "#about",
	
})
.setTween("#link0", 1, {x:50, duration:0.1,}) // trigger a TweenMax.to tween
.addTo(controller);
*/


////* SVG port
function pathPrepare ($el) {
	var lineLength = $el[0].getTotalLength();
	$el.css("stroke-dasharray", lineLength);
}

var $word = $("path");

// prepare SVG
pathPrepare($word);

// init controller
var controller = new ScrollMagic.Controller();

// build tween
var tween = new TimelineMax()
	.add(TweenMax.to($word, 1, {strokeDashoffset: 0})) // draw word for 0.9
	.add(TweenMax.to("#word", 1, {strokeDashoffset: 10, stroke: "#808080", ease:Power1.easeInOut, opacity:1}), 0);			// change color during the whole thing

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#siteName", duration: "100%", tweenChanges: true, offset:0})
	.setTween(tween)
	//.addIndicators() // add indicators (requires plugin)
	.addTo(controller);


/*/



////////* Contact *////////
/*var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
	triggerElement: "#slide02"
})
.setTween("#slide02", 1, {opacity, ease : Cubic.easeIn}) // trigger a TweenMax.to tween
.addTo(controller);
/*/

//* Get the modal preview *//

/*var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
modal.style.display = "block";
modalImg.src = this.src;
captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
modal.style.display = "none";
}
modal.onclick = function() { 
modal.style.display = "none";
}

/*//* Yandex Maps *//*/

ymaps.ready(init);    
function init(){ 
	var myMap = new ymaps.Map("map", {
		center: [59.934559, 30.362297],
		zoom: 10,
		type: 'yandex#hybrid',
		controls: []
	}); 
}
*/


ScrollTrigger.create({
	trigger: "#siteName",
	start: "top bottom-=75",
	endTrigger: "footer",
	end: "bottom bottom+=75",
	pin: true,
	pinSpacing: false,
	
  });

})

 