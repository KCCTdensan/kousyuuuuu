---
title: Web講習1
author: 山D (`me@dyama.net`)
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

: Listing caption {#lst:code}
