Template.navigation.events({
	'click .node': function (event, tmpl) {
		event.preventDefault();
		event.stopPropagation();
		var id = Positions.insert({name:'New Table', left:(event.pageX + 280) + 'px', top:(event.pageY) + 'px'});
		Session.set('editing_table',id);
	},
	'click .rightArrow': function (event, tmpl) {
		event.preventDefault();
		event.stopPropagation();
		var id = Arrows.insert({type:'Right Arrow'});
		Session.set('editing_table',id);	
	},
	'click .leftArrow': function (event, tmpl) {
		event.preventDefault();
		event.stopPropagation();
		var id = Arrows.insert({type:'Left Arrow'});
		Session.set('editing_table',id);	
	},
	'click .upArrow': function (event, tmpl) {
		event.preventDefault();
		event.stopPropagation();
		var id = Arrows.insert({type:'Up Arrow'});
		Session.set('editing_table',id);	
	},
	'click .downArrow': function (event, tmpl) {
		event.preventDefault();
		event.stopPropagation();
		var id = Arrows.insert({type:'Down Arrow'});
		Session.set('editing_table',id);	
	},
});
Template.navigation.firstvar = function () {
	return "First var";
}