common_menu = {

	init : function() {
		$(".menu_burger img").click(function(){
			var state = $("header .mainmenu");
			if (state.attr("data-state") == 'closed') {
				$("header .mainmenu").addClass("mobilemenu");
				state.attr("data-state", "open");
				$(this).attr("src", $(this).attr("data-closed-src"));
			} else {
				$("header .mainmenu").removeClass("mobilemenu");
				state.attr("data-state", "closed");
				$(this).attr("src", $(this).attr("data-open-src"));
			}
		});
	}

}



function objToString (obj) {
    var str = '';
    for (var p in obj) {
            str += p + '::' + obj[p] + '<br>';
    }
    return str;
}

function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function isEmpty(obj) {
	for(var prop in obj) {
		if(obj.hasOwnProperty(prop))
			return false;
	}

	return true;
}

function validateEmail(email) {
var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(email);
}