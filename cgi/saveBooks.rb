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
# client = 

product_results = client.query("select * from test_book;")

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

product_results.each do |product_results|
   puts product_results
end

print <<-EOS
Test
</p>
</body>
</html>
EOS
