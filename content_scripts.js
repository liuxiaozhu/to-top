window.onload = function(){
	var ele = document.getElementById('to-top-ele-chrome-ext-lxz');
	if(!ele){
		ele = document.createElement("a");  
        ele.id = "to-top-ele-chrome-ext-lxz";  
        ele.innerText = 'ToTop';
        ele.href = "#";
        ele.style.cssText = "display:flex;flex-direction:column;position:fixed;bottom:0px;right:18px;height:50px;";
        document.body.insertBefore(ele, document.body.firstChild);
	}
}