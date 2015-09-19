$(function () { 
	$("#buttonsubscribe").click(function() {
		// $("#subscribeform input,#subscribeform select,#subscribeform textarea").jqBootstrapValidation(
		// {
			preventSubmit: true,
			submitSuccess: function($form, event) {
				event.preventDefault(); 
				var email = $("#subscribeform input#subscribeemail").val();  
				var result_id = "subscribeResult";
				$.ajax({
					url:     "form.php",
					type:     "POST",
					dataType: "html",
					data: jQuery("#"+"subscribeform").serialize(), 
					success: function() {
						document.getElementById(result_id).innerHTML = "<p>Ваши данные успешно переданы. Оставайтесь на связи.</p>";
						$('#subscribeform').trigger("reset");
					},
					error: function() {
						document.getElementById(result_id).innerHTML = "<p>Возникла ошибка при отправке формы. Попробуйте еще раз</p>";
						$('#subscribeform').trigger("reset");
					}
				});
				return true;
			}
		// });
	});

$("#buttonContact").click(function() {
	$("#contactForm input,#contactForm select,#contactForm textarea").jqBootstrapValidation(
	{
		preventSubmit: true,
		submitSuccess: function($form, event) {
			event.preventDefault(); 
			var name = $("#contactForm input#contactName").val();  
			var telephone = $("#contactForm input#contactTel").val();
			var email = $("#contactForm input#contactEmail").val();
			var message = $("#contactForm input#contactMessage").val();
			var result_id = "contactResult";
			$.ajax({
				url:     "form.php",
				type:     "POST",
				dataType: "html",
				data: jQuery("#"+"contactForm").serialize(), 
				success: function() {
					document.getElementById(result_id).innerHTML = "<p>В течение 5 минут эксперт свяжется с вами и БЕСПЛАТНО предоставит план избавления от долгов</p>";
					$('#contactForm').trigger("reset");
				},
				error: function() {
					document.getElementById(result_id).innerHTML = "<p>Возникла ошибка при отправке формы. Попробуйте еще раз</p>";
					$('#contactForm').trigger("reset");
				}
			});
		}
	});
});

});