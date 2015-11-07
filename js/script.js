$(document).ready(function() {
	
	/* This function calculates the total for the laptop-size layout */
	$('.quantity').keyup( function(event){
		var item = $('.SampleProduct').val();
		var price = $('.Price').val();
		var quant = $('.quantity').val();
		var total = price * quant;
		$('.Total').attr("placeholder", total).blur();
		
	});

	/* This function calculates the total for the mobile-size layout */
	$('#quantity').keyup(function() {
		var item2 = $('#SampleProduct').val();
		var price2 = $('#Price').val();
		var quant2 = $('#quantity').val();
		var total2 = price2 * quant2;
		$('#Total_row').attr("placeholder", total2).blur();
	});
	
	/* This function adds new items to the list for the laptop layout*/
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

	/* This function adds new items to the list for the mobile layout*/
	$('#Addbtn2').click(function() {
		var item = $('#SampleProduct').val();
		var price = $('#Price').val();
		var quant = $('#quantity').val();
		var total = price * quant;
		var id = item;
		var string = "";
		var smallstring = string.concat("<form id='small_list' class='form-inline'>\
					<div class='small_item form-group' id='", item, "'>\
					<label class='sr-only'>Product description, quantity, and total cost</label>\
					<div class='input-group col-sm-6' readonly>\
						<div class='small_listitem input-group-addon'>", item, "</div>\
						<input type='text' class='small_number form-control' placeholder='", quant, "'>\
						<div class='small_listtotal input-group-addon'>$", total, "</div>\
					</div>\
				</div>\
				</form>"
			);
		$('#small_list').append(
			smallstring);
	});
});