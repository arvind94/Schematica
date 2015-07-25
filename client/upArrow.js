Template.upArrow.onRendered(function () {
	$('.arrow').draggable({
		start: function (event, ui) {
            var left = parseInt($(this).css('left'),10);
            left = isNaN(left) ? 0 : left;
            var top = parseInt($(this).css('top'),10);
            top = isNaN(top) ? 0 : top;
            recoupLeft = left - ui.position.left;
            recoupTop = top - ui.position.top;
        },
        drag: function (event, ui) {
            ui.position.left += recoupLeft;
            ui.position.top += recoupTop;
        },
		stop:function(evt,ui){
			var left = ui.position.left;
			var top = ui.position.top;
			Arrows.update($(this).attr('id'),{$set:{left:left + 'px',top:top + 'px'}})
		}
	})
});
Template.upArrow.events({
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