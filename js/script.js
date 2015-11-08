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
					<div class='edit_buttons'><button type='button' class='trash_button little_button'><i class='fa fa-trash'></i></button><button type='button' class='edit_button little_button'><i class='fa fa-pencil'></i></button><button type='button' class='purchased_button little_button'><i class='fa fa-check'></i></button></div>\
					<label class='sr-only'>Product description</label>\
					<div class='input-group col-sm-4'>\
						<input type='text' class='item_field form-control' placeholder='", item, "' readonly>\
					</div>\
					<label class='sr-only'>Unit price</label>\
					<div class='input-group col-sm-2'>\
						<div class='input-group-addon'>$</div>\
						<input type='text' class='price_field form-control' placeholder='", price, "' readonly>\
					</div>\
					<label class='sr-only'>Quantity</label>\
					<div class='input-group col-sm-1'>\
						<input type='text' class='quantity_field form-control' placeholder='", quant, "' readonly>\
					</div>\
					<div class='input-group col-sm-2'>\
						<div class='input-group-addon'>$</div>\
						<input type='text' class='total_field form-control' placeholder='", total,"' readonly>\
					</div>\
				</div>\
			</nobr>");
		var temp_price = 0;
		var temp_quantity = 0;
		var temp_total = 0;

		$('#biglist').append(
			bigtext);
		/* This function toggles edit mode for the line in the shopping list
	 	 * Adding it here to create a listener for every added line 
	 	 */
		$('.edit_button').click(function(){
			$(this).parent().next().next().children().attr("readonly", false);
			$(this).parent().next().next().next().next().children().attr("readonly", false);
			$(this).parent().next().next().next().next().next().next().children().attr("readonly", false);
		});

		/* Finish editing the item field */
		$('.item_field').keyup(function(e) {
			if (e.keyCode == 13) {
				console.log(this);
				$(this).attr("readonly", true);
			}
		});

		$('.item_field').keydown(function(e) {
			if (e.keyCode == 9) {
				console.log(this);
				$(this).attr("readonly", true);
			}
		});

		/* Finish editing the price field */
		$('.price_field').keyup(function(e) {
			if (e.keyCode == 13) {
				console.log(this);
				$(this).attr("readonly", true);
				temp_price = $(this).val();
			}
		});

		$('.price_field').keydown(function(e) {
			if (e.keyCode == 9) {
				console.log(this);
				$(this).attr("readonly", true);
				temp_price = $(this).val();
			}
		});

		/* Finish editing the quantity field */
		$('.quantity_field').keyup(function(e) {
			if (e.keyCode == 13) {
				console.log(this);
				$(this).attr("readonly", true);
				temp_quantity = $(this).val();
				temp_total = temp_price*temp_quantity;
				$(this).parent().next().find('.total_field').val(temp_total);
			}
		});

		$('.quantity_field').keydown(function(e) {
			if (e.keyCode == 9) {
				console.log(this);
				$(this).attr("readonly", true);
				temp_quantity = $(this).val();
				temp_total = temp_price*temp_quantity;
				$(this).parent().next().find('.total_field').val(temp_total);
			}
		});

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