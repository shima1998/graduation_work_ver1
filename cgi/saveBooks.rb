#!/usr/bin/ruby
# -*- coding: utf-8 -*-

require 'mysql2'
require 'cgi'

data=CGI.new()

id = data['id']
animal = data['animal']

# セキュリティ面からデータベースのパス等は消しています　サーバー内で入力してください
# client =

