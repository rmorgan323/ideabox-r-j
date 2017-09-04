$('.title-input').focus();

var IdeaCard = function(title, idea, id = Date.now(), quality = 0) {  //setting initial values
	this.title = title;
	this.idea = idea;
	this.id = id;  //then letting values be changed
	this.quality = quality;
};

IdeaCard.prototype.qualityString = function() {  //creates array, grabs current array index and returns string
	var qualityArray = ['swill', 'plausible', 'genius'];
	return qualityArray[this.quality];
}

IdeaCard.prototype.qualityIncrement = function() { 
	if (this.quality < 2) {
		this.quality++;
	}
}

IdeaCard.prototype.qualityDecrement = function() {
	if (this.quality > 0) {
		this.quality--;
	}
}

function extractCard(elementInsideArticle) {
	var article = $(elementInsideArticle).closest('article');
	var title = $('.idea-title', article).text();
	var idea = $('.idea-body', article).text();
	var id = article.data('id');
	var quality = $('.quality-span', article).data('quality');
	var ideaCard = new IdeaCard(title, idea, id, quality);
	return ideaCard
}

function upvoteCard() {
 	var ideaCard = extractCard(this);     //this = event.target
	ideaCard.qualityIncrement();
	$(this).closest('article').replaceWith(populateCard(ideaCard));
}

function downvoteCard() {
 	var ideaCard = extractCard(this);
	ideaCard.qualityDecrement();
	$(this).closest('article').replaceWith(populateCard(ideaCard));
}

$('.save-button').on('click', function(e) {
	e.preventDefault();
	formSubmit();
});

// $('section').on('click', function(e) {
// 	e.preventDefault();
// 	// deleteCard(e);
	
// 	// editIdea(e);
// 	// qualityChange(e);
// 	// downvote();
// });

$('section').on('click', '.delete-button', deleteCard)  //this notation tells the event listener to filter for .delete-button

$('section').on('click', '.upvote-button', upvoteCard)

$('section').on('click', '.downvote-button', downvoteCard)

function formSubmit() {
	var title = $('.title-input').val();
	var idea = $('.idea-input').val();
	var ideaCard = new IdeaCard(title, idea);
	$('section').prepend(populateCard(ideaCard));  //moved prepend to formSubmit so that populateCard can be reused elsewhere (like when upvoting and downvoting)
	resetHeader();
};

function populateCard(ideaCard) {
	var newTitle = ideaCard.title;
	var newIdea = ideaCard.idea;
	var newId = ideaCard.id;
	var newQuality = ideaCard.qualityString();  //stored data inside html article using data-id (line 82) and data-quality (line 91)
	return (`<article data-id="${newId}" class="idea-card">  
				<div class="h2-wrapper">
					<h2 class="idea-title">${newTitle}</h2>
					<button class="delete-button"><img src="assets/delete.svg"></button>
				</div>
				<p class="idea-body">${newIdea}</p>
				<div class="quality-wrapper">
					<button class="upvote-button"><img src="assets/upvote.svg"></button>
					<button class="downvote-button"><img src="assets/downvote.svg"></button>
					<h5 class="quality">quality: <span data-quality="${ideaCard.quality}" class="quality-span">${newQuality}</span></h5>
					<button class="edit-save">edit</button>
				</div>
				<hr>
			</article>`);
}


function resetHeader() {
	$('.title-input').focus();
	$('.title-input').val('');
	$('.idea-input').val('');
};

function deleteCard(e) {
	e.preventDefault();
	$(this).closest('article').remove();  //super shorthand!  remember: this = event.target

	// var cardDelete = e.target.closest('article');  <----heres the old way
	// cardDelete.remove();							  <----
};

// function editIdea(e) {
// 	if (e.target.className === 'edit-save') {
// 		$('.search').focus();
// 		$('p').attr('contenteditable', 'true');
// 		//focus the idea body
// 		//add attr contenteditable
// 	}
// };

// function upvote(e) {
// 	if (e.target.className === 'upvote-button') {
// 		console.log();
// 	}
// }


// function qualityChange(e) {
// 	var qualityState = ['swill', 'plausible', 'genius'];
// 	var i = $('.quality-span').val();
// 	console.log(e.target.className);
// 	console.log()
// 	if (e.target.className === 'upvote-button') {
// 		console.log('logging')
// 		qualityState[i++];
// 		$('.quality-span').text(qualityState[i]);
// 	}


// function populateCard(newCard) {
// 	var title = $('.title-input').val();
// 	var idea = $('.idea-input').val();
// 	// var quality = $('.quality-span').
// 	var addedCard = createCard(title, idea);
// 	$(addedCard).prependTo('section');
// };


// function createCard(title, idea) {
// 	var newCard = document.createElement('article');
// 	var qualityState = 
// 	newCard.innerHTML = `<div class="h2-wrapper">
// 					<h2 class="idea-title">${title}</h2>
// 					<button class="delete-button"><img class="delete-button" src="assets/delete.svg"></button>
// 				</div>
// 				<p class="idea-body">${idea}</p>
// 				<div class="quality-wrapper">
// 					<button class="upvote-button"><img class="upvote-button" src="assets/upvote.svg"></button>
// 					<button class="downvote-button"><img class="downvote-button" src="assets/downvote.svg"></button>
// 					<h5 class="quality">quality: <span class="quality-span">${quality}</span></h5>
// 				</div>
// 				<hr>`;
// 				resetHeader();

// 				return newCard;
// };





// function qualityChange(e) {
// 	var qualityState = ['swill', 'plausible', 'genius'];
// 	var i = $('.quality-span').val();
// 	console.log(e.target.className);
// 	console.log()
// 	if (e.target.className === 'upvote-button') {
// 		console.log('logging')
// 		qualityState[i++];
// 		$('.quality-span').text(qualityState[i]);
// 	}

// }


// function buttonChangers() {
// 	// if its this button do this
// }












