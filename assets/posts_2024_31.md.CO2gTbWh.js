import{_ as o,C as p,c as n,o as d,a5 as t,G as i,j as a,a as r}from"./chunks/framework.TIL9AXbx.js";const C=JSON.parse('{"title":"YAPC::Hakodate 2024","description":"YAPC::Hakodate 2024","frontmatter":{"date":"2024-10-05T00:00:00.000Z","title":"YAPC::Hakodate 2024","description":"YAPC::Hakodate 2024","tags":["YAPC"],"prev":{"text":"YAPC::Hakodate 2024 ｢前夜祭｣","link":"./30"},"next":{"text":"YAPC函館市電LT","link":"./32"}},"headers":[],"relativePath":"posts/2024/31.md","filePath":"posts/2024/31.md"}'),s={name:"posts/2024/31.md"};function u(h,l,P,_,b,k){const e=p("X");return d(),n("div",null,[l[0]||(l[0]=t('<h1 id="yapc-hakodate-2024" tabindex="-1">YAPC::Hakodate 2024 <a class="header-anchor" href="#yapc-hakodate-2024" aria-label="Permalink to &quot;YAPC::Hakodate 2024&quot;">​</a></h1><ul><li><a href="https://yapcjapan.org/2024hakodate/" target="_blank" rel="noreferrer">YAPC::Hakodate 2024</a></li></ul><h2 id="シェルとperlの使い分け、そういった思考の道具は、どこから来て、どこへゆくのか" tabindex="-1">シェルとPerlの使い分け、そういった思考の道具は、どこから来て、どこへゆくのか？ <a class="header-anchor" href="#シェルとperlの使い分け、そういった思考の道具は、どこから来て、どこへゆくのか" aria-label="Permalink to &quot;シェルとPerlの使い分け、そういった思考の道具は、どこから来て、どこへゆくのか？&quot;">​</a></h2>',3)),i(e,{tweetId:"1842371526433399131"}),l[1]||(l[1]=a("ul",null,[a("li",null,[a("p",null,"プログラミングはアートというよりも陶芸")]),a("li",null,[a("p",null,"趣味に没頭できる幸せな時代")])],-1)),l[2]||(l[2]=a("h2",{id:"今日から始める大規模言語モデルのプロダクト活用",tabindex:"-1"},[r("今日から始める大規模言語モデルのプロダクト活用 "),a("a",{class:"header-anchor",href:"#今日から始める大規模言語モデルのプロダクト活用","aria-label":'Permalink to "今日から始める大規模言語モデルのプロダクト活用"'},"​")],-1)),i(e,{tweetId:"1842384047819063353"}),l[3]||(l[3]=t('<ul><li>型がないデータは扱かえなかったため、現実とソフトウェアを人間が橋渡しする必要があった。これまでのソフトウェアでやる必要があった。</li></ul><h3 id="llmの活用" tabindex="-1">LLMの活用 <a class="header-anchor" href="#llmの活用" aria-label="Permalink to &quot;LLMの活用&quot;">​</a></h3><ul><li><p>出力形式。JSONやCSV等の決まった形式を出力する。</p></li><li><p>検索クエリとSQLを生成 → 必要に応じて検索結果からコンテンツ生成。</p></li><li><p>マニュアルの検索などで使用する。</p></li><li><p>過去の事例データから、アドバイス・判断の支援。</p></li><li><p>LLMに最終成果物を作らせるのではなく、ユーザーがレビューし、使用してもらう前提。</p></li><li><p>非構造デ-タの構造化をする。文章、画像などの通常システムで扱いづらいデータなどを高性能LLMに処理させる。</p></li><li><p>X as Codeとの組み合わせ。オレオレ as Codeを作る。</p></li><li><p>ML機能のプロトタイピング</p></li><li><p>レコメンド機能を埋め込めるサイトを作成可能。</p></li><li><p>ユーザーに使用してもらってから改善する。</p></li><li><p>モデルの変化に向かいつづける。</p></li><li><p>データベーステーブルのテストデータを自動生成。</p></li><li><p>v0におけるフロントエンド生成。</p></li><li><p>v0でフロントエンドを作成し、ユーザーにUI体験してもらい、人間が修正し、管理する。</p></li></ul><h2 id="データマイグレーションの成功戦略-サービスリニューアルで失敗しないための実践ガイド" tabindex="-1">データマイグレーションの成功戦略：サービスリニューアルで失敗しないための実践ガイド <a class="header-anchor" href="#データマイグレーションの成功戦略-サービスリニューアルで失敗しないための実践ガイド" aria-label="Permalink to &quot;データマイグレーションの成功戦略：サービスリニューアルで失敗しないための実践ガイド&quot;">​</a></h2><ul><li><p>データ移行は準備が9割</p></li><li><p>長年運用しているとスキーマだけではわからないものが必ず存在する。</p></li></ul><h2 id="誰になんと言われても「いい開発環境」を作りたくて頑張っている話" tabindex="-1">誰になんと言われても「いい開発環境」を作りたくて頑張っている話 <a class="header-anchor" href="#誰になんと言われても「いい開発環境」を作りたくて頑張っている話" aria-label="Permalink to &quot;誰になんと言われても「いい開発環境」を作りたくて頑張っている話&quot;">​</a></h2><ul><li><p>モノレポ化で認知負荷を下げる。</p></li><li><p>devcontainerを使用し、VSCodeの拡張機能を管理。</p></li><li><p>PlanetScaleを使用し、データベース管理。</p></li></ul><h2 id="webセキュリティのあるきかた" tabindex="-1">Webセキュリティのあるきかた <a class="header-anchor" href="#webセキュリティのあるきかた" aria-label="Permalink to &quot;Webセキュリティのあるきかた&quot;">​</a></h2>',8)),i(e,{tweetId:"1842439241319747797"}),l[4]||(l[4]=a("h3",{id:"secure属性",tabindex:"-1"},[r("Secure属性 "),a("a",{class:"header-anchor",href:"#secure属性","aria-label":'Permalink to "Secure属性"'},"​")],-1)),l[5]||(l[5]=a("ul",null,[a("li",null,[a("p",null,"HTTPSの通信でのみサーバーに送信される。")]),a("li",null,[a("p",null,"中間者攻撃によってHTTPの通信を強制されたとしてもCookieが送信されない。")])],-1)),l[6]||(l[6]=a("h2",{id:"クレジットカードを製造する技術",tabindex:"-1"},[r("クレジットカードを製造する技術 "),a("a",{class:"header-anchor",href:"#クレジットカードを製造する技術","aria-label":'Permalink to "クレジットカードを製造する技術"'},"​")],-1)),i(e,{tweetId:"1842472918980428115"}),l[7]||(l[7]=t('<ul><li><p>アカウントレンジ(7 ~ 10行目)主にカードの商品性の区別のために使用される。</p></li><li><p>クレジットカード決済の方式など。</p></li><li><p>セキュリティコードはランダムではなく、カード番号、有効期限、サービスコードに基づいて生成されている。</p></li></ul><h2 id="キーノート" tabindex="-1">キーノート <a class="header-anchor" href="#キーノート" aria-label="Permalink to &quot;キーノート&quot;">​</a></h2><ul><li><p>資料は読み切らなくて良い。</p></li><li><p>自分たちのための大量生産。質と量が同居。</p></li><li><p>とにかく作りまくることで一定解決。</p></li><li><p>量が質に転化するタイミングはやがて来る。</p></li></ul><h2 id="past-yapc" tabindex="-1">Past YAPC <a class="header-anchor" href="#past-yapc" aria-label="Permalink to &quot;Past YAPC&quot;">​</a></h2><ul><li><p><a href="/blog/posts/2024/1.html">YAPC::Hiroshima 2024 に参加</a></p></li><li><p><a href="/blog/posts/2023/1.html">YAPC::Kyoto 2023 に参加</a></p></li></ul>',5))])}const T=o(s,[["render",u]]);export{C as __pageData,T as default};
