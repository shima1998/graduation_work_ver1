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
    print "\"name\": " + "\"" + productResult["Name"].to_s + "\",\n"
    print "\"status\": " + "\"" + productResult["Status"].to_s + "\",\n"
    print "\"reviewName\": " + "\"" + productResult["ReviewName"].to_s + "\",\n"
    print "\"reviewPoint\": " + "\"" + productResult["ReviewPoint"].to_s + "\",\n"
    print "\"impressions\": " + "\"" + productResult["Inpressions"].to_s + "\",\n"
    print "\"date\": " + "\"" + productResult["Date"].to_s + "\"\n"
    print "},\n"
    #  "\"name\": " はシングルクオートでくくって '"name": 'と書いてもよい
    #ruby の文字列に関する記述をしらべてみること
end
# できればヒアドキュメント使いたかったけどヒアドキュメントの中だと演算子使いにくいっぽいからナシで
print "{}]\n"