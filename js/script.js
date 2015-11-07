$(document).ready(function() {
	
	$('.quantity').keyup( function(event){
		var item = $('.SampleProduct').val();
		var price = $('.Price').val();
		var quant = $('.quantity').val();
		var total = price * quant;
		$('.Total').attr("placeholder", total).blur();
		
	});

	$('#quantity').keyup(function() {
		var item2 = $('#SampleProduct').val();
		var price2 = $('#Price').val();
		var quant2 = $('#quantity').val();
		var total2 = price2 * quant2;
		$('#Total_row').attr("placeholder", total2).blur();
	});
	
	
	$('#Addbtn').click(function() {
		var item = $('.SampleProduct').val();
		var price = $('.Price').val();
		var quant = $('.quantity').val();
		var total = price * quant;
		var id = item;
		var string = "";
		var bigtext = string.concat("<nobr>\
					<div class='bigtext form-group' id='", id, "' >\
					<div class='edit_buttons'><button class='little_button'><i class='fa fa-trash'></i></button><button class='little_button'><i class='fa fa-pencil'></i></button><button class='little_button'><i class='fa fa-check'></i></button></div>\
					<label class='sr-only'>Product description</label>\
					<div class='input-group col-sm-4'>\
						<input type='text' class='form-control' id='SampleProduct' placeholder='", item, "' readonly>\
					</div>\
					<label class='sr-only'>Unit price</label>\
					<div class='input-group col-sm-2'>\
						<div class='input-group-addon'>$</div>\
						<input type='text' class='form-control' id='Price' placeholder='", price, "' readonly>\
					</div>\
					<label class='sr-only'>Quantity</label>\
					<div class='input-group col-sm-1'>\
						<input type='text' class='form-control' id='quantity' placeholder='", quant, "' readonly>\
					</div>\
					<div class='input-group col-sm-2'>\
						<div class='input-group-addon'>$</div>\
						<input type='text' class='form-control' id='Total' placeholder='", total,"' readonly>\
					</div>\
				</div>\
			</nobr>");


		$('#biglist').append(
			bigtext);
	});

	$('#Addbtn2').click(function() {
		var testtext = "<div><p>This is a test</p></div>";
		$('#small_list').append(
			testtext);
	});
});