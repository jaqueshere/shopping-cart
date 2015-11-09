$(document).ready(function() {
	
		var running_total = 0;
		var tax = 0;
		var grand_total = 0;

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
					<div class='edit_buttons'><button type='button' class='trash_button little_button'><i class='fa fa-trash'></i></button><button type='button' class='edit_button little_button'><i class='fa fa-pencil'></i></button></div>\
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

		/* Calculate and display cart subtotal */
		running_total += total;
		tax = 0.0875 * running_total;
		grand_total = running_total + tax;
		$('.cart_total').text(running_total);
		$('.tax').text(tax);
		$('.grand_total').text(grand_total);
		
		/* This function toggles edit mode for the line in the shopping list
	 	 * Adding it here to create a listener for every added line 
	 	 * Adding global variable id to bind listeners to lines
	 	 */
		$('#' + id).find('.edit_button').click(function(){
			$(this).parent().next().next().children().attr("readonly", false);
			$(this).parent().next().next().next().next().children().attr("readonly", false);
			$(this).parent().next().next().next().next().next().next().children().attr("readonly", false);

			/* Finish editing the item field 
			 * Added id specifier to try to prevent duplicate listeners on lines
			 * Added !readonly check to make sure handlers are only editing open items
			 */ 
			$('#' + id).find('.item_field').keydown(function(e) {
				if ((e.keyCode == 9) && !($(this).prop("readonly"))) {
					/* the following function just make the fontface match surrounding items
					 * by converting user text to placeholder.
					 * The clone() function is used to keep string and placeholder
					 * from getting erased when $(this).val() is set to ""
					 **/
					var string = $(this).clone().val();
					console.log($(this).val(), $(this).attr("placeholder"));
					$(this).attr("placeholder", string);
					$(this).attr("readonly", true);
					$(this).val("");
				}
			});

			/* Finish editing the item field */
			$('#' + id).find('.item_field').keyup(function(e) {
				if ((e.keyCode == 13) && !($(this).prop("readonly"))) {
					/* the following two lines just make the fontface match surrounding items
					 * by converting user text to placeholder */
					var string = $(this).clone().val();
					$(this).attr("placeholder", string);
					$(this).attr("readonly", true);
					$(this).val("");
				}
			});

			/* Finish editing the price field */
			$('#' + id).find('.price_field').keyup(function(e) {
				if ((e.keyCode == 13) && !($(this).prop("readonly"))) {
					var string = $(this).clone().val();
					$(this).attr("placeholder", string);
					$(this).attr("readonly", true);
					temp_price = $(this).clone().val();
					$(this).val("");
				}
			});

			$('#' + id).find('.price_field').keydown(function(e) {
				if ((e.keyCode == 9) && !($(this).prop("readonly"))) {
					var string = $(this).clone().val();
					$(this).attr("placeholder", string);
					$(this).attr("readonly", true);
					temp_price = $(this).clone().val();
					$(this).val("");
				}
			});

			/* Finish editing the quantity field */
			$('#' + id).find('.quantity_field').keyup(function(e) {
				if ((e.keyCode == 13) && !($(this).prop("readonly"))) {
					
					$(this).attr("readonly", true);
					//recalculate running total
					temp_quantity = $(this).clone().val();
					temp_price = parseInt($(this).parent().parent().find('.price_field').clone().attr("placeholder"));
					
					temp_total = temp_price*temp_quantity;
					
					var old_total = $(this).parent().next().find('.total_field').attr("placeholder");
					var tempsubtotal = $('.cart_total').text();
					tempsubtotal = tempsubtotal - old_total;
					tempsubtotal = tempsubtotal + temp_total;
					$('.cart_total').text(tempsubtotal);
					var temptax = 0.08875 * tempsubtotal;
					var tempgrand = tempsubtotal + temptax;
					$('.tax').text(temptax);
					$('.grand_total').text(tempgrand);
					$(this).parent().next().find('.total_field').attr("placeholder",temp_total);
					$(this).val("");
				}
			});

			$('#' + id).find('.quantity_field').keydown(function(e) {
				if ((e.keyCode == 9) && !($(this).prop("readonly"))) {
					
					$(this).attr("readonly", true);
					//recalculate running total
					temp_quantity = $(this).clone().val();
					temp_price = parseInt($(this).parent().parent().find('.price_field').clone().attr("placeholder"));
					
					temp_total = temp_price*temp_quantity;
					
					var old_total = $(this).parent().next().find('.total_field').attr("placeholder");
					var tempsubtotal = $('.cart_total').text();
					tempsubtotal = tempsubtotal - old_total;
					tempsubtotal = tempsubtotal + temp_total;
					$('.cart_total').text(tempsubtotal);
					var temptax = 0.08875 * tempsubtotal;
					var tempgrand = tempsubtotal + temptax;
					$('.tax').text(temptax);
					$('.grand_total').text(tempgrand);
					$(this).parent().next().find('.total_field').attr("placeholder",temp_total);
					$(this).val("");
				}
			});

		});

		$('#' + id).find('.trash_button').click(function(e) {
			var sure = confirm("Are you sure?");
			if (sure == true) {
				var old_total = $(this).parent().parent().find('.total_field').attr("placeholder");
				var tempsubtotal = $('.cart_total').text();
				tempsubtotal = tempsubtotal - old_total;
				$('.cart_total').text(tempsubtotal);
				var temptax = 0.08875 * tempsubtotal;
				var tempgrand = tempsubtotal + temptax;
				$('.tax').text(temptax);
				$('.grand_total').text(tempgrand);
				$(this).parent().parent().parent().empty();
				$(this).parent().parent().parent().remove();
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