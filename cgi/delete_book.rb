#!/usr/bin/ruby
# -*- coding: utf-8 -*-

require 'mysql2'
require 'cgi'

# 取得した値を使い、本の詳細情報を変更するＣＧＩ

data=CGI.new()

bookIndex = data['book_index']


#パスはサーバーで入れてね
#client = 

client.query("delete from test_book where ID=#{bookIndex};")

print <<-EOS
Content-type: text/html\n\n

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <title>Update</title>
</head>
<body>

<header>
</header>

<h2>完了</h2>

<br>
<a href="../BookList.rb"><button>メニューに戻る</button></a>
</p>
</body>
</html>
EOS
