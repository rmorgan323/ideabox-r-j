$('.title-input').focus();

var IdeaCard = function(title, idea, id) {
	this.title = title;
	this.idea = idea;
	this.id = Date.now();
	this.quality =  qualityArray[0];
};

var qualityArray = ['swill', 'plausible', 'genius'];


IdeaCard.prototype.upvote = function(e) {
	if (e.target.className === 'upvote-button') {
	qualityArray++;
	console.log(qualityArray);

	var qualityUp = e.target.closest('.quality-span');
	// qualityUp.text('hello');
	// console.log(qualityUp);
	}
};


$('.save-button').on('click', function(e) {
	e.preventDefault();
	formSubmit();
});

$('section').on('click', function(e) {
	e.preventDefault();
	deleteCard(e);
	IdeaCard.prototype.upvote(e);
	editIdea(e);
	// qualityChange(e);
	// downvote();
});

function formSubmit() {
	var title = $('.title-input').val();
	var idea = $('.idea-input').val();
	var ideaCard = new IdeaCard(title, idea);
	populateCard(ideaCard);
};

function populateCard(ideaCard) {
	var newTitle = ideaCard.title;
	var newIdea = ideaCard.idea;
	var newId = ideaCard.id;
	var newQuality = ideaCard.quality;
	$('section').prepend(`<article class="idea-card">
				<div class="h2-wrapper">
					<h2 class="idea-title">${newTitle}</h2>
					<button class="delete-button"><img class="delete-button" src="assets/delete.svg"></button>
				</div>
				<p class="idea-body">${newIdea}</p>
				<div class="quality-wrapper">
					<button class="upvote-button"><img class="upvote-button" src="assets/upvote.svg"></button>
					<button class="downvote-button"><img class="downvote-button" src="assets/downvote.svg"></button>
					<h5 class="quality">quality: <span class="quality-span">${newQuality}</span></h5>
					<button class="edit-save">edit</button>
				</div>
				<hr>
			</article>`);
	resetHeader();
}


function resetHeader() {
	$('.title-input').focus();
	$('.title-input').val('');
	$('.idea-input').val('');
};

function deleteCard(e) {
	if (e.target.className === 'delete-button') {
		var cardDelete = e.target.closest('article');
		$(cardDelete).remove();
	}
};

function editIdea(e) {
	if (e.target.className === 'edit-save') {
		$('.search').focus();
		$('p').attr('contenteditable', 'true');
		//focus the idea body
		//add attr contenteditable
	}
};

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












