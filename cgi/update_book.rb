#!/usr/bin/ruby
# -*- coding: utf-8 -*-

require 'mysql2'
require 'cgi'
require 'date'

# 取得した値を使い、本の詳細情報を変更するＣＧＩ

data=CGI.new()

bookIndex = data['book_index']
name = data['book_name']
status = data['book_status']
reviewName = data['book_review_name']
reviewPoint = data['book_review']
impressions = data['book_impression']

today = Date.today

#パスはサーバーで入れてね
#client = 


client.query("set @index=0;")
client.query("update test_book set ID=(@index := @index + 1);")
client.query("update test_book set Name=\"#{name}\", Status=#{status}, ReviewName=\"#{reviewName}\", ReviewPoint=\"#{reviewPoint}\", Impressions=\"#{impressions}\" where ID=#{row};")
productResults = client.query("SELECT * FROM test_book;")


print <<-EOS
Content-type: text/html\n\n

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <title>Update</title>
</head>
<body>

<header>
</header>
EOS



productResults.each do |productResult|
   if productResult["ID"].to_s=="#{bookIndex}" then
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
<br>
<p>リロードはしないでください!</p>
<a href="../HomeMenu.html"><button>メニューに戻る</button></a>
</p>
</body>
</html>
EOS
