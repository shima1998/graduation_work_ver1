//addEventListener("click", function()~はfor文で定義できるのか試した　いけた

window.addEventListener("load", function(){
    for(let i = 0;i < 4; i++){
        document.getElementById("sendData" + i).addEventListener("click", function(){
            // FoemDataオブジェクトに要素セレクタを渡して宣言する
            let ID = document.getElementById("Data" + i);
            let txt = "OK";


            console.log(ID);
            
            ID.innerHTML = txt;

            console.log(ID);

            

        } ,false);
    };
}, false);

// 以下を参考にさせていただきました
// https://analogstd.com/pc/javascript/method-post-with-xhr/

function showDB(id, path){
	let XHR = new XMLHttpRequest();
	XHR.open("GET", path, true);

	XHR.onreadystatechange = function(){
		if(XHR.readyState == 4){
			// GETした結果を表示する?
			document.getElementById(id).innerHTML = XHR.responseText;
		}
	};

	XHR.send(null);
	// document.getElementById(id).innerHTML = XHR.responseText;
};