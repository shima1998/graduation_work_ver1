#!/usr/bin/ruby
# -*- coding: utf-8 -*-

require 'mysql2'
require 'cgi'
require 'date'

data=CGI.new()

#パスはサーバーで入れてね
#client = 

client.query("set @index=0;")
client.query("update test_book set ID=(@index := @index + 1);")
# productResults0 = client.query("SELECT * FROM test_book;")
countTotalBooks = client.query("select count(id) from test_book;")
countFinishedBooks = client.query("select count(Status) from test_book where Status>=2;")

countTotalBooks.each do |Result|

countFinishedBooks

print <<-EOS
Content-type: text/html\n\n

    [\n
    {\n
    "total": "#{countTotalBooks["count(id)"].to_s}",\n
    "finished": "#{countFinishedBooks["count(Status)"].to_s}"\n
    }\n
    ]\n
EOS

# "\"name\": " はシングルクオートでくくって '"name": 'と書いてもよい
# ruby の文字列に関する記述をしらべてみること

#データを一つ一つ取り出すにはJSONを使っていく