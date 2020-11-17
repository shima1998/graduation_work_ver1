#!/usr/bin/ruby
# -*- coding: utf-8 -*-


require 'mysql2'

# パスはサーバーで入力
# connection = 

dbString0 = connection.query("select sum(Pages) from pages_book;")

begin
    print "Content-type: text/html\n\n"

    dbString0.each do |dbString0|
        print dbString0
    end

end