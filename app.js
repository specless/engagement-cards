const params = JSON.parse('{"' + decodeURI(location.search.substring(1).replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}');
const $body = $('body');
const $card = $('.card');
const $image = $('.card-image-asset');
const $headline = $('.card-headline');
const $cta = $('.card-cta-text');
const $label = $('.card-label');
const $styles = $('#site-styles');

if (params.type) {
	$body.attr('data-content', params.type);
}

if (params.image) {
	$image.attr('src', params.image);
}

if (params.headline) {
	$headline.attr('data-content', params.headline);

	if (params.headline == 'none') {
		$card.addClass('card-no-headline');
	}
}

if (params.cta) {
	$cta.attr('data-content', params.cta);
}

if (params.label) {
	$label.attr('data-content', params.label);

	if (params.label == 'none') {
		$card.addClass('card-no-label');
	}
}

if (params.size) {
	$card.attr('data-size', params.size);
	$body.attr('data-size', params.size);
}

if (params.domain) {
	var href = 'domains/' + params.domain.replace('.', '_') + '/styles.css';
	$styles.attr('href', href);
}


if (params.mode == 'screenshot') {
	$body.addClass('screenshot');
}

if (params.imagefit == 'contain') {
	$('.card-image').addClass('card-image-contain');

	if (params.image) {
		$('head').append('<style>.card-image.card-image-contain::before{background-image:url('+params.image+');}</style>');
	}
}

