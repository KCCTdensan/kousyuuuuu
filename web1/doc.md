---
title: Web講習1
author: 山D (`me@dyama.net`), 高橋
date: 2022年11月24日
---

# はじめに

部員の平均の技術力を高めたいのでやります。
アルゴリズム系(競技プログラミング系)のコミュニティは別にあるらしいので，
部活全体ではWebをやろうと思います。

数回に分けて実施し，最終的にはWebで使われている基本的な技術の扱い方を習得してもらいたいと思っています。

## つくるもの

全体を通じて，簡単なチャットサービスを作ってもらいます。
今回に限って言えば，そのフロントエンド[^front]の部分の簡易的なものを作ってもらいます。

[^front]: アプリ全体の中で，実際にユーザーが見たり触れたりする部分のこと

# はじめての方へ
## フロントエンドを構成する要素

フロントエンドは主に3種類のコードで構成されています。
それぞれ，HTML, CSS, JavaScriptという名前で，役割が違います。

### HTML
HTMLはWebページの型を作る役割があります。
例えば，見出し，本文を表示する順番を決めるのに使ったりします。

### CSS
CSSはHTMLで作成したWebページを装飾する役割があります。
例えば，文字の色を変えたり，各要素の大きさなどを変えたりするのに使ったりします。

### JavaScript
JavaScriptは作成したWebページに動きを付けたり，サーバと通信する役割があります。
例えば，入力した内容を本文に追加したり，入力した情報をサーバに送信したりするのに使ったりします。

JavaScriptはJavaとはまったく違うので気を付けましょう。

## HTMLについて
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
  </head>
  <body>
    <h1>sample client</h1>
    <script>
      const url = "http://example.net"
    </script>
  </body>
</html>
```

これはHTMLの一例です。

いきなりこれを見ても意味がわからないかもしれませんが大丈夫です。これから一つずつ解説していきます。


HTMLとはHyper Text Markup Languageの略で主にWebページの表示をするための言語です。
~~HTMLはプログラミング言語です~~ ←違います。

HTMLは基本的に入れ子構造にして書いていきます。そして，一つ一つの要素をタグと言います。
基本的にタグは/が付いた閉じタグと呼ばれるものとセットで書く必要があります。
```html
<h1>見出し</h1> 
<!--この <h1>, </h1>をタグと言い，特にタグ名の前に/があるものを閉じタグと言う-->
```

今回のメインではないのであまり深い解説はしません。わからないことがあれば遠慮無く近くの先輩や有識者に聞いてください。

## CSSについて
CSSはHTMLの要素やクラスやidを指定してそのデザインを編集するための言語です。
例えば次のようなHTMLのコードがあるとします。
```html
<h1>タイトル</h1>
```
このときこの「タイトル」という文字の色を変更したい場合はこのようにCSS
を書きます。
```css
h1 {
    color: red;
}
```
このように要素を指定してその要素のプロパティを設定すればHTMLのデザインをより
凝ったものにできます。これがCSSです。

## JavaScriptについて
1年生のみなさんは情報基礎でpythonをやっていると思うのでpythonとJavaScriptの
違う部分だけを解説したいと思います。
### 変数の宣言方法
pythonでは
```python
a = 0
print(a) # => 0
```
ですがJavaScriptだと
```javascript
let a = 0
const b = 1
console.log(a)
console.log(b)
```
こうなります。letとconstの違いは値を再代入できるかどうかです。
後で解説するfor文の時や再代入すると決まっているとき以外は基本constを使いましょう。

### if文
pythonでは
```python
if a % 2 == 0 :
    print("odd Number")
else :
    print("even Number")
```
ですがJavaScriptだと
```javascript
if(a % 2 === 0){
    console.log("odd Number")
} else {
    console.log("even Number")
}
```

こうなります。JavaScriptではif文はインデントではなく{}で区切ります。
また，pythonでの```elif```はJavaScriptでは```else if```なので
注意しましょう。

#### 真偽値
pythonではそれぞれ```True, False```と表現しますが，JavaScriptでは
```true, false```と小文字になることに注意しましょう。

### for文
ここは大きく違うので気をつけましょう。

pythonのfor文
```python
for i in range(10):
    print(i) 
```
JavaScriptのfor文
```javascript
for (let i = 0; i < 10; i++){
    console.log(i)
}
```
これはどちらも0から9を出力するプログラムです。
JavaScriptの書き方を初めてみる人もいると思います。
まず```let i = 0;```でfor文で使う変数であるiを初期化しています。
JavaScriptやC言語などはこの初期化が必要なので注意してください。
そして，次の```i < 10;```はこの論理式(true,falseを返す式)がtrueの間{}の中の処理をループするという意味を持ちます。ここではiが10未満の時にループします。
最後の```i++```はループが終わった時に実行される処理を書きます。
ここで```i++```という見慣れない式が出てきますがこれはインクリメントという処理です。
pythonの```i += 1```と同じ意味を持ちます。また，```i--```はpythonの```i -= 1```と同じ意味を持ちます。
ここではこの```i++```という式を最後に記述することで， ループの度にiを1ずつ増やしています。

### 関数
関数とは複数の処理をまとめたものです。例えば次のようなものがあります。
```javascript
function sayHello() {
    console.log("Hello!!!")
}

sayHello(); // =>Hello!
```
関数は```function 関数名(引数1，引数2，・・・){処理}```という書き方をすると宣言できます。
宣言した関数を使用するには``関数名()``と書くとその関数に定義された処理が実行されます。

関数には値を受け取る機能があります。
値を受け取る場合の関数は次のように記述します。
```javascript
function sum (a, b){
    return a + b
}

const ans = sum(3, 5)
console.log(sum)  //=> 8
```
このように関数名の後の()に関数内で使う変数を記述し，関数内で使用することができます。
このときこの変数のことをその関数の引数と言います。
```return```の後に続けて値を記述することで，その関数の戻り値を指定することができます。
戻り値とは関数などが処理を終了する際に、呼び出し元に対して渡す値のことです。
5行目のように戻り値をそのまま変数に代入することもできます。
#### 無名関数
JavaScriptは変数に関数を代入することができます。その時に代入された関数を無名関数と言います。
無名関数は次のように記述します。
```javascript
const div = function (a, b){
    return a / b
}

console.log(div(6, 3)) // => 2
```
変数に入れても関数の基本的な使い方は変わりません。関数の定義方法の違いくらいに考えればOKです。

#### アロー関数
無名関数と似ていますがもっと簡単に関数を記述できるものがアロー関数です。
アロー関数は次のように定義します。
```javascript
const times = (a, b) => a * b
console.log(times(6, 9)) // => 54

const twice = a => a * 2
console.log(twice(4)) // => 8

const isEvemNum = a => {
    if(a % 2 === 0){
        return true
    } else {
        return false
    }
}
console.log(isEvemNum(12)) // => true
```
このようにJavaScriptは関数を少ない記述量で書くことができます。






: Listing caption {#lst:code}
