Ractive.DEBUG = true;
var contact_form = new Ractive({

	el: '#contact_form',
	template: '#contact_form_template',
	data: {
		state : 'form',
		errors : {},
		error_message : "",
		has_errors : false,
		is_sending : false,
		userinfo : {
			person : '',
			email : '',
			message : ''
		}
	}

});

contact_form.on({

	try_send : function(ev) {

		var that = contact_form;

		if (that.get('is_sending')) {
			return;
		}

		u = that.get('userinfo');
		that.set("errors", {});

		if (u.person == '') {
			that.set("errors.person", true);
		}
		if ((u.email == '') || (!validateEmail(u.email))) {
			that.set("errors.email", true);
		}

		e = that.get("errors");
		if (isEmpty(e)) {
			that.set("has_errors", false);
		} else {
			that.set("has_errors", true);
			return;
		}

		// Initialize Parse with your Parse application & javascript keys
		Parse.initialize("tiBrH6Z3tZVgMKvwM5XgbITuQR8LQzGTFXOeA5oA", "sTY8g1H9LseDmq2JGXa007oAvMYduj7IfUAHcyFh");

		var data = { 
			name: u.person, 
			email: u.email,
			message: u.message
		}


		that.set("is_sending", true);
		Parse.Cloud.run("sendEmail", data, {
			success: function(object) {
				that.set("is_sending", false);
				that.set("state", "success");
				console.log('all done');
			},

			error: function(object, error) {
				that.set("is_sending", false);
				that.set("error_message", error);
				that.set("state", "error");
				console.log('error: ' + error);
			}
		});


	},

	return_to_form : function(ev) {
		contact_form.set("state", "form");
	},

	another_one : function(ev) {
		contact_form.set("userinfo.person", "");
		contact_form.set("userinfo.email", "");
		contact_form.set("userinfo.message", "");
		contact_form.set("state", "form");
	}

});


$(function() {

	common_menu.init();


});