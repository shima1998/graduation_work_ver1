//foreachじゃなくてforで回す方がいいと思う
//おそらく今回の関数は流用はできない
//JSON.parseに渡すデータに\rや\nが入っているとエラーが起きる

window.addEventListener("load",function(){
    let XHR = new XMLHttpRequest();

    XHR.open("GET", "./cgi/book_list.rb", true);//タダの設定　

    XHR.onreadystatechange = function(){//データが帰ってきたらどうするか
      if(XHR.readyState == 4){
        // GETした結果を表示する
        // console.log(XHR.responseText);
        // console.log(JSON.stringify(XHR.responseText));
        let bookLists = JSON.parse(XHR.responseText);//JSON.parseに渡すデータに\rや\nが入っているとエラーが起きる

        bookLists.forEach((bookList, index) => {
          let listForm = createNewForm("./cgi/book_list.rb", "post", null, null, null, null, null, null, index);
          let listDivs = createNewTag("div", "bookList", index, "menu-box0", null, "book_list", null, index);
          let newH2 = createNewTag("h2", null, null, null, null, null, null, index);

          let listStatus = createNewTag("p", null, null, null, null, null, null, index);
          newP0.textContent = bookList.name;//本のタイトル
          newDivs.appendChild(newP0);
          let listReview = createNewTag("p", null, null, null, null, null, null, index);
          let bookStatus;

          switch(bookList.status){
            case "0":
              bookStatus = "未着手";
              break;
            case "1":
              bookStatus = "読書中";
              break;
            case "2":
              bookStatus = "読了";
              break;
            case "3":
              bookStatus = "部分読了";
              break;
          };

            newP1.textContent = "状態:" + bookStatus + "□" + bookList.reviewName + ":" + bookList.reviewPoint;

            newDivs.appendChild(newP0);
            newDivs.appendChild(newP1);

            newForm.appendChild(newDivs);
            
            document.getElementById("bookLists").appendChild(newForm);
        });
      };
      
    };//最初は素通り　帰ってくるタイミングはこちらで決められない
    XHR.send(null);
}, false); 



//課題はクラスが1個しか適用できんこと
function createNewTag(newTagName, newId, indexId, newClass, indexClass, newName, indexName, newValue){
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

  if(newName != null){
    if(indexName == null){//nullは文字列である必要がありそう
      newTag.setAttribute("name", newName);
    } else {
      newTag.setAttribute("name", newClass + indexName);
    };
  };

  newTag.setAttribute("value", newValue);

  // console.log(newId + indexId);

  return newTag;
};

function createNewForm(actionPath, method, newId, indexId, newClass, indexClass, newName, indexName, newValue){
    let newTag = document.createElement("form");
  
    newTag.setAttribute("action", actionPath);
    newTag.setAttribute("method", method);

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

    if(newName != null){
        if(indexName == null){//nullは文字列である必要がありそう
          newTag.setAttribute("name", newName);
        } else {
          newTag.setAttribute("name", newClass + indexName);
        };
      };
  
    newTag.setAttribute("value", newValue);
  
    // console.log(newId + indexId);
  
    return newTag;
};


// こちら参考にさせていただきました。
//　https://www.yutaliberty.com/2019/04/11/prog/1541/
//  http://4geek.net/how-to-manipulate-html-dom-with-javascript/