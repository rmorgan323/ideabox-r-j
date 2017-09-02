$('.title-input').focus()


$('.save-button').on('click', function(e) {
	e.preventDefault();
	populateCard();
});



function populateCard(newCard) {
	var title = $('.title-input').val();
	var idea = $('.idea-input').val();
	var addedCard = createCard(title, idea);
	$(addedCard).prependTo('section');
};


function createCard(title, idea) {
	var newCard = document.createElement('article');
	newCard.innerHTML = `<div class="h2-wrapper">
					<h2 class="idea-title">${title}</h2>
					<button class="delete-button"><img src="assets/delete.svg"></button>
				</div>
				<p class="idea-body">${idea}</p>
				<div class="quality-wrapper">
					<button class="upvote-button"><img src="assets/upvote.svg"></button>
					<button class="downvote-button"><img src="assets/downvote.svg"></button>
					<h5 class="quality">quality: <span class="quality-span">swill</span></h5>
				</div>
				<hr>`;
				resetHeader();
				return newCard;
};


function resetHeader() {
	$('.title-input').focus();
	$('.title-input').val('');
	$('.idea-input').val('');
};







