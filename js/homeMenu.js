//foreachじゃなくてforで回す方がいいと思う
//おそらく今回の関数は流用はできない

window.addEventListener("load",function(){
    let XHR = new XMLHttpRequest();

    XHR.open("GET", "./cgi/book_list.rb", true);//タダの設定　

    XHR.onreadystatechange = function(){//データが帰ってきたらどうするか
      if(XHR.readyState == 4){
        // GETした結果を表示する
        let bookLists = JSON.parse(XHR.responseText);
        
        bookLists.forEach((bookList, index) => {
          let newDivs = createNewTag("div", "bookStatus", index, "book-menu0", null);

          newDivs.forEach((newDiv) => {
            let newP0 = createNewTag("p", null, null, null, null);
            newP0.textContent = bookList.name;
            newDiv.appendChild(newP0);
            let newP1 = createNewTag("p", null, null, null, null);
            let bookStatus;

            switch(bookList.status){
              case 0:
                break;
              case 1:
                break;
              case 2:
                break;
              case :
                break;
                
            }

            newP1.textContent = "状態:" + bookStatus + "□" + bookList.reviewName + ":" + bookList.reviewPoint
          });
        });
		};
    };//最初は素通り　帰ってくるタイミングはこちらで決められない

    XHR.send(null);

}, false); 

function createNewTag(newTagName, newId, indexId, newClass, indexClass){
  let newTag = document.createElement(newTagName);

  if(newId != null){
    if(indexId == null){//nullは文字列である必要がありそう
      newTag.setAttribute("id", newId);
    } else {
      newTag.setAttribute("id", newId + indexId);
    };
  };
  
  if(newClass != null){
    if(indexClass == null){//nullは文字列である必要がありそう
      newTag.setAttribute("class", newClass);
    } else {
      newTag.setAttribute("class", newClass + indexClass);
    };
  };

  // console.log(newId + indexId);

  return newTag;
};


function createNewElementTest0(){
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

function createNewElementTest1(){//これで動きます。
  let element0 = createNewTag("div", "test", 3, "menu-box0", null);
  let element1 = createNewTag("p", "testP", null, "testP", null);
  let text0 = document.createTextNode("It's showtime.")

  console.log(element0);

  element1.appendChild(text0);
  element0.appendChild(element1);

  console.log(element0);
  console.log(element1);
 
  // let parentNode = document.getElementById("bookMenu1").parentNode;
  document.getElementById("button0").appendChild(element0);
};


// let parentBookMenu = document.createElement("p"); /*id名aのdivを取得*/
//     parentBookMenu.textContent = "ラーメン";

//     // let newDiv = document.createElement('div'); /*div要素を生成*/
//     // let childBookMenu = document.getElementById('bookMenu1');

//     document.body.appendChild(parentBookMenu);

// こちら参考にさせていただきました。
//　https://www.yutaliberty.com/2019/04/11/prog/1541/
//  http://4geek.net/how-to-manipulate-html-dom-with-javascript/