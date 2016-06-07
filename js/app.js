$(document).ready(function() {
	$('.media').change(function() {
		var media_type = $(this).val();
		if (media_type == "Article" || media_type == "Video") {
			$('#link').attr('placeholder', "Link").val('').focus().blur();
		}
		else if (media_type == "Book") {
			$('#link').attr('placeholder', "Title").val('').focus().blur();
		}
	})

	$('.elaborate').change(function() {
		var elaboration = $(this).val();
		if (elaboration == "Note") {
			$('#note').attr('placeholder', "Note").val('').focus().blur();
		}
		else if (elaboration == "Quote") {
			$('#note').attr('placeholder', "Quote").val('').focus().blur();
		}
	})

	$('.list-elaborate').change(function() {
		var yes = $(this).val();
		if (yes = "Yes") {
			$('#note').replaceWith('<ul><li></li><li></li><li></li></ul>')
		}
	})
	
})