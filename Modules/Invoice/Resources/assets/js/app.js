/*
   * Finance - Invoices module JS code
   */
$(document).ready(function(){
	$("#amount").on("keyup", function(){
		var currency = document.getElementById("currency").value;
		var value = document.getElementById("amount").value;
		switch (currency) {
		case "INR":
			value = value * 0.18 + 1 * value;
			var fraction = Math.round((value % 1) * 100);
			var fraction_text = "";
			if (fraction > 0) {
				fraction_text = "AND " + convert_number(fraction) + " PAISE";
			}
			var output = convert_number(value) + " RUPEE " + fraction_text + " ONLY";
			break;
		case "USD":
			var fraction = Math.round((value % 1) * 100);
			var fraction_text = "";
			if (fraction > 0) {
				fraction_text = "AND " + convert_number(fraction) + " CENTS";
			}
			var output = convert_number(value) + " DOLLAR " + fraction_text + " ONLY";
			break;
		}
		document.getElementById("container").innerHTML = output;
	});
});

function convert_number(number) {
	if (number < 0 || number > 999999999) {
		return "NUMBER OUT OF RANGE!";
	}
	var crore = Math.floor(number / 10000000);
	number -= crore * 10000000;
	var lakhs = Math.floor(number / 100000);
	number -= lakhs * 100000;
	var thousand = Math.floor(number / 1000);
	number -= thousand * 1000;
	var hundred = Math.floor(number / 100);
	number = number % 100;
	var tenths = Math.floor(number / 10);
	var one = Math.floor(number % 10);
	var result = "";
	if (crore > 0) {
		result += convert_number(crore) + " CRORE";
	}
	if (lakhs > 0) {
		result += (result == "" ? "" : " ") + convert_number(lakhs) + " LAKH";
	}
	if (thousand > 0) {
		result += (result == "" ? "" : " ") + convert_number(thousand) + " THOUSAND";
	}
	if (hundred) {
		result += (result == "" ? "" : " ") + convert_number(hundred) + " HUNDRED";
	}
	var ones = Array(
		"",
		"ONE",
		"TWO",
		"THREE",
		"FOUR",
		"FIVE",
		"SIX",
		"SEVEN",
		"EIGHT",
		"NINE",
		"TEN",
		"ELEVEN",
		"TWELVE",
		"THIRTEEN",
		"FOURTEEN",
		"FIFTEEN",
		"SIXTEEN",
		"SEVENTEEN",
		"EIGHTEEN",
		"NINETEEN"
	);
	var tens = Array(
		"",
		"",
		"TWENTY",
		"THIRTY",
		"FOURTY",
		"FIFTY",
		"SIXTY",
		"SEVENTY",
		"EIGHTY",
		"NINETY"
	);
	if (tenths > 0 || one > 0) {
		if (!(result == "")) {
			result += " AND ";
		}
		if (tenths < 2) {
			result += ones[tenths * 10 + one];
		}
		else {
			result += tens[tenths];
			if (one > 0) {
				result += "-" + ones[one];
			}
		}
	}
	if (result == "") {
		result = "ZERO";
	}
	return result;
}