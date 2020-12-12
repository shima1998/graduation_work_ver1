window.addEventListener("load", function(){
	document.getElementById("sendData").addEventListener("click", function(){
		// FoemDataオブジェクトに要素セレクタを渡して宣言する
		let formDatas = document.getElementById("bookData");
		let mixedDatas = new FormData(formDatas);//こういうクラスがあるのか

		// appendメソッドでキーとデータの組をセットする
		// append("キー(FORMで云うところのname属性値)",  "データ")でデータをセットできる
		// appendではデータは追加となる
		// mixedDatas.append("filename",  "test.txt");
		// mixedDatas.append("filesize",  "10,154B");
		//↑5行は今はいらないかも

		// XHRの宣言
		let XHR = new XMLHttpRequest();

		// openメソッドにPOSTを指定して送信先のURLを指定します
		XHR.open("POST", "./cgi/save_books.rb", true);

		// sendメソッドにデータを渡して送信を実行する
		XHR.send(mixedDatas);

		// サーバの応答をonreadystatechangeイベントで検出して正常終了したらデータを取得する
		XHR.onreadystatechange = function(){
			if(XHR.readyState == 4 && XHR.status == 200){
				// POST送信した結果を表示する
				document.getElementById("responseDB").innerHTML = XHR.responseText;
			}
		};

		document.getElementById("showDB").innerHTML = XHR.open("get", "./cgi/show_books.rb");

	} ,false);
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