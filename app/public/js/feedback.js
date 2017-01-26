$(function () {

	var connexionData;
	$('.feedback-form').hide();
	$('#info_client').hide();

	$.getJSON('api', addData);

	function addData (data){
		connexionData = data
	};


	$('.feedback-form').submit(function(e){
		e.preventDefault(); //roald page
		$.post('api', {
			nom : $('#feedback-form-nom').val(),
			prenom : $('#feedback-form-prenom').val(),
			mail : $('#feedback-form-mail').val(),
			telephone : $('#feedback-form-telephone').val(),
			typeDemande : $("#feedback-form-typeDemande option:selected").text(),
			demande : $('#feedback-form-demande').val()
		}, connexionData);
		effacer();
	}); 

	$('.feedback-messages').on('click', function(e){
		if(e.target.className == 'btn btn-default pull-right'){
			//console.log('modifier');
			telephone = $('#appelle-form-num').val();
			v = 0
			console.log(connexionData);
			$('.feedback-form').show();
			$('#info_client').hide();
			$.each(connexionData, function(key, item){
				if(item.telephone == telephone && v==0){
					v = v+1;
					$('#feedback-form-nom').val(item.nom);
					$('#feedback-form-prenom').val(item.prenom);
					$('#feedback-form-mail').val(item.mail);
					$('#feedback-form-telephone').val(item.telephone);
					$('#feedback-form-typeDemande').val(item.typeDemande);
					$('#feedback-form-demande').val(item.demande);
					$('.feedback-form').show();
					$('#info_client').hide();
				}
			});
		}	// the target is delete button
	}); //feedback messages

	$('.appelle-form').submit(function(e){
		e.preventDefault(); //roald page
		//console.log(connexionData);
		num = $('#appelle-form-num').val();
		id = false;
		$.each(connexionData, function(key, item){
			if(num == item.telephone){
				id = true;
				//console.log(item.telephone+ ' oui ');
				$('#info_client').show();
				$('.feedback-form').hide();
				updateFeedback(connexionData);
				return;
			}
		});

		if (!id) {
			$('.feedback-form').show();
			$('#info_client').hide();
			$('#feedback-form-telephone').val(num);
		}
	});

	function effacer () {
	  $(':input','.feedback-form')
	   .not(':button, :submit, :reset, :hidden')
	   .val('')
	   .removeAttr('checked')
	   .removeAttr('selected');
	}

	$('.feedback-messages').on('click', function(e){
		if(e.target.className == 'glyphicon glyphicon-remove'){
			$.ajax({
				url: 'api/'  + e.target.id,
				type: 'DELETE',
				success: updateFeedback
			}); //ajax
		}	// the target is delete button
	}); //feedback messages

	function updateFeedback(data){
		var output ='';
		var output_1 = '';
		var v = 0;
		num = $('#appelle-form-num').val();
		//console.log(data)
		//console.log(num)
		$.each(data, function(key, item){
			if (num == item.telephone) {
				v = v +1;
				output += '		<div class="feedback-item item-list media-list">';
				output += '		  <div class="feedback-item media">';
				output += '		  <div class="media-left"><button class="feedback-delete btn btn-xs btn-danger"><span id="'+key+'" class="glyphicon glyphicon-remove"></span></button></div>';
				output += '		    <div class="feedback-info media-body">';
				output += '		      <div class="feedback-nom"> Nom : '+ item.nom +'</div>';
				output += '		      <div class="feedback-prenom"> Prénom : '+ item.prenom +'</div>';
				output += '		      <div class="feedback-mail"> Mail : '+ item.mail +'</div>';
				output += '		      <div class="feedback-telephone"> Télephone : '+ item.telephone +'</div>';
				output += '		      <div class="feedback-typeDemande"> Type Demande : '+ item.typeDemande +'</div>';
				output += '		      <div class="feedback-demande"> Demande : '+ item.demande +'</div>';
				output += '		    </div>';
				output += '		  </div>';
				output += '			<button type="submit" id="modifier"  class="btn btn-default pull-right">Modifer</button>';
				output += '		</div>';

				if(v == 1){
					$('.feedback-messages').html(output);
				}

				return true;
			}
		});
	}
});