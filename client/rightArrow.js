/*Template.position.events({
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
});*/
Template.rightArrow.onRendered(function () {
	$('.arrow').draggable({
		stop:function(evt,ui){
			var left = ui.position.left;
			var top = ui.position.top;
			Arrows.update($(this).attr('id'),{$set:{left:left + 'px',top:top + 'px'}})
		}
	})
});

Template.rightArrow.helpers({
	add_fields: function() {
		console.log("ola");
		document.getElementById('myForm').innerHTML = document.getElementById('myForm').innerHTML - '<button type="submit" value="Submit">Submit</button>\r\n';
		document.getElementById('myForm').innerHTML -= '<button type="reset" value="Reset">Reset</button>\r\n';
		document.getElementById('myForm').innerHTML -= '<a class="btn btn-danger moreRules" href="#">Add Rules</a>\r\n';
    	document.getElementById('myForm').innerHTML += '<input type="text" value="" id="rule2" placeholder="Rule 2">\r\n';
    	document.getElementById('myForm').innerHTML += '<button type="submit" value="Submit">Submit</button>\r\n';
		document.getElementById('myForm').innerHTML += '<button type="reset" value="Reset">Reset</button>\r\n';
		document.getElementById('myForm').innerHTML += '<a class="btn btn-danger moreRules" href="#">Add Rules</a>\r\n';
	},
	dbfields: function(){
		return DBfields.find({tableid:this._id});
	}
});

Template.rightArrow.events({
	'dblclick .button': function (event, tmpl) {
		console.log('click');
		event.preventDefault();
		event.stopPropagation();
		var myDiv = document.getElementById("myDiv");
		if (myDiv.style.display === "none") {
    		myDiv.style.display = "";
		} else {
    		myDiv.style.display = "none";
		}
	},
	'click .close': function (event, tmpl) {
		Arrows.remove({_id:this._id});
	},
	'click .moreRules': function (event, tmpl) {
		document.getElementById('myForm').innerHTML += '<input type="text" value="" id="rule2" placeholder="Rule 2">\r\n';
	}
});