Template.position.events({
	'click .icon-tasks': function (event, tmpl) {
		event.preventDefault();
		event.stopPropagation();
		Session.set('editing_tablename',this._id);
	},
	'click .addfield': function (event, tmpl) {
		event.preventDefault();
		event.stopPropagation();
		DBfields.insert({name:'New Field',tableid:this._id});
		Session.set('editing_tablename',this._id);
	},
	'click .close': function (event, tmpl) {
		Positions.remove({_id:this._id});
	},
	'keyup .tablename': function(event, tmpl){
		event.preventDefault();
		event.stopPropagation();
		if(event.which ===13){
			Positions.update(this._id,{$set:{name:tmpl.find('.tablename').value}});
			Session.set('editing_tablename',null);
		}
	}
});
Template.position.onRendered(function () {
	$('.modal').draggable({
		handle:'.modal-header',
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
			Positions.update($(this).attr('id'),{$set:{left:left + 'px',top:top + 'px'}})
		}
	})
});
Template.position.helpers({
	editing_tablename: function(){
		return Session.equals('editing_tablename',this._id)
	},
	dbfields: function(){
		return DBfields.find({tableid:this._id});
	}
});