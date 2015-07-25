Template.leftArrow.onRendered(function () {
	$('.arrow').draggable({
		stop:function(evt,ui){
			var left = ui.position.left;
			var top = ui.position.top;
			Arrows.update($(this).attr('id'),{$set:{left:left + 'px',top:top + 'px'}})
		}
	})
});
Template.leftArrow.events({
	'click .button': function (event, tmpl) {
		console.log('click');
		event.preventDefault();
		event.stopPropagation();
		$("#form").dialog('open');
	},
	'click .close': function (event, tmpl) {
		Arrows.remove({_id:this._id});
	}
});