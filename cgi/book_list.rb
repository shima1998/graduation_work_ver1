#!/usr/bin/ruby
# -*- coding: utf-8 -*-

require 'mysql2'
require 'cgi'
require 'date'

data=CGI.new()


#パスはサーバーで入れてね
#client = 

productResults = client.query("select * from test_book;")

print <<-EOS
Content-type: text/html\n\n
EOS

print "[\n"
productResults.each do |productResult|
    print "{\n"
    print "\"name\": " + "\"" + productResults["Name"] + "\",\n"
    print "\"status\": " + "\"" + productResults["Status"].to_s + "\"\n"
 #  "\"name\": " はシングルクオートでくくって '"name": 'と書いてもよい
 #  ruby の文字列に関する記述をしらべてみること
 
 #   print productResults["ReviewName"] + "\n"
 #   print productResults["ReviewPoint"].to_s + "\n"
 #   print productResults["Inpresson"].to_s + "\n"
 #   print productResults["Date"].to_s + "\n"
end
# できればヒアドキュメント使いたかったけどヒアドキュメントの中だと演算子使いにくいっぽいからナシで
print "{}]\n"