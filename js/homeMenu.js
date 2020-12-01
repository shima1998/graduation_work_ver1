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
    // parentBookMenu.textContent = "XX";

    let parentNode = document.getElementById("bookMenu1").parentNode;//("node")の親ノードを持ってくる関数、参照ノード
    let referenceID = document.getElementById("bookMenu2");//
    // let newDiv = document.createElement('div'); /*div要素を生成*/
    // let childBookMenu = document.getElementById('bookMenu1');
    console.log(parentNode);//bodyが返ってくる
    console.log(parentNode.textContent);//直打ちした文字が返ってくる
    // parentNode.insertBefore(parentBookMenu, referenceID);
    // document.getElementById("bookMenu1").appendChild(parentBookMenu);//これで既存のノードの直下に要素追加は可能
    let elm = "<div id=\"bookMenu2\" class=\"menu-box0\">ウルトラマン</div>";//追加したいHTML要素
    referenceID.insertAdjacentHTML('afterbegin', elm);//この挙動でうまくいく(UIはズレるが)　こっちを回した方がうまくいくのではないか?
};

// let parentBookMenu = document.createElement("p"); /*id名aのdivを取得*/
//     parentBookMenu.textContent = "ラーメン";

//     // let newDiv = document.createElement('div'); /*div要素を生成*/
//     // let childBookMenu = document.getElementById('bookMenu1');

//     document.body.appendChild(parentBookMenu);

// こちら参考にさせていただきました。
//　https://www.yutaliberty.com/2019/04/11/prog/1541/