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
		var item = $('.SampleProduct').clone().val();
		var price = $('.Price').clone().val();
		var quant = $('.quantity').clone().val();
		var total = price * quant;
		var id = item;
		$('.SampleProduct').val("");
		$('.Price').val("");
		$('.quantity').val("");
		$('.Total').attr("placeholder","Total");
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
		$('.item_field').keydown(function(e) {
			if (e.keyCode == 9) {
				/* the following function just make the fontface match surrounding items
				 * by converting user text to placeholder */
				var string = $(this).clone().val();
				$(this).attr("placeholder", string);
				$(this).attr("readonly", true);
				$(this).val("");
			}
		});

		/* Finish editing the item field */
		$('.item_field').keyup(function(e) {
			if (e.keyCode == 13) {
				/* the following two lines just make the fontface match surrounding items
				 * by converting user text to placeholder */
				var string = $(this).clone().val();
				$(this).attr("placeholder", string);
				$(this).attr("readonly", true);
				$(this).val("");
			}
		});

		/* Finish editing the price field */
		$('.price_field').keyup(function(e) {
			if (e.keyCode == 13) {
				var string = $(this).clone().val();
				$(this).attr("placeholder", string);
				$(this).attr("readonly", true);
				temp_price = $(this).clone().val();
				$(this).val("");
			}
		});

		$('.price_field').keydown(function(e) {
			if (e.keyCode == 9) {
				var string = $(this).clone().val();
				$(this).attr("placeholder", string);
				$(this).attr("readonly", true);
				temp_price = $(this).clone().val();
				$(this).val("");
			}
		});

		/* Finish editing the quantity field */
		$('.quantity_field').keyup(function(e) {
			if (e.keyCode == 13) {
				
				$(this).attr("readonly", true);
				temp_quantity = $(this).clone().val();
				temp_total = temp_price*temp_quantity;
				$(this).parent().next().find('.total_field').attr("placeholder",temp_total);
				$(this).val("");
			}
		});

		$('.quantity_field').keydown(function(e) {
			if (e.keyCode == 9) {
				
				$(this).attr("readonly", true);
				temp_quantity = $(this).clone().val();
				temp_total = temp_price*temp_quantity;
				$(this).parent().next().find('.total_field').attr("placeholder",temp_total);
				$(this).val("");
			}
		});

		/* Calculate and display cart subtotal */
		var running_total = 0;
		var tax = 0;
		var grand_total = 0;
		for (i in $('.list').find('.total_field')) {
			running_total += parseInt($('.list').find('.total_field').attr("placeholder"));
			console.log("hi\n");
		}
		tax = 0.0875 * running_total;
		grand_total = running_total + tax;
		$('.cart_total').text(running_total);
		$('.tax').text(tax);
		$('.grand_total').text(grand_total);
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