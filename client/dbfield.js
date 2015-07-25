Template.dbfield.events({
	'click .icon-lock': function (event, tmpl) {
		event.preventDefault();
		event.stopPropagation();
		Session.set('editing_field',this._id);
	},
	'keyup .efield': function(event, tmpl){
		event.preventDefault();
		event.stopPropagation();
		if(event.which ===13){
			DBfields.update(this._id,{$set:{name:tmpl.find('.efield').value}});
			Session.set('editing_field',null);
		}
	},
	'click .close': function (event, tmpl) {
		DBfields.remove({_id:this._id});
	}
});
Template.dbfield.helpers({
	editing_field: function(){
		return Session.equals('editing_field',this._id)
	}
});
