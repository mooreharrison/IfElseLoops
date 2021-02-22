var containerEle = document.body.querySelector(".container");
var btn = document.body.querySelector(".btn");
var animals = ["dog", "fish", "cat", "shark", "cat", "dog"];

function generate(){
	for (var i=0; i<animals.length;i++){
		var ele=document.createElement("div");
		var txt=animals[i];
		if(txt==="dog"){
			ele.innerHTML="borf borf";
		}else if(txt==="cat"){
			ele.innerHTML="I'm a cat";
		}else{
			ele.innerHTML="I'm an animal";
		}
		containerEle.appendChild(ele);
	}
}

btn.addEventListener("click",function(){
	containerEle.innerHTML="";
	animals.sort(function(a, b){return 0.5 - Math.random()});
	generate();
})

generate();