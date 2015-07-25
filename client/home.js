Template.home.events ({
	'dblclick .schema': function (event, tmpl) {
		event.preventDefault();
		event.stopPropagation();
		if(event.target.className === 'container-fluid schema'){
			var id = Positions.insert({name:'New Table', left:(event.pageX + 280) + 'px', top:(event.pageY) + 'px'});
			Session.set('editing_table',id);
		}
	},
	'click .rightArrow': function (event, tmpl) {
		event.preventDefault();
		event.stopPropagation();
		if(event.target.className === 'container-fluid schema'){
			var id = Arrows.insert({name:'New Arrow', left:(event.pageX) + 'px', top:(event.pageY) + 'px'});
			Session.set('editing_table',id);
		}
	},
});
Template.home.helpers({
	positions:function () {
		return Positions.find();
	},
	arrows:function (){
		return Arrows.find();
	},
	rightArrowType:function (){
		return Arrows.find({type:'Right Arrow'});
	},
	leftArrowType:function (){
		return Arrows.find({type:'Left Arrow'});
	},
	upArrowType:function (){
		return Arrows.find({type:'Up Arrow'});
	},
	downArrowType:function (){
		return Arrows.find({type:'Down Arrow'});
	}
});