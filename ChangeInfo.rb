#!/usr/bin/ruby
# -*- coding: utf-8 -*-

require 'mysql2'
require 'cgi'
require 'date'

data=CGI.new()

bookIndex = data['book_value']

#パスはサーバーで入れてね
#client = 

client.query("set @rownum=0;")
productResults = client.query("SELECT @rownum:=@rownum+1 as ROW_NUM, Name,Status,ReviewName,ReviewPoint,Inpressions,Date FROM test_book;")




print <<-EOS
Content-type: text/html\n\n

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <title>BookList</title>
    <link rel="stylesheet" type="text/css" href="./css/style.css">
    <link rel="stylesheet" type="text/css" href="./css/home-menu.css">
</head>
<body>

<header>
    <div class="global-menu">
        <ul>
            <li style="color: coral; background-color:rgb(241, 241, 241);">Home</li>
            <a href="./BookChart.html"><li>Datas</li></a>
            <a href="./BookChart.html"><li>Helps</li></a>
        </ul>
    </div>
</header>

<div id="bookInfo" class="default">
<form action="./cgi/update_books.rb" id="bookNewData" method="post">
EOS

productResults.each do |productResult|
    if productResult["ROW_NUM"].to_s=="#{bookIndex}" then
        print <<-EOS
        <div name="book_index" value="#{bookIndex}"></div>
        <p>タイトル:<input type="text" name="book_name" value="#{productResult["Name"].to_s}" size="40"></p>
            <p>
                状態:<select name="book_status" value=""#{productResult["Status"].to_s}">
                        <option value="0">未着手</option>
                        <option value="1">読書中</option>
                        <option value="2">読了</option>
                        <option value="3">部分読了</option>
                    </select>
            </p>

            <p>
                <h2>評価</h2>
                評価名:<input type="text" name="book_review_name" value="#{productResult["ReviewName"].to_s}" size="40"><br>
                <input type="range" min="0" max="5" value="#{productResult["ReviewPoint"].to_s}" name="book_review">
                <!-- どうやったら改行できる? -->
            </p>

            <p>
                感想:<br>
                <textarea name="book_impression" rows="4" cols="40">#{productResult["Inpressions"].to_s}</textarea>
            </p>
        EOS
    end
end

print <<-EOS
<input type="submit" value="決定">
<br>
<br>
<br>
<br>
<br>
<br>
<div class="delete-button">
<button  formaction="./cgi/delete_book.rb" type="submit">削除</button>
</div>
</form>

</body>
</html>
EOS

# なぜかtype submitのボタンを作るとInternalServerError吐いた
