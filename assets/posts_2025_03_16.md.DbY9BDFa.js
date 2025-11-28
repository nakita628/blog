import{_ as a,c as n,o as e,a7 as p}from"./chunks/framework.BK-5gBo2.js";const h=JSON.parse('{"title":"MySQL Data Type","description":"MySQL Data Type","frontmatter":{"date":"2025-03-16T00:00:00.000Z","title":"MySQL Data Type","description":"MySQL Data Type","tags":["MySQL"],"prev":{"text":"MySQL Basic","link":"/posts/2025/03/13"},"next":{"text":"Git reset","link":"/posts/2025/04/06"}},"headers":[],"relativePath":"posts/2025/03/16.md","filePath":"posts/2025/03/16.md"}'),t={name:"posts/2025/03/16.md"};function o(l,s,i,c,u,d){return e(),n("div",null,[...s[0]||(s[0]=[p(`<h1 id="mysql-data-type" tabindex="-1">MySQL Data Type <a class="header-anchor" href="#mysql-data-type" aria-label="Permalink to &quot;MySQL Data Type&quot;">​</a></h1><h1 id="空間情報-gis" tabindex="-1">空間情報(GIS) <a class="header-anchor" href="#空間情報-gis" aria-label="Permalink to &quot;空間情報(GIS)&quot;">​</a></h1><p> (x, y)や、(緯度, 軽度)の組み合わせで表現される座標情報のことを「<code>空間情報</code>」や「<code>位置情報</code>」と呼ばれる。</p><h2 id="空間情報の型" tabindex="-1">空間情報の型 <a class="header-anchor" href="#空間情報の型" aria-label="Permalink to &quot;空間情報の型&quot;">​</a></h2><table tabindex="0"><thead><tr><th>型名</th><th>意味</th></tr></thead><tbody><tr><td>POINT</td><td>点</td></tr><tr><td>LINESTRING</td><td>線</td></tr><tr><td>POLYGON</td><td>面</td></tr><tr><td>GEOMETORY</td><td>上記すべてを扱い可能</td></tr></tbody></table><table tabindex="0"><thead><tr><th>型名</th><th>意味</th></tr></thead><tbody><tr><td>MULTIPOINT</td><td>点の集合</td></tr><tr><td>MULTILINESTRING</td><td>線の集合</td></tr><tr><td>MULTIPOLYGON</td><td>面の集合</td></tr><tr><td>GEOMETORYCOLLECTION</td><td>上記集合のすべてを扱い可能</td></tr></tbody></table><h2 id="point" tabindex="-1"><code>POINT</code> <a class="header-anchor" href="#point" aria-label="Permalink to &quot;\`POINT\`&quot;">​</a></h2><p> 2つの軸(X軸、 Y軸)の値を表す2つの数字からなる</p><h2 id="linestriing" tabindex="-1"><code>LINESTRIING</code> <a class="header-anchor" href="#linestriing" aria-label="Permalink to &quot;\`LINESTRIING\`&quot;">​</a></h2><p> 複数の<code>POINT</code>を指定し、それらをつないだ線。必ずしも1つの直線というわけではなく、3点以上を次々と結んだ型を表せる。</p><h2 id="polygn" tabindex="-1"><code>POLYGN</code> <a class="header-anchor" href="#polygn" aria-label="Permalink to &quot;\`POLYGN\`&quot;">​</a></h2><p> 複数の<code>POINT</code>を次々と結び、最後に始点に戻ってくるもの。中をくりぬくことも可能</p><h2 id="geometorycollection" tabindex="-1"><code>GEOMETORYCOLLECTION</code> <a class="header-anchor" href="#geometorycollection" aria-label="Permalink to &quot;\`GEOMETORYCOLLECTION\`&quot;">​</a></h2><p> <code>POINTE</code>/<code>LINESTRING</code>/<code>POLYGON</code>のすべての型を格納することができる型</p><h2 id="multi-geometorycollection" tabindex="-1"><code>MULTI-</code> <code>GEOMETORYCOLLECTION</code> <a class="header-anchor" href="#multi-geometorycollection" aria-label="Permalink to &quot;\`MULTI-\` \`GEOMETORYCOLLECTION\`&quot;">​</a></h2><p> それぞれの集合を扱える型</p><h2 id="空間情報の表し方" tabindex="-1">空間情報の表し方 <a class="header-anchor" href="#空間情報の表し方" aria-label="Permalink to &quot;空間情報の表し方&quot;">​</a></h2><p> <code>MySQL</code>では、空間情報の3つの表現を知っておくと便利。</p><ul><li><code>WKT</code> : 人間にとってわかりやすい表現<code>WKT(Well Known Text)</code></li><li><code>WKB</code> : WKB(Well Known Binary)</li><li><code>MySQL</code>の内部表現 : <code>MySQL</code>内部表現はバイナリ型の表現</li></ul><h2 id="geometry型のカラムを持つテーブルを作成し、データを登録" tabindex="-1"><code>GEOMETRY</code>型のカラムを持つテーブルを作成し、データを登録 <a class="header-anchor" href="#geometry型のカラムを持つテーブルを作成し、データを登録" aria-label="Permalink to &quot;\`GEOMETRY\`型のカラムを持つテーブルを作成し、データを登録&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; CREATE TABLE geo (id INTEGER, pos GEOMETRY);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mysql&gt; INSERT INTO geo VALUES (1, ST_GeomFromText(&#39;POINT(3 5)&#39;));</span></span>
<span class="line"><span>mysql&gt; INSERT INTO geo VALUES (2, ST_GeomFromText(&#39;LINESTRING(3 5, 4 7, 5 2)&#39;));</span></span>
<span class="line"><span>mysql&gt; INSERT INTO geo VALUES (3, ST_GeomFromText(&#39;POLYGON((1 1, 5 1, 1 5, 1 1))&#39;));</span></span></code></pre></div><h2 id="中身確認" tabindex="-1">中身確認 <a class="header-anchor" href="#中身確認" aria-label="Permalink to &quot;中身確認&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; SELECT * FROM geo;</span></span>
<span class="line"><span>+------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------+</span></span>
<span class="line"><span>| id   | pos                                                                                                                                                                  |</span></span>
<span class="line"><span>+------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------+</span></span>
<span class="line"><span>|    1 | 0x00000000010100000000000000000008400000000000001440                                                                                                                 |</span></span>
<span class="line"><span>|    2 | 0x000000000102000000030000000000000000000840000000000000144000000000000010400000000000001C4000000000000014400000000000000040                                         |</span></span>
<span class="line"><span>|    3 | 0x0000000001030000000100000004000000000000000000F03F000000000000F03F0000000000001440000000000000F03F000000000000F03F0000000000001440000000000000F03F000000000000F03F |</span></span>
<span class="line"><span>+------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------+</span></span></code></pre></div><p> <code>INSERT</code>文で、<code>POINT(3, 5)</code>という人間にわかりやすい表現(= <code>WKT</code>)に対して、<code>ST_GeomFromText()</code>という関数を使用。この関数が、<code>WKT</code>から<code>MySQL</code>内部表現へと変換する関数。</p><p> <code>MySQL</code>内部表現 → <code>WKT</code>への変換する関数も存在する。<code>ST_AsText()</code>という関数が用意されている。次のように、<code>空間参照型</code>のカラムに対してこの関数を使用することで、人間に読みやすい形式結果を得ることが可能。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; SELECT id, ST_AsText(pos) FROM geo;</span></span>
<span class="line"><span>+------+----------------------------+</span></span>
<span class="line"><span>| id   | ST_AsText(pos)             |</span></span>
<span class="line"><span>+------+----------------------------+</span></span>
<span class="line"><span>|    1 | POINT(3 5)                 |</span></span>
<span class="line"><span>|    2 | LINESTRING(3 5,4 7,5 2)    |</span></span>
<span class="line"><span>|    3 | POLYGON((1 1,5 1,1 5,1 1)) |</span></span>
<span class="line"><span>+------+----------------------------+</span></span></code></pre></div><h2 id="mysqlの空間情報の関数" tabindex="-1"><code>MySQL</code>の空間情報の関数 <a class="header-anchor" href="#mysqlの空間情報の関数" aria-label="Permalink to &quot;\`MySQL\`の空間情報の関数&quot;">​</a></h2><p> 空間情報を扱う関数の多くは、<code>ST*</code>で始まる名前。</p><h2 id="st-distance" tabindex="-1">ST_Distance <a class="header-anchor" href="#st-distance" aria-label="Permalink to &quot;ST_Distance&quot;">​</a></h2><p> 2つの点(1,1)と(3,2)の距離を求める。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; SELECT ST_Distance(ST_GeomFromText(&#39;POINT(1 1)&#39;),</span></span>
<span class="line"><span>                          ST_GeomFromText(&#39;POINT(3 2)&#39;)) AS dist;</span></span>
<span class="line"><span>+------------------+</span></span>
<span class="line"><span>| dist             |</span></span>
<span class="line"><span>+------------------+</span></span>
<span class="line"><span>| 2.23606797749979 |</span></span>
<span class="line"><span>+------------------+</span></span></code></pre></div><h2 id="st-envelope" tabindex="-1">ST_Envelope <a class="header-anchor" href="#st-envelope" aria-label="Permalink to &quot;ST_Envelope&quot;">​</a></h2><p> 与えられた座標情報に外接する四角形を返す。<code>ST_AsText</code>関数を使い、見やすい結果にできる。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; SELECT ST_AsText(</span></span>
<span class="line"><span>           ST_Envelope( ST_GeomFromText(&#39;LINESTRING(1 2, 2 5, 3 1)&#39;) )</span></span>
<span class="line"><span>         ) AS mbr;</span></span>
<span class="line"><span>+--------------------------------+</span></span>
<span class="line"><span>| mbr                            |</span></span>
<span class="line"><span>+--------------------------------+</span></span>
<span class="line"><span>| POLYGON((1 1,3 1,3 5,1 5,1 1)) |</span></span>
<span class="line"><span>+--------------------------------+</span></span></code></pre></div><p> <code>MySQL</code>で空間情報を扱う際には、<code>WKT</code>と<code>MySQL</code>内部バイナリの違いをしっかりと認識しておく。</p><h2 id="地球上の位置" tabindex="-1">地球上の位置 <a class="header-anchor" href="#地球上の位置" aria-label="Permalink to &quot;地球上の位置&quot;">​</a></h2><p> 測地系を用いた地球上の位置の表し方には、<code>緯度</code>と<code>軽度</code>を用いた「<code>地理座標系</code>」と、決められた範囲ごとの<code>原点座標</code>からの北/東角方向への距離で表した「<code>投影座標系</code>」がある。</p><p> 各座標系には、<code>SRID</code>(SRS ID)と呼ばれる一意の数字が割り振られている。</p><h2 id="sridを指定した例" tabindex="-1"><code>SRID</code>を指定した例 <a class="header-anchor" href="#sridを指定した例" aria-label="Permalink to &quot;\`SRID\`を指定した例&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; CREATE TABLE geo2 (id integer, pos GEOMETRY SRID 6668);</span></span>
<span class="line"><span>mysql&gt; INSERT INTO geo2 VALUES (1, ST_GeomFromText(&#39;POINT(43.06416667 141.3469444)&#39;, 6668));</span></span></code></pre></div><p> <code>MySQL</code>で地球上の<code>緯度</code>と<code>軽度</code>を用いた表現は、(<code>緯度</code> <code>軽度</code>)の順で表す。<code>postGIS</code>などと異なるので、相互に使用したり移行をしたりする際には注意が必要。</p><h2 id="取得結果" tabindex="-1">取得結果 <a class="header-anchor" href="#取得結果" aria-label="Permalink to &quot;取得結果&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; select * from geo2;</span></span>
<span class="line"><span>+------+------------------------------------------------------+</span></span>
<span class="line"><span>| id   | pos                                                  |</span></span>
<span class="line"><span>+------+------------------------------------------------------+</span></span>
<span class="line"><span>|    1 | 0x0C1A00000101000000F970242B1AAB614055920A9D36884540 |</span></span>
<span class="line"><span>+------+------------------------------------------------------+</span></span></code></pre></div><h2 id="地球上の2点間の距離を取得" tabindex="-1">地球上の2点間の距離を取得 <a class="header-anchor" href="#地球上の2点間の距離を取得" aria-label="Permalink to &quot;地球上の2点間の距離を取得&quot;">​</a></h2><ul><li><code>北海道庁</code> : <code>東経</code> 141.3469444 度、 <code>北緯</code> 43.06416667 度</li><li><code>沖縄県庁</code> : <code>東経</code> 127.6811111 度、 <code>北緯</code> 26.21250000 度</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; SELECT ST_Distance( ST_GeomFromText(&#39;POINT(43.06416667 141.3469444)&#39;, 6668), ST_GeomFromText(&#39;POINT(26.21250000 127.6811111)&#39;, 6668), &quot;kilometre&quot;) AS dist;</span></span>
<span class="line"><span>+--------------------+</span></span>
<span class="line"><span>| dist               |</span></span>
<span class="line"><span>+--------------------+</span></span>
<span class="line"><span>| 2243.8430513104017 |</span></span>
<span class="line"><span>+--------------------+</span></span></code></pre></div><p> 地球上の位置を手軽に扱える便利機能。</p><h2 id="json" tabindex="-1">JSON <a class="header-anchor" href="#json" aria-label="Permalink to &quot;JSON&quot;">​</a></h2><p> <code>MySQL</code>より遅れて世に出ている。2001年ぐらいに命名されたとされ、その後標準化される。</p><ul><li><p>出発は、「ブラウザ上で<code>JavaScript</code>を使用し、ダイナミックなページを実現する」</p></li><li><p>ただのデータの記述ルールに過ぎず、それを受け取り、送信、加工しているのは<code>JavaScript</code></p></li><li><p><code>JavaScript</code>の爆発的な普及と発展とともに、この記述ルールが使用される</p></li><li><p>現在、Webサーバーとブラウザ間だけのやり取りにと留まらず、サーバー同士のやり取りや、一種のデータ操作にも使用されている</p></li></ul><h2 id="jsonの利点" tabindex="-1"><code>JSON</code>の利点 <a class="header-anchor" href="#jsonの利点" aria-label="Permalink to &quot;\`JSON\`の利点&quot;">​</a></h2><ul><li><p>テキスト文字列で記述可能</p></li><li><p><code>リレーショナルデータベース</code>のようにカラムの設計の中身のデータを合わせる制約がない</p></li><li><p>自由な項目数。すべての行が同じ項目を持つ必要がない</p></li><li><p>自由な型指定。<code>文字列</code>、<code>値</code>、<code>配列</code>をミックス可能。<code>キー・バリュー式</code>のミックスも可能</p></li></ul><p> 状況に応じて、値や型を追加、削除できるのが特徴。</p><h2 id="jsonの利用" tabindex="-1"><code>JSON</code>の利用 <a class="header-anchor" href="#jsonの利用" aria-label="Permalink to &quot;\`JSON\`の利用&quot;">​</a></h2><p> <code>MySQL</code>での<code>JSON</code>の機能。</p><h2 id="カラムとデータ" tabindex="-1">カラムとデータ <a class="header-anchor" href="#カラムとデータ" aria-label="Permalink to &quot;カラムとデータ&quot;">​</a></h2><p> テーブル作成。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; CREATE TABLE menu (</span></span>
<span class="line"><span>  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,</span></span>
<span class="line"><span>  j  JSON</span></span>
<span class="line"><span>) DEFAULT CHARSET=utf8mb4;</span></span></code></pre></div><p> データ挿入。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; INSERT INTO menu(j) VALUES</span></span>
<span class="line"><span>  ( JSON_OBJECT(&#39;name&#39;, &#39;fried set meal&#39;, &#39;price&#39;, 1700) )</span></span>
<span class="line"><span>, ( JSON_OBJECT(&#39;name&#39;, &#39;box lunch&#39;, &#39;price&#39;, 500) )</span></span>
<span class="line"><span>, ( JSON_OBJECT(&#39;name&#39;, &#39;rolled natto&#39;, &#39;price&#39;, 300) )</span></span>
<span class="line"><span>, ( JSON_OBJECT(&#39;name&#39;, &#39;soy sauce ramen&#39;, &#39;price&#39;, 800) )</span></span>
<span class="line"><span>, ( &#39;{&quot;name&quot;:&quot;melon&quot;, &quot;price&quot;: 3000}&#39; )</span></span>
<span class="line"><span>, ( &#39;{&quot;name&quot;:&quot;curry bun&quot;, &quot;price&quot;: 300}&#39; )</span></span>
<span class="line"><span>, ( &#39;{&quot;name&quot;:&quot;manju&quot;, &quot;price&quot;: 200}&#39; )</span></span>
<span class="line"><span>, ( &#39;{&quot;name&quot;:&quot;icecream&quot;, &quot;price&quot;: 400}&#39; )</span></span>
<span class="line"><span>;</span></span></code></pre></div><p> データ取得</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; SELECT * FROM menu;</span></span>
<span class="line"><span>+----+-------------------------------------------+</span></span>
<span class="line"><span>| id | j                                         |</span></span>
<span class="line"><span>+----+-------------------------------------------+</span></span>
<span class="line"><span>|  1 | {&quot;name&quot;: &quot;fried set meal&quot;, &quot;price&quot;: 1700} |</span></span>
<span class="line"><span>|  2 | {&quot;name&quot;: &quot;box lunch&quot;, &quot;price&quot;: 500}       |</span></span>
<span class="line"><span>|  3 | {&quot;name&quot;: &quot;rolled natto&quot;, &quot;price&quot;: 300}    |</span></span>
<span class="line"><span>|  4 | {&quot;name&quot;: &quot;soy sauce ramen&quot;, &quot;price&quot;: 800} |</span></span>
<span class="line"><span>|  5 | {&quot;name&quot;: &quot;melon&quot;, &quot;price&quot;: 3000}          |</span></span>
<span class="line"><span>|  6 | {&quot;name&quot;: &quot;curry bun&quot;, &quot;price&quot;: 300}       |</span></span>
<span class="line"><span>|  7 | {&quot;name&quot;: &quot;manju&quot;, &quot;price&quot;: 200}           |</span></span>
<span class="line"><span>|  8 | {&quot;name&quot;: &quot;icecream&quot;, &quot;price&quot;: 400}        |</span></span>
<span class="line"><span>+----+-------------------------------------------+</span></span></code></pre></div><p> <code>JSON</code>の記載方法は、<code>JSON_OBJECT</code>関数を使用しても、そのまま文字列で与えても構わない。<code>JSON</code>に記述スロ日本語文字列は<code>UTF-8</code>エンコーディングと<code>RFC 8259</code>で決められている。<code>MySQL</code>の<code>JSON</code>型は、強制的に<code>UTF-8</code>で保存するように作られている。仮に<code>MySQL</code>のクライアントが<code>EUC-JP</code>で動いていても、自動変換が働く。</p><p>※ <code>UTF-8</code>が前提のカラムになるので、<code>CREATE TABLE</code>や<code>ALTER TABLE</code>時に<code>JSON</code>カラムに対して<code>CHARACTER SET</code>を指定する必要はない。逆に<code>CHARCTER SET</code>を指定すると文法エラーになる。</p><h2 id="値の抽出" tabindex="-1">値の抽出 <a class="header-anchor" href="#値の抽出" aria-label="Permalink to &quot;値の抽出&quot;">​</a></h2><p> <code>JSON</code>の各部分を取り出す。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; SELECT JSON_EXTRACT(j, &#39;$.name&#39;, &#39;$.price&#39;) FROM menu;</span></span>
<span class="line"><span>+--------------------------------------+</span></span>
<span class="line"><span>| JSON_EXTRACT(j, &#39;$.name&#39;, &#39;$.price&#39;) |</span></span>
<span class="line"><span>+--------------------------------------+</span></span>
<span class="line"><span>| [&quot;fried set meal&quot;, 1700]             |</span></span>
<span class="line"><span>| [&quot;box lunch&quot;, 500]                   |</span></span>
<span class="line"><span>| [&quot;rolled natto&quot;, 300]                |</span></span>
<span class="line"><span>| [&quot;soy sauce ramen&quot;, 800]             |</span></span>
<span class="line"><span>| [&quot;melon&quot;, 3000]                      |</span></span>
<span class="line"><span>| [&quot;curry bun&quot;, 300]                   |</span></span>
<span class="line"><span>| [&quot;manju&quot;, 200]                       |</span></span>
<span class="line"><span>| [&quot;icecream&quot;, 400]                    |</span></span>
<span class="line"><span>+--------------------------------------+</span></span></code></pre></div><p> <code>JSON</code>形式を取り出せる。</p><p> <code>JSON</code>の名前を<code>SQL</code>文中で指定するは、<code>&#39;$.名前&#39;</code>と書く。指定を文字列として与えていること、<code>&#39;$.&#39;</code>を使用していることに注意。</p><p> <code>name</code>の値の<code>SQL</code>の結果を受け取る。<code>JSON_EXTRACT()</code>を使用する。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; SELECT JSON_EXTRACT(j, &#39;$.name&#39;) FROM menu;</span></span>
<span class="line"><span>+---------------------------+</span></span>
<span class="line"><span>| JSON_EXTRACT(j, &#39;$.name&#39;) |</span></span>
<span class="line"><span>+---------------------------+</span></span>
<span class="line"><span>| &quot;fried set meal&quot;          |</span></span>
<span class="line"><span>| &quot;box lunch&quot;               |</span></span>
<span class="line"><span>| &quot;rolled natto&quot;            |</span></span>
<span class="line"><span>| &quot;soy sauce ramen&quot;         |</span></span>
<span class="line"><span>| &quot;melon&quot;                   |</span></span>
<span class="line"><span>| &quot;curry bun&quot;               |</span></span>
<span class="line"><span>| &quot;manju&quot;                   |</span></span>
<span class="line"><span>| &quot;icecream&quot;                |</span></span>
<span class="line"><span>+---------------------------+</span></span></code></pre></div><p> <code>name</code>の値の文字列に<code>&quot;</code>が付く。<code>SQL</code>検索をかけてヒットさせるために<code>&quot;</code>を外す。</p><h2 id="json-extract" tabindex="-1"><code>JSON_EXTRACT()</code> <a class="header-anchor" href="#json-extract" aria-label="Permalink to &quot;\`JSON_EXTRACT()\`&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; SELECT JSON_UNQUOTE( JSON_EXTRACT(j, &#39;$.name&#39;) ) FROM menu;</span></span>
<span class="line"><span>+-------------------------------------------+</span></span>
<span class="line"><span>| JSON_UNQUOTE( JSON_EXTRACT(j, &#39;$.name&#39;) ) |</span></span>
<span class="line"><span>+-------------------------------------------+</span></span>
<span class="line"><span>| fried set meal                            |</span></span>
<span class="line"><span>| box lunch                                 |</span></span>
<span class="line"><span>| rolled natto                              |</span></span>
<span class="line"><span>| soy sauce ramen                           |</span></span>
<span class="line"><span>| melon                                     |</span></span>
<span class="line"><span>| curry bun                                 |</span></span>
<span class="line"><span>| manju                                     |</span></span>
<span class="line"><span>| icecream                                  |</span></span>
<span class="line"><span>+-------------------------------------------+</span></span></code></pre></div><p> <code>&quot;</code>が外れて、取得できる。<code>MySQL</code>で<code>JSON</code>を取り出すときは、<code>JSON_UNQUOTE()</code>が必要な場合があると認識しておく。</p><h2 id="json-quote" tabindex="-1"><code>JSON_QUOTE()</code> <a class="header-anchor" href="#json-quote" aria-label="Permalink to &quot;\`JSON_QUOTE()\`&quot;">​</a></h2><p> <code>JSON</code>のルールでエスケープが必要な文字が含まれているときに使用する。</p><p> <code>&quot;</code>で文字そのものを入れたいときは、以下のように使用する。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; SELECT JSON_QUOTE(&#39;&quot;s&quot;&#39;);</span></span>
<span class="line"><span>+-------------------+</span></span>
<span class="line"><span>| JSON_QUOTE(&#39;&quot;s&quot;&#39;) |</span></span>
<span class="line"><span>+-------------------+</span></span>
<span class="line"><span>| &quot;\\&quot;s\\&quot;&quot;           |</span></span>
<span class="line"><span>+-------------------+</span></span></code></pre></div><h2 id="json-extract-、json-quote-の合わせ技" tabindex="-1"><code>JSON_EXTRACT()</code>、<code>JSON_QUOTE()</code>の合わせ技 <a class="header-anchor" href="#json-extract-、json-quote-の合わせ技" aria-label="Permalink to &quot;\`JSON_EXTRACT()\`、\`JSON_QUOTE()\`の合わせ技&quot;">​</a></h2><p> <code>MySQL8.0</code>では、簡便な記法が用意されている。</p><h2 id="カラム名-json部分指定" tabindex="-1">カラム名-&gt;&gt;<code>JSON</code>部分指定 <a class="header-anchor" href="#カラム名-json部分指定" aria-label="Permalink to &quot;カラム名-&gt;&gt;\`JSON\`部分指定&quot;">​</a></h2><p> <code>UNQUOTE</code>した値が得られる。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; SELECT j-&gt;&gt;&#39;$.name&#39; FROM menu;</span></span>
<span class="line"><span>+-----------------+</span></span>
<span class="line"><span>| j-&gt;&gt;&#39;$.name&#39;    |</span></span>
<span class="line"><span>+-----------------+</span></span>
<span class="line"><span>| fried set meal  |</span></span>
<span class="line"><span>| box lunch       |</span></span>
<span class="line"><span>| rolled natto    |</span></span>
<span class="line"><span>| soy sauce ramen |</span></span>
<span class="line"><span>| melon           |</span></span>
<span class="line"><span>| curry bun       |</span></span>
<span class="line"><span>| manju           |</span></span>
<span class="line"><span>| icecream        |</span></span>
<span class="line"><span>+-----------------+</span></span></code></pre></div><h2 id="カラム名-json部分指定-1" tabindex="-1">カラム名-&gt;<code>JSON</code>部分指定 <a class="header-anchor" href="#カラム名-json部分指定-1" aria-label="Permalink to &quot;カラム名-&gt;\`JSON\`部分指定&quot;">​</a></h2><p> <code>&gt;</code>が1つになると、<code>JSON</code>文字列表記で得られる。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; SELECT j-&gt;&#39;$.name&#39; FROM menu;</span></span>
<span class="line"><span>+-------------------+</span></span>
<span class="line"><span>| j-&gt;&#39;$.name&#39;       |</span></span>
<span class="line"><span>+-------------------+</span></span>
<span class="line"><span>| &quot;fried set meal&quot;  |</span></span>
<span class="line"><span>| &quot;box lunch&quot;       |</span></span>
<span class="line"><span>| &quot;rolled natto&quot;    |</span></span>
<span class="line"><span>| &quot;soy sauce ramen&quot; |</span></span>
<span class="line"><span>| &quot;melon&quot;           |</span></span>
<span class="line"><span>| &quot;curry bun&quot;       |</span></span>
<span class="line"><span>| &quot;manju&quot;           |</span></span>
<span class="line"><span>| &quot;icecream&quot;        |</span></span>
<span class="line"><span>+-------------------+</span></span></code></pre></div><p> この記法、関数、文字列には使用できない制限があり、次の場合エラーになる。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; SET @j:=&#39;{&quot;a&quot;:&quot;x&quot;}&#39;;</span></span>
<span class="line"><span>mysql&gt; SELECT @j-&gt;&gt;&#39;$.a&#39;;</span></span>
<span class="line"><span>mysql&gt; SELECT &#39;{&quot;a&quot;:&quot;x&quot;}&#39;-&gt;&gt;&#39;$.a&#39;;</span></span>
<span class="line"><span>mysql&gt; SELECT CAST(&#39;{&quot;a&quot;:&quot;x&quot;}&#39; as JSON)-&gt;&gt;&#39;$.a&#39;;</span></span>
<span class="line"><span>mysql&gt; SELECT JSON_QBJECT(&quot;a&quot;,&quot;x&quot;)-&gt;&gt;&#39;$.a&#39;;</span></span></code></pre></div><p> 上記の<code>SELECT</code>で以下のエラー。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ERROR</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1064</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (42000): You have an error in your SQL syntax; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">check</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manual</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> that</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> corresponds</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> your</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MySQL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> right</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> syntax</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> use</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> near</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;-&gt;&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.a&#39;&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> at</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> line</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span></code></pre></div><h2 id="値の抽出-where" tabindex="-1">値の抽出 <code>WHERE</code> <a class="header-anchor" href="#値の抽出-where" aria-label="Permalink to &quot;値の抽出 \`WHERE\`&quot;">​</a></h2><p> <code>JSON</code>の抽出記述は、<code>SELECT</code>の選択項目以外にも使用できる。</p><p> 「melon」を指定して、取得。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; SELECT * FROM menu WHERE j-&gt;&gt;&#39;$.name&#39; = &#39;melon&#39;;</span></span>
<span class="line"><span>+----+----------------------------------+</span></span>
<span class="line"><span>| id | j                                |</span></span>
<span class="line"><span>+----+----------------------------------+</span></span>
<span class="line"><span>|  5 | {&quot;name&quot;: &quot;melon&quot;, &quot;price&quot;: 3000} |</span></span>
<span class="line"><span>+----+----------------------------------+</span></span></code></pre></div><p> 「ramen」が、含まれているものを取得。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; SELECT * FROM menu WHERE j-&gt;&gt;&#39;$.name&#39; LIKE &#39;%ramen%&#39;;</span></span>
<span class="line"><span>+----+-------------------------------------------+</span></span>
<span class="line"><span>| id | j                                         |</span></span>
<span class="line"><span>+----+-------------------------------------------+</span></span>
<span class="line"><span>|  4 | {&quot;name&quot;: &quot;soy sauce ramen&quot;, &quot;price&quot;: 800} |</span></span>
<span class="line"><span>+----+-------------------------------------------+</span></span></code></pre></div><p> 500円以上のデータを取得。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; SELECT * FROM menu WHERE j-&gt;&gt;&#39;$.price&#39; &gt;= 500;</span></span>
<span class="line"><span>+----+-------------------------------------------+</span></span>
<span class="line"><span>| id | j                                         |</span></span>
<span class="line"><span>+----+-------------------------------------------+</span></span>
<span class="line"><span>|  1 | {&quot;name&quot;: &quot;fried set meal&quot;, &quot;price&quot;: 1700} |</span></span>
<span class="line"><span>|  2 | {&quot;name&quot;: &quot;box lunch&quot;, &quot;price&quot;: 500}       |</span></span>
<span class="line"><span>|  4 | {&quot;name&quot;: &quot;soy sauce ramen&quot;, &quot;price&quot;: 800} |</span></span>
<span class="line"><span>|  5 | {&quot;name&quot;: &quot;melon&quot;, &quot;price&quot;: 3000}          |</span></span>
<span class="line"><span>+----+-------------------------------------------+</span></span></code></pre></div><h2 id="jsonに追加、json配列" tabindex="-1"><code>JSON</code>に追加、<code>JSON</code>配列 <a class="header-anchor" href="#jsonに追加、json配列" aria-label="Permalink to &quot;\`JSON\`に追加、\`JSON\`配列&quot;">​</a></h2><p> メニューを整理するために、<code>JSON</code>データに、<code>category</code>という名前と値のペアを導入する。1つの商品は複数のカテゴリーに属する場合がある。</p><p> 以下の構造を追加する。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;category&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;カテゴリー名1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;category2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p> <code>category</code>の値を配列にしている。<code>MySQL</code>では<code>JSON</code>の配列を作成する場合は、<code>JSON_ARRAY()</code>を使用する。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; UPDATE menu SET j = JSON_INSERT(j, &#39;$.category&#39;, JSON_ARRAY(&quot;sweets&quot;, &quot;fruits&quot;)) WHERE id IN(5);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mysql&gt; UPDATE menu SET j = JSON_INSERT(j, &#39;$.category&#39;, JSON_ARRAY(&quot;sweets&quot;, &quot;japanese sweets&quot;)) WHERE id IN(7);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mysql&gt; UPDATE menu SET j = JSON_INSERT(j, &#39;$.category&#39;, JSON_ARRAY(&quot;sweets&quot;, &quot;ice&quot;)) WHERE id IN(8)</span></span></code></pre></div><p> 取得する。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; SELECT * FROM menu WHERE id IN(5,7,8);</span></span>
<span class="line"><span>+----+----------------------------------------------------------------------------+</span></span>
<span class="line"><span>| id | j                                                                          |</span></span>
<span class="line"><span>+----+----------------------------------------------------------------------------+</span></span>
<span class="line"><span>|  5 | {&quot;name&quot;: &quot;melon&quot;, &quot;price&quot;: 3000, &quot;category&quot;: &quot;sweets&quot;}                     |</span></span>
<span class="line"><span>|  7 | {&quot;name&quot;: &quot;manju&quot;, &quot;price&quot;: 200, &quot;category&quot;: [&quot;sweets&quot;, &quot;japanese sweets&quot;]} |</span></span>
<span class="line"><span>|  8 | {&quot;name&quot;: &quot;icecream&quot;, &quot;price&quot;: 400, &quot;category&quot;: [&quot;sweets&quot;, &quot;ice&quot;]}          |</span></span>
<span class="line"><span>+----+----------------------------------------------------------------------------+</span></span></code></pre></div><p> 配列部分に<code>JSON_ARRAY()</code>ではなく文字列で与えるとする。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; SELECT JSON_INSERT(&#39;{&quot;a&quot;:&quot;xxx&quot;}&#39;, &#39;$.c&#39;, &#39;[&quot;sweets&quot;, &quot;fruits&quot;]&#39;) as j;</span></span>
<span class="line"><span>+----------------------------------------------+</span></span>
<span class="line"><span>| j                                            |</span></span>
<span class="line"><span>+----------------------------------------------+</span></span>
<span class="line"><span>| {&quot;a&quot;: &quot;xxx&quot;, &quot;c&quot;: &quot;[\\&quot;sweets\\&quot;, \\&quot;fruits\\&quot;]&quot;} |</span></span>
<span class="line"><span>+----------------------------------------------+</span></span>
<span class="line"><span>1 row in set (0.00 sec)</span></span></code></pre></div><p> 「<code>JSON</code>配列」てして与えたい部分が、<code>MySQL</code>では「1つの文字列」てして扱われる。配列全体が<code>&quot;</code>で囲まれているのでただの文字列。</p><p> <code>JSON_OBJECT()</code>を使ってもうまくいかない。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; SELECT JSON_MERGE( &#39;{&quot;a&quot;:&quot;xxx&quot;}&#39;</span></span>
<span class="line"><span>            , JSON_OBJECT(&quot;c&quot;, &#39;[&quot;sweets&quot;, &quot;fruits&quot;]&#39;) ) as j;</span></span>
<span class="line"><span>+----------------------------------------------+</span></span>
<span class="line"><span>| j                                            |</span></span>
<span class="line"><span>+----------------------------------------------+</span></span>
<span class="line"><span>| {&quot;a&quot;: &quot;xxx&quot;, &quot;c&quot;: &quot;[\\&quot;sweets\\&quot;, \\&quot;fruits\\&quot;]&quot;} |</span></span>
<span class="line"><span>+----------------------------------------------+</span></span></code></pre></div><p> <code>CAST()</code>を使用するとうまく解釈される。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; SELECT JSON_INSERT(&#39;{&quot;a&quot;:&quot;xxx&quot;}&#39;</span></span>
<span class="line"><span>          , &#39;$.c&#39;, CAST(&#39;[&quot;sweets&quot;, &quot;fruits&quot;]&#39; AS JSON) ) AS j;</span></span>
<span class="line"><span>+-----------------------------------------+</span></span>
<span class="line"><span>| j                                       |</span></span>
<span class="line"><span>+-----------------------------------------+</span></span>
<span class="line"><span>| {&quot;a&quot;: &quot;xxx&quot;, &quot;c&quot;: [&quot;sweets&quot;, &quot;fruits&quot;]} |</span></span>
<span class="line"><span>+-----------------------------------------+</span></span></code></pre></div><h2 id="json配列指定" tabindex="-1"><code>JSON</code>配列指定 <a class="header-anchor" href="#json配列指定" aria-label="Permalink to &quot;\`JSON\`配列指定&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; SELECT JSON_EXTRACT(&#39;[&quot;a&quot;,&quot;b&quot;,&quot;c&quot;]&#39;, &#39;$[2]&#39;);</span></span>
<span class="line"><span>+---------------------------------------+</span></span>
<span class="line"><span>| JSON_EXTRACT(&#39;[&quot;a&quot;,&quot;b&quot;,&quot;c&quot;]&#39;, &#39;$[2]&#39;) |</span></span>
<span class="line"><span>+---------------------------------------+</span></span>
<span class="line"><span>| &quot;c&quot;                                   |</span></span>
<span class="line"><span>+---------------------------------------+</span></span></code></pre></div><p> <code>$[2]</code>は、「配列の3番目」という意味。配列の位置指定は0スタート。多次元配列でも使用可能。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; SELECT JSON_EXTRACT(&#39;[&quot;a&quot;,&quot;b&quot;,[&quot;x&quot;,&quot;y&quot;,&quot;z&quot;]]&#39;, &#39;$[2][1]&#39;);</span></span>
<span class="line"><span>+----------------------------------------------------+</span></span>
<span class="line"><span>| JSON_EXTRACT(&#39;[&quot;a&quot;,&quot;b&quot;,[&quot;x&quot;,&quot;y&quot;,&quot;z&quot;]]&#39;, &#39;$[2][1]&#39;) |</span></span>
<span class="line"><span>+----------------------------------------------------+</span></span>
<span class="line"><span>| &quot;y&quot;                                                |</span></span>
<span class="line"><span>+----------------------------------------------------+</span></span></code></pre></div><h3 id="json値削除、入れ替え" tabindex="-1"><code>JSON</code>値削除、入れ替え <a class="header-anchor" href="#json値削除、入れ替え" aria-label="Permalink to &quot;\`JSON\`値削除、入れ替え&quot;">​</a></h3><p> 以下のように変更する。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; SELECT j FROM menu WHERE id=2;</span></span>
<span class="line"><span>+-------------------------------------+</span></span>
<span class="line"><span>| j                                   |</span></span>
<span class="line"><span>+-------------------------------------+</span></span>
<span class="line"><span>| {&quot;name&quot;: &quot;box lunch&quot;, &quot;price&quot;: 500} |</span></span>
<span class="line"><span>+-------------------------------------+</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mysql&gt; UPDATE menu SET j = </span></span>
<span class="line"><span>        JSON_INSERT(j, &#39;$.cat&#39;, JSON_ARRAY(&quot;sweets&quot;, &quot;lunch box&quot;))</span></span>
<span class="line"><span>        WHERE id = 2;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mysql&gt; SELECT j FROM menu WHERE id=2\\G</span></span>
<span class="line"><span>*************************** 1. row ***************************</span></span>
<span class="line"><span>j: {&quot;cat&quot;: [&quot;sweets&quot;, &quot;lunch box&quot;], &quot;name&quot;: &quot;box lunch&quot;, &quot;price&quot;: 500}</span></span></code></pre></div><p> 商品は弁当なのに、投入データは<code>sweets</code>にも属しているので、カテゴリーから削除。</p><p> <code>JSON</code>の要素を削除するには、<code>JSON_REMOVE()</code>を使用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; UPDATE menu SET j=JSON_REMOVE(j, &#39;$.cat[0]&#39;) WHERE id=2;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mysql&gt; SELECT * FROM menu WHERE id=2\\G</span></span>
<span class="line"><span>*************************** 1. row ***************************</span></span>
<span class="line"><span>id: 2</span></span>
<span class="line"><span> j: {&quot;cat&quot;: [&quot;lunch box&quot;], &quot;name&quot;: &quot;box lunch&quot;, &quot;price&quot;: 500}</span></span>
<span class="line"><span>1 row in set (0.00 sec)</span></span></code></pre></div><p> <code>&#39;$.cat[0]&#39;</code>は、「<code>cat</code>の値として指定された配列の一番最初」。</p><p> <code>cat</code>ではなく、<code>category</code>になっているので変更する。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; UPDATE menu SET j = </span></span>
<span class="line"><span>        JSON_INSERT(JSON_REMOVE(j, &#39;$.cat&#39;), &#39;$.category&#39;, JSON_EXTRACT(j, &#39;$.cat&#39;))</span></span>
<span class="line"><span>       WHERE id=2;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mysql&gt; SELECT * FROM menu WHERE id=2\\G</span></span>
<span class="line"><span>*************************** 1. row ***************************</span></span>
<span class="line"><span>id: 2</span></span>
<span class="line"><span> j: {&quot;name&quot;: &quot;box lunch&quot;, &quot;price&quot;: 500, &quot;category&quot;: [&quot;lunch box&quot;]}</span></span></code></pre></div><p> 以下の処理を行っている。</p><p>①. <code>$.cat</code>を削除</p><p>②. 消した残りに<code>$.category</code>を追加</p><p>③. <code>$.category</code>の値は、現状の<code>$.cat</code>の値</p><h2 id="上書き-追加" tabindex="-1">上書き／追加 <a class="header-anchor" href="#上書き-追加" aria-label="Permalink to &quot;上書き／追加&quot;">​</a></h2><h2 id="jsonの値を変更する方法" tabindex="-1"><code>JSON</code>の値を変更する方法 <a class="header-anchor" href="#jsonの値を変更する方法" aria-label="Permalink to &quot;\`JSON\`の値を変更する方法&quot;">​</a></h2><table tabindex="0"><thead><tr><th></th><th>JSON_INSERT()</th><th>JSON_REPLACE()</th><th>JSON_SET()</th></tr></thead><tbody><tr><td>新規に「名前：値」を追加</td><td>する</td><td>ー</td><td>ー</td></tr><tr><td>現像する値を上書き</td><td>ー</td><td>する</td><td>する</td></tr></tbody></table><p> 新しく<code>comment</code>という名前と値を入れる。</p><p> <code>JSON_PRETTY()</code>で整形して見やすくしてくれる。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; SELECT JSON_PRETTY(j) as j FROM menu WHERE id=7\\G</span></span>
<span class="line"><span>*************************** 1. row ***************************</span></span>
<span class="line"><span>j: {</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;manju&quot;,</span></span>
<span class="line"><span>  &quot;price&quot;: 200,</span></span>
<span class="line"><span>  &quot;category&quot;: [</span></span>
<span class="line"><span>    &quot;sweets&quot;,</span></span>
<span class="line"><span>    &quot;japanese sweets&quot;</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mysql&gt; SELECT JSON_INSERT(j, &#39;$.comment&#39;, &quot;very tasty buns&quot;) as i FROM menu WHERE id=7\\G</span></span>
<span class="line"><span></span></span>
<span class="line"><span>*************************** 1. row ***************************</span></span>
<span class="line"><span>i: {&quot;name&quot;: &quot;manju&quot;, &quot;price&quot;: 200, &quot;comment&quot;: &quot;very tasty buns&quot;, &quot;category&quot;: [&quot;sweets&quot;, &quot;japanese sweets&quot;]}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mysql&gt; SELECT JSON_REPLACE(j, &#39;$.comment&#39;, &quot;very tasty buns&quot; ) as r FROM menu WHERE id=7\\G</span></span>
<span class="line"><span>*************************** 1. row ***************************</span></span>
<span class="line"><span>r: {&quot;name&quot;: &quot;manju&quot;, &quot;price&quot;: 200, &quot;category&quot;: [&quot;sweets&quot;, &quot;japanese sweets&quot;]}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mysql&gt; SELECT JSON_SET(j, &#39;$.comment&#39;, &quot;very tasty buns&quot; ) as s FROM menu WHERE id=7\\G</span></span>
<span class="line"><span>*************************** 1. row ***************************</span></span>
<span class="line"><span>s: {&quot;name&quot;: &quot;manju&quot;, &quot;price&quot;: 200, &quot;comment&quot;: &quot;very tasty buns&quot;, &quot;category&quot;: [&quot;sweets&quot;, &quot;japanese sweets&quot;]}</span></span></code></pre></div><p> <code>JSON_REPLACE</code>だけは、元の情報が存在しないので、<code>comment</code>が作成できない。</p><p> <code>$.name</code>を変更する</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; SELECT j FROM menu WHERE id=7\\G</span></span>
<span class="line"><span>*************************** 1. row ***************************</span></span>
<span class="line"><span>j: {&quot;name&quot;: &quot;manju&quot;, &quot;price&quot;: 200, &quot;category&quot;: [&quot;sweets&quot;, &quot;japanese sweets&quot;]}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mysql&gt; SELECT JSON_INSERT(j ,&#39;$.name&#39;, &quot;bean-curd&quot;) as i FROM menu WHERE id=7\\G</span></span>
<span class="line"><span>*************************** 1. row ***************************</span></span>
<span class="line"><span>i: {&quot;name&quot;: &quot;manju&quot;, &quot;price&quot;: 200, &quot;category&quot;: [&quot;sweets&quot;, &quot;japanese sweets&quot;]}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mysql&gt; SELECT JSON_REPLACE(j, &#39;$.name&#39;, &quot;bean-curd&quot;) as r FROM menu WHERE id=7\\G</span></span>
<span class="line"><span>*************************** 1. row ***************************</span></span>
<span class="line"><span>r: {&quot;name&quot;: &quot;bean-curd&quot;, &quot;price&quot;: 200, &quot;category&quot;: [&quot;sweets&quot;, &quot;japanese sweets&quot;]}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mysql&gt; SELECT JSON_SET(j, &#39;$.name&#39;, &quot;burn-curd&quot;) as s FROM menu WHERE id=7\\G</span></span>
<span class="line"><span>*************************** 1. row ***************************</span></span>
<span class="line"><span>s: {&quot;name&quot;: &quot;burn-curd&quot;, &quot;price&quot;: 200, &quot;category&quot;: [&quot;sweets&quot;, &quot;japanese sweets&quot;]}</span></span></code></pre></div><p> <code>JSON_INSERT()</code>は既存の値を上書きしないので、<code>$.name</code>を変更できない。</p><h2 id="追加-配列の場合" tabindex="-1">追加：配列の場合 <a class="header-anchor" href="#追加-配列の場合" aria-label="Permalink to &quot;追加：配列の場合&quot;">​</a></h2><p> <code>JSON_ARRAY_APPEND()</code>配列の最後に、値を入れる。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; SELECT JSON_ARRAY_APPEND(j, &#39;$.category&#39;, &quot;heat&quot;) FROM menu WHERE id in (1,7,8);</span></span>
<span class="line"><span>+------------------------------------------------------------------------------------+</span></span>
<span class="line"><span>| JSON_ARRAY_APPEND(j, &#39;$.category&#39;, &quot;heat&quot;)                                         |</span></span>
<span class="line"><span>+------------------------------------------------------------------------------------+</span></span>
<span class="line"><span>| {&quot;name&quot;: &quot;fried set meal&quot;, &quot;price&quot;: 1700}                                          |</span></span>
<span class="line"><span>| {&quot;name&quot;: &quot;manju&quot;, &quot;price&quot;: 200, &quot;category&quot;: [&quot;sweets&quot;, &quot;japanese sweets&quot;, &quot;heat&quot;]} |</span></span>
<span class="line"><span>| {&quot;name&quot;: &quot;icecream&quot;, &quot;price&quot;: 400, &quot;category&quot;: [&quot;sweets&quot;, &quot;ice&quot;, &quot;heat&quot;]}          |</span></span>
<span class="line"><span>+------------------------------------------------------------------------------------+</span></span></code></pre></div><p> <code>JSON_ARRAY_INSERT()</code>は配列の指定されたー位置に値を入れる。存在しない位置を指定されると無視される。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; SELECT JSON_ARRAY_INSERT(j, &#39;$.category[1]&#39;, &quot;heat&quot;) FROM menu WHERE id in (1,7,8);</span></span>
<span class="line"><span>+------------------------------------------------------------------------------------+</span></span>
<span class="line"><span>| JSON_ARRAY_INSERT(j, &#39;$.category[1]&#39;, &quot;heat&quot;)                                      |</span></span>
<span class="line"><span>+------------------------------------------------------------------------------------+</span></span>
<span class="line"><span>| {&quot;name&quot;: &quot;fried set meal&quot;, &quot;price&quot;: 1700}                                          |</span></span>
<span class="line"><span>| {&quot;name&quot;: &quot;manju&quot;, &quot;price&quot;: 200, &quot;category&quot;: [&quot;sweets&quot;, &quot;heat&quot;, &quot;japanese sweets&quot;]} |</span></span>
<span class="line"><span>| {&quot;name&quot;: &quot;icecream&quot;, &quot;price&quot;: 400, &quot;category&quot;: [&quot;sweets&quot;, &quot;heat&quot;, &quot;ice&quot;]}          |</span></span>
<span class="line"><span>+------------------------------------------------------------------------------------+</span></span></code></pre></div><h2 id="トリッキーな使用方法" tabindex="-1">トリッキーな使用方法 <a class="header-anchor" href="#トリッキーな使用方法" aria-label="Permalink to &quot;トリッキーな使用方法&quot;">​</a></h2><h2 id="jsonの1要素をカラムとして独立させる" tabindex="-1"><code>JSON</code>の1要素をカラムとして独立させる <a class="header-anchor" href="#jsonの1要素をカラムとして独立させる" aria-label="Permalink to &quot;\`JSON\`の1要素をカラムとして独立させる&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt;　ALTER TABLE menu</span></span>
<span class="line"><span>        ADD name VARCHAR(255) GENERATED ALWAYS AS(j-&gt;&gt;&#39;$.name&#39;) STORED</span></span>
<span class="line"><span>        ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mysql&gt; SHOW CREATE TABLE menu\\G</span></span>
<span class="line"><span>*************************** 1. row ***************************</span></span>
<span class="line"><span>       Table: menu</span></span>
<span class="line"><span>Create Table: CREATE TABLE \`menu\` (</span></span>
<span class="line"><span>  \`id\` int NOT NULL AUTO_INCREMENT,</span></span>
<span class="line"><span>  \`j\` json DEFAULT NULL,</span></span>
<span class="line"><span>  \`name\` varchar(255) GENERATED ALWAYS AS (json_unquote(json_extract(\`j\`,_utf8mb3&#39;$.name&#39;))) STORED,</span></span>
<span class="line"><span>  PRIMARY KEY (\`id\`)</span></span>
<span class="line"><span>) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci</span></span></code></pre></div><p> <code>GENERATED ALWAYS</code>を指定したカラムを追加。これにより、<code>menu.name</code>カラムは、<code>JSON</code>の<code>name</code>を参照する。</p><h3 id="json配列をテーブルのようにする" tabindex="-1"><code>JSON</code>配列をテーブルのようにする <a class="header-anchor" href="#json配列をテーブルのようにする" aria-label="Permalink to &quot;\`JSON\`配列をテーブルのようにする&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; SELECT * FROM</span></span>
<span class="line"><span>         JSON_TABLE(</span></span>
<span class="line"><span>             &#39;[{&quot;a&quot;:1,&quot;b&quot;:2}, {&quot;a&quot;:99,&quot;b&quot;:44}]&#39;</span></span>
<span class="line"><span>             , &#39;$[*]&#39; COLUMNS (ia int PATH &#39;$.a&#39;, ib int PATH &#39;$.b&#39;)</span></span>
<span class="line"><span>         ) as t;</span></span>
<span class="line"><span>+------+------+</span></span>
<span class="line"><span>| ia   | ib   |</span></span>
<span class="line"><span>+------+------+</span></span>
<span class="line"><span>|    1 |    2 |</span></span>
<span class="line"><span>|   99 |   44 |</span></span>
<span class="line"><span>+------+------+</span></span></code></pre></div><p> <code>JSON_TABLE()</code>で作ったテーブルは、ほかのテーブルと<code>JOIN</code>可能。</p><h2 id="pathの表記方法" tabindex="-1"><code>path</code>の表記方法 <a class="header-anchor" href="#pathの表記方法" aria-label="Permalink to &quot;\`path\`の表記方法&quot;">​</a></h2><p> <code>MySQL</code>型を扱うときの、<code>JSON</code>の<code>path</code>記法。</p><h2 id="jsonのpath記法" tabindex="-1"><code>JSON</code>の<code>path</code>記法 <a class="header-anchor" href="#jsonのpath記法" aria-label="Permalink to &quot;\`JSON\`の\`path\`記法&quot;">​</a></h2><table tabindex="0"><thead><tr><th>&#39;$.name&#39;</th><th>name の値</th></tr></thead><tbody><tr><td>&#39;$[0]&#39;</td><td>配列の一番頭</td></tr><tr><td>&#39;$.a[1]&#39;</td><td><code>{&quot;a&quot;:[]}</code>となっているとき,a 配列の2番目</td></tr><tr><td>&#39;$.*&#39;</td><td>名前のワイルドカード (全名前が対象。名前のないものは無視)</td></tr><tr><td>&#39;$.[*]&#39;</td><td>配列要素のワイルドカード</td></tr><tr><td>&#39;$**&#39;</td><td>あらゆるパスの中から選び出す</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mysql&gt; SELECT JSON_EXTRACT(&#39;{&quot;a&quot;:1, &quot;b&quot;:&quot;z&quot;}&#39;, &#39;$.*&#39;);</span></span>
<span class="line"><span>+-----------------------------------------+</span></span>
<span class="line"><span>| JSON_EXTRACT(&#39;{&quot;a&quot;:1, &quot;b&quot;:&quot;z&quot;}&#39;, &#39;$.*&#39;) |</span></span>
<span class="line"><span>+-----------------------------------------+</span></span>
<span class="line"><span>| [1, &quot;z&quot;]                                |</span></span>
<span class="line"><span>+-----------------------------------------+</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mysql&gt; SELECT JSON_EXTRACT(&#39;[1,2,3]&#39;, &#39;$[*]&#39;);</span></span>
<span class="line"><span>+---------------------------------+</span></span>
<span class="line"><span>| JSON_EXTRACT(&#39;[1,2,3]&#39;, &#39;$[*]&#39;) |</span></span>
<span class="line"><span>+---------------------------------+</span></span>
<span class="line"><span>| [1, 2, 3]                       |</span></span>
<span class="line"><span>+---------------------------------+</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 「a」という名前の値を取り出す。いかなる階層でも</span></span>
<span class="line"><span>mysql&gt; SELECT JSON_EXTRACT(&#39;{&quot;a&quot;:1, &quot;b&quot;:2, &quot;c&quot;:{&quot;a&quot;:&quot;z&quot;} }&#39;, &#39;$**.a&#39;);</span></span>
<span class="line"><span>+---------------------------------------------------------+</span></span>
<span class="line"><span>| JSON_EXTRACT(&#39;{&quot;a&quot;:1, &quot;b&quot;:2, &quot;c&quot;:{&quot;a&quot;:&quot;z&quot;} }&#39;, &#39;$**.a&#39;) |</span></span>
<span class="line"><span>+---------------------------------------------------------+</span></span>
<span class="line"><span>| [1, &quot;z&quot;]                                                |</span></span>
<span class="line"><span>+---------------------------------------------------------+</span></span></code></pre></div><p> 何らかの値をデータベースのカラムに無理やり押し込むぐらいなら、<code>JSON</code>型の使用も選択肢としてもあり。</p>`,159)])])}const r=a(t,[["render",o]]);export{h as __pageData,r as default};
