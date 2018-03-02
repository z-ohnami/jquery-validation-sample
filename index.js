import 'jquery-validation';
import $ from 'jquery';

$(() => {
	$.validator.addMethod('mail_format', function(value, element) {
		return this.optional(element) || /@/.test(value);
	}, 'メールアドレスの形式が間違っています');

	$('form').validate({
	    rules: {
	        telephone: {
	            required: true
	        },
	        mail: {
	            required: true,
	        	'mail_format' : true
	        }
	    },
	    messages: {
	        telephone: {
	            required: "電話を入力してください"
	        },
	        mail: {
	            mail_format: "メールがおかしいよ"
	        }
	    }
	})
})
