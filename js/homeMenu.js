//foreachじゃなくてforで回す方がいいと思う
//おそらく今回の関数は流用はできない

window.addEventListener("load",function(){
    let XHR = new XMLHttpRequest();

    XHR.open("GET", "./cgi/get_progress.rb", true);//タダの設定　

    XHR.onreadystatechange = function(){//データが帰ってきたらどうするか
		if(XHR.readyState == 4){
            // GETした結果を表示する?
            let parentBookMenu1 = document.getElementById('bookMenu1').parentNode; /*id名aのdivを取得*/
            let newDiv = document.createElement('div'); /*div要素を生成*/
            

		};
    };//最初は素通り　帰ってくるタイミングはこちらで決められない

    XHR.send(null);

}, false); 

function createNewElement(){
    let parentBookMenu = document.createElement("p"); //ノード作成
    parentBookMenu.textContent = "XXXXXXXXXXXXXXXXX";

    let parentNode = document.getElementById("bookMenu1").parentNode;//("node")の親ノードを持ってくる関数
    let referenceID = document.getElementById("bookMenu1");//
    // let newDiv = document.createElement('div'); /*div要素を生成*/
    // let childBookMenu = document.getElementById('bookMenu1');
    parentNode.insertBefore(parentBookMenu, referenceID);
};

// let parentBookMenu = document.createElement("p"); /*id名aのdivを取得*/
//     parentBookMenu.textContent = "ラーメン";

//     // let newDiv = document.createElement('div'); /*div要素を生成*/
//     // let childBookMenu = document.getElementById('bookMenu1');

//     document.body.appendChild(parentBookMenu);

// こちら参考にさせていただきました。
//　https://www.yutaliberty.com/2019/04/11/prog/1541/