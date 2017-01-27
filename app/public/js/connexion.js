$(function () {

	$.getJSON('connexion_api', addData);

	$('#info_connexion').hide();
	$('#error_login').hide();

	connexionData = '';

	function addData (data){
		connexionData = data;
		console.log(connexionData);
	};

	$('.connexion-form').submit(function(e){
		e.preventDefault(); //roald page
		$.post('connexion_api', {
			login : $('#connexion-form-login').val(),
			motPass : $('#connexion-form-motPass').val()
		}, addData);
		effacer();
	});

	function effacer () {
	  $(':input','.connexion-form')
	   .not(':button, :submit, :reset, :hidden')
	   .val('')
	   .removeAttr('checked')
	   .removeAttr('selected');
	}

	$('#valider').on('click', function(e){
		$('#error_login').hide();
		login = $('#connexion-form-login').val();
		motPass = $('#connexion-form-motPass').val();
		$.each(connexionData, function(key, item){
			if (item.login == login && item.motPass == motPass) {
				console.log('est valide')
				location.href='/feedback';
			}else if(item.login != login || item.motPass != motPass ){
				$('#error_login').show();
			}
		});
	});

	$('.connexion-messages').on('click', function(e){
		if(e.target.className == 'glyphicon glyphicon-remove'){
			$.ajax({
				url: 'connexion_api/'  + e.target.id,
				type: 'DELETE',
				success: updateConnexion
			}); //ajax
		}	// the target is delete button
	}); //feedback messages

	function updateConnexion(){
		data = connexionData;
		var output ='';
		console.log(data)
		$.each(data, function(key, item){

		output += '		<div class="connexion-item item-list media-list">';
		output += '		  <div class="connexion-item media">';
		output += '		  <div class="media-left"><button class="connexion-delete btn btn-xs btn-danger"><span id="'+key+'" class="glyphicon glyphicon-remove"></span></button></div>';
		output += '		    <div class="connexion-info media-body">';
		output += '		      <div class="connexion-login"> Login : '+ item.login +'</div>';
		output += '		      <div class="connexion-motPass"> Mot de pass : '+ item.pass +'</div>';
		output += '		    </div>';
		output += '		  </div>';
		output += '		</div>';

		});

		$('.connexion-messages').html(output);
	}
});
