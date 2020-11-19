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

productResults.each do |productResults|
   puts productResults
end


