var button = document.getElementById("button1");
var input = document.getElementById("input1");
var list = document.getElementById("list");

function addToList(){
	/*debugger;*/
	var li = document.createElement("li");
	var div = document.createElement("div");
	div.className = "done";
	div.classList.add("listItem");
	div.classList.toggle("done");
	div.onclick = doneToggle;
	li.id = input.value;
		div.appendChild(document.createTextNode(input.value + " "));
		li.appendChild(div);
		var deleteButton = document.createElement("button");
		deleteButton.innerHTML = "Delete";
		deleteButton.className = "delete";
		deleteButton.id = "delete"+input.value;
		deleteButton.onclick = deleteItem;
		li.appendChild(deleteButton)
		list.appendChild(li);
		input.value = "";
}


function doneToggle(){
event.target.classList.toggle("done");
}

function deleteItem(){
	event.target.parentElement.remove();
}

button.addEventListener("click", function(){
	if(input.value.length > 0){
		addToList();
	}
})

input.addEventListener("keypress", function(event){
	if(input.value.length > 0 && event.keyCode === 13){
		addToList();
	}
})

