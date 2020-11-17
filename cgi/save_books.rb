#!/usr/bin/ruby
# -*- coding: utf-8 -*-

require 'mysql2'
require 'cgi'

data=CGI.new()

name = data['book_name']
status = data['book_status']
reviewName = data['book_review_name']
reviewPoint = data['book_review']
impressions = data['book_impression']

#パスはサーバーで入れてね
#client = 

productResults = client.query("select * from test_book;")

print <<-EOS
Content-type: text/html\n\n
<!DOCTYPE html><html lang="ja">
<head>
<title>InsertTest1</title>
<meta charset="UTF-8" />
</head>
<body>
<p>
EOS

client.query("insert into test_book values('#{name}', #{status}, '#{reviewName}', #{reviewPoint}, '#{impressions}');")

productResults.each do |productResults|
   puts productResults
end

print <<-EOS
<br>
<p>リロードはしないでください!</p>
<a href="../HomeMenu.html"><button>メニューに戻る</button></a>
</p>
</body>
</html>
EOS
