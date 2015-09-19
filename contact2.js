$("#buttonsubscribe").click(function() {
	$("#subscribeform input,#subscribeform select,#subscribeform textarea").jqBootstrapValidation(
	{
		preventSubmit: true,
		submitSuccess: function($form, event) {
			event.preventDefault(); 
			var email = $("#subscribeform input#subscribeemail").val();  
			var result_id = "subscribeResult";
			console.log(jQuery("#"+"subscribeform").serialize());
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
		}
	});
});