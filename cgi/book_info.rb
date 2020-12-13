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

productResults.each_with_index do |productResult, index|
    if index==bookIndex
end
