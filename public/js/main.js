const videos = $.get('api/galleryvideos', function(data) {
	data = data.videos;
	console.log(data);
	for (var i = data.length - 1; i >= 0; i--) {
		let vid = data[i];
		$('#selector').append(`<li><a href="#" class="videolink" data-file="${ vid.filename }">${ vid.linkname }</a></li>`);
	}
});

$('#selector').on('click', '.videolink', function(evt) {
	evt.preventDefault();
	const filename = $(this).data('file');
	console.log(filename);
	//$('#player video').html(`<source src="media/${ filename }" />`);
	const player = videojs('my-video', {
		controls: true,
		autoplay: true,
		preload: 'auto'
	});

	player.src({ src: `media/${ filename }` });

	//videojs.options.autoplay = true;
	//videojs.options.controls = true;
	//videojs.options.preload = 'auto';
});