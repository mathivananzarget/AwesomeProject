function check(){
	var initTime= Date.now();
	var timeInt=1;
	setInterval(function(){
			if(initTime+(timeInt*60000)<=Date.now()){
				console.log("success");
			}

	},300);
}

check();