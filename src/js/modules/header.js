

document.addEventListener("DOMContentLoaded", function(){
	document.querySelector(".mobile__nav-btn").addEventListener("click", function(){
		document.querySelector("header").classList.toggle("open");
		document.body.classList.toggle('no-scroll');
	})
})
document.addEventListener("DOMContentLoaded", function(){
	document.querySelector(".button__header").addEventListener("click", function(){
		document.querySelector(".modal").classList.toggle("open");
		document.body.classList.toggle('no-scroll');
	})
})

document.addEventListener("DOMContentLoaded", function(){
	document.querySelector(".close__modal-btn").addEventListener("click", function(){
		document.querySelector(".modal").classList.remove("open");
		document.body.classList.remove('no-scroll');
	})
})


// -------------------------------------------------ОТПРАВКА ФОРМЫ-------------------------------------------


// document.addEventListener('DOMContentLoaded', function(){
// 	const form = document.getElementById('form_message');
// 	form.addEventListener('submit', formSend);

// 	async function formSend(e){
// 		e.preventDefault();
	
// 		let error = formValidate(form);
// 		let formData = new formData(form);

// 		alert(formData);
// 		form.classList.add("_sending");
// 		let responce = await fetch ('sendmail.php', {
// 			method: "POST",
// 			body: formData
// 		});
// 		if (responce.ok) {
// 			let result = await responce.json();
// 			alert(result.message);
// 			formPreview.innerHTML = '';
// 			form.reset();
// 		}
// 		else{
// 			alert("Ошибка");
// 		}
	
// 	}
	

// 	function formValidate(form){
// 		let error = 0;
		
// 		let formReq = document.querySelectorAll('.__req')
	
// 		for (let index = 0; index < formReq.length; index++){
// 			const input = formReq[index];
// 			formRemoveError(index);


// 		if (input.classList.contains('_email')){
// 			if (emailTest(input)){
// 				formAddError(input);
// 				error++;
// 			}
// 		}else {
// 			if (input.value === ''){
// 				alert("dasdas");
// 				formAddError(input);
// 				error++;
// 			}
// 		}
// 		}
// 	}

// 	function formAddError(input){
// 		alert("dasdas");
// 		input.classList.add('_error');
// 	}
// 	function formRemoveError(input){
		
// 		input.classList.remove('_error');
// 	}
// 	function emailTest(input){
// 		return !/^\w+([\.-]?w+)*@\w+([\.-]?\w+)*(\. \w{2,8})+$/.test(input.value);
// 	}
// });


