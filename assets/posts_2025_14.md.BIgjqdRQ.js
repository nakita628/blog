import{_ as t,c as a,o as r,a5 as n}from"./chunks/framework.TIL9AXbx.js";const u=JSON.parse('{"title":"Clean Architecture 構造化プログラミング","description":"Clean Architecture 構造化プログラミング","frontmatter":{"date":"2025-04-19T00:00:00.000Z","title":"Clean Architecture 構造化プログラミング","description":"Clean Architecture 構造化プログラミング","tags":["Clean Architecture"],"prev":{"text":"Clean Architecture パラダイム","link":"../2025/13"},"next":false},"headers":[],"relativePath":"posts/2025/14.md","filePath":"posts/2025/14.md"}'),c={name:"posts/2025/14.md"};function o(i,e,l,s,h,p){return r(),a("div",null,e[0]||(e[0]=[n('<h1 id="clean-architecture-構造化プログラミング" tabindex="-1">Clean Architecture 構造化プログラミング <a class="header-anchor" href="#clean-architecture-構造化プログラミング" aria-label="Permalink to &quot;Clean Architecture 構造化プログラミング&quot;">​</a></h1><p> プログラムは「順次」「選択」「反復」の3つの構造で構築できる。  この発見が決定的なもの。モジュールを証明可能にする制御構造は、あらゆるプログラムを構築できる制御構造の最小セットと同じであった。</p><h2 id="機能分割" tabindex="-1">機能分割 <a class="header-anchor" href="#機能分割" aria-label="Permalink to &quot;機能分割&quot;">​</a></h2><p> 構造化プログラミングは、モジュールを証明可能な単位に再起的に分割する事を可能にする。それによって、モジュールは機能的に分割できる。つまり、大きな問題は上位レベルの機能に分割できる。分割された機能は、さらに下位レベルの機能へと無限に分割していくことができる。また、このように分割された機能は、構造化プログラミングの制限された制御構造を使用して表現することが可能。</p><p> 大きな問題をモジュールやコンポーネントに分割し、さらに小さな証明可能な機能へと分割していった。</p><h2 id="テスト" tabindex="-1">テスト <a class="header-anchor" href="#テスト" aria-label="Permalink to &quot;テスト&quot;">​</a></h2><p><strong>テストはバグが存在しないことではなく、バグが存在することを示すものである</strong></p><p> テストによってプログラムが正しくないことは証明できるが、プログラムが正しいことは証明できない。テストに十分な労力をかけていれば、そのプログラムは目的のために十分に真であるとみなせる。</p><p> 構造化プログラミングでは、プログラムを再起的に分割して、証明可能な小さな機能にする必要がある。そして、証明可能な小さな機能が正しくないことを、テストを使って証明する。テストが正しくないことを証明できなければ、その機能は目的のために十分にー正しいとみなすことができる。</p><h2 id="まとめ" tabindex="-1">まとめ <a class="header-anchor" href="#まとめ" aria-label="Permalink to &quot;まとめ&quot;">​</a></h2><p> 構造化プログラミングの価値を高めるのは、反証可能なプログラミングの単位を生成する能力。アーキテクチャレベルにおいて、<strong>機能分割</strong>がベストプラクティスだと考えられている理由。</p><p> 最小の機能から最大のコンポーネントまで、あらゆるレベルにおいて、ソフトウェアは科学のように、反証可能性によって動かされている。ソフトウェアアーキテクトは、簡単に反証できる(テスト可能な)モジュール、コンポーネント、サービスを定義しようとする。そのため、さらに上位のレベルにおいて、構造化プログラミングのような制限を課している。</p>',12)]))}const _=t(c,[["render",o]]);export{u as __pageData,_ as default};
