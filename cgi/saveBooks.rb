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

# セキュリティ面からデータベースのパス等は消しています　サーバー内で入力してください
# client =

print <<-EOS
"Content-type: text/html\n\n"
'<!DOCTYPE html><html lang="ja">'
'<head>'
'<title>InsertTest1</title>'
'<meta charset="UTF-8" />'
'</head>'
'<body>'
'<p>'
EOS

client.query("insert into test_book values(#{book_name} , '#{book_status}', '#{book_review_name}', '#{book_review}', '#{book_impression}');")

product_results.each do |product_results|
    puts product_results
end

print <<-EOS
'</p>'
'</body>'
'</html>'
EOS
