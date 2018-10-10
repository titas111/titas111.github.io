var button=document.getElementById("mButton");
var text=document.getElementById("mText");
var ul=document.querySelector("ul");

function isTextEmpty()
{
	return text.value.length===0;
}

function addNewElement()
{
	var li=document.createElement("li");
	li.appendChild(document.createTextNode(text.value));
	ul.appendChild(li);
	text.value="";
}

function onEnterPress(event){
	if (event.keyCode===13 && !isTextEmpty()) 
	{
		addNewElement();
	}	
}

function onButtonClick()
{
	if (!isTextEmpty()) 
	{
		addNewElement();
	}	
}

button.addEventListener("click", onButtonClick);
text.addEventListener("keypress", onEnterPress);