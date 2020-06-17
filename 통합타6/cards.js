 $(document).ready(function(){
$(document).on('click', 'cards a', function(event){
history.pushState(null, null, event.target.href);
$('cards').load(event.target.href);
event.preventDefault();
})
 });
