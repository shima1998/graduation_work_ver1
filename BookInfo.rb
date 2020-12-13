#!/usr/bin/ruby
# -*- coding: utf-8 -*-

require 'mysql2'
require 'cgi'
require 'date'

data=CGI.new()

bookIndex = data['book_list']

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
EOS

puts "#{bookIndex}"

productResults.each do |productResult|
    if productResult["ROW_NUM"].to_s=="#{bookIndex}" then
        print "<h2>#{productResult["Name"].to_s}</h2>"
        
        case productResult["Status"]
        when 0 then
            print "<p>状態: 未着手</p>"
        when 1 then
            print "<p>状態: 読書中</p>"
        when 2 then
            print "<p>状態: 読了</p>"
        when 3 then
            print "<p>状態: 部分読了</p>"
        else
            print "<p>error</p>"
        end

        print <<-EOS
            <p>#{productResult["ReviewName"].to_s}: #{productResult["ReviewPoint"].to_s}</p>
            <h2>感想</h2>
            <p>#{productResult["Inpressions"].to_s}</p>
        EOS
    end
end

print <<-EOS

<form action="./ChangeInfo.rb" method="post">
<button type="submit" class="submit-book" name="book_value" alt="編集する" value="#{bookIndex}">
編集する
</button>
</form>

</div>
<footer>
</footer>
</body>
</html>
EOS
