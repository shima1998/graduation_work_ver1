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

# productResults.each do |productResults|
#    puts CGI.unescape(productResults)
# end

productResults.each do |productResults|
   print productResults["Name"] + "<br>\n"
   print productResults["Status"].to_s + "<br>\n"
   print productResults["ReviewName"] + "<br>\n"
   print productResults["ReviewPoint"].to_s + "<br>\n"
   print productResults["Inpressions"].to_s + "<br>\n"
   print productResults["Date"].to_s + "<br>\n"
end
