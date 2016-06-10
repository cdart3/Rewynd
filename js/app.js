$(document).ready(function() {
	$('select.input.media').change(function() {
		var media_type = $(this).val();
		if (media_type == "Article" || media_type == "Video") {
			$('#link').attr('placeholder', "Link").val('').focus().blur();
		}
		else if (media_type == "Book") {
			$('#link').attr('placeholder', "Title").val('').focus().blur();
		}
	})

	$('select.input.elaborate').change(function() {
		var elaboration = $(this).val();
		if (elaboration == "Note") {
			$('#note').attr('placeholder', "Note").val('').focus().blur();
		}
		else if (elaboration == "Quote") {
			$('#note').attr('placeholder', "Quote").val('').focus().blur();
		}
	})

	$('input.another-one.list').click(function() {
		$('ul.ul-notes').append('<li><label><textarea class="input note" rows="1" id="note" placeholder="Whatcha got to say?"></textarea></label></li>');
		console.log("it works");
	})

	$('input.archive').click(function() {
		var media_type = $('select.input.media').val();
		console.log(media_type)
		var media = $('textarea#link.input.link').val();
		console.log(media)
		var elaboration_type = $('select.input.elaborate').val();
		console.log(elaboration_type)
		var elaboration = []
		$('ul.ul-notes').find('textarea#note.input.note').each(function() {
			note = $(this).val();
			elaboration.push(note);
		})
		console.log(elaboration)
		var how_often = $('select.input.howoften').val();
		console.log(how_often)
	})
	
})