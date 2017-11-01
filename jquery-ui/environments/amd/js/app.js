
/*
require(["jquery-ui/widgets/autocomplete"], function(autocomplete) {
	autocomplete({ source: ["one", "Two", "Three"] }, "<input>")
		.element
		.appendTo("body");
});
*/

require(["jquery-ui/widgets/datepicker"], function(datepicker) {
	// console.log(datepicker);
	$("<input>").appendTo("body").datepicker();
	// datepicker({}, "<input>").element.append("body");
});