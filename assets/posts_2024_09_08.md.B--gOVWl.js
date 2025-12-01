import{_ as t,C as l,c as e,o as a,a7 as i,b as h,w as n,a as k,G as d,a8 as r}from"./chunks/framework.BK-5gBo2.js";const m=JSON.parse('{"title":"Yarn Prisma","description":"Yarn Prisma","frontmatter":{"date":"2024-09-08T00:00:00.000Z","title":"Yarn Prisma","description":"Yarn Prisma","tags":["Yarn","Prisma"],"prev":{"text":"Bun React","link":"/posts/2024/09/06"},"next":{"text":"Bun React","link":"/posts/2024/09/09"}},"headers":[],"relativePath":"posts/2024/09/08.md","filePath":"posts/2024/09/08.md"}'),E={name:"posts/2024/09/08.md"};function o(g,s,c,y,F,u){const p=l("Mermaid");return a(),e("div",null,[s[1]||(s[1]=i(`<h1 id="yarn-prisma" tabindex="-1">Yarn Prisma <a class="header-anchor" href="#yarn-prisma" aria-label="Permalink to &quot;Yarn Prisma&quot;">​</a></h1><h2 id="directory-structure" tabindex="-1">Directory Structure <a class="header-anchor" href="#directory-structure" aria-label="Permalink to &quot;Directory Structure&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>|-- package.json</span></span>
<span class="line"><span>|-- prisma</span></span>
<span class="line"><span>|   |-- dev.db</span></span>
<span class="line"><span>|   |-- dev.db-journal</span></span>
<span class="line"><span>|   |-- migrations</span></span>
<span class="line"><span>|   |   |-- *_init</span></span>
<span class="line"><span>|   |   |   \`-- migration.sql</span></span>
<span class="line"><span>|   |   \`-- migration_lock.toml</span></span>
<span class="line"><span>|   \`-- schema.prisma</span></span>
<span class="line"><span>|-- src</span></span>
<span class="line"><span>|   \`-- index.ts</span></span>
<span class="line"><span>\`-- tsconfig.json</span></span></code></pre></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-JmaLz" id="tab-_Cx1A8L" checked><label data-title="yarn" for="tab-_Cx1A8L">yarn</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prisma</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --dev</span></span></code></pre></div></div></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Jz46Z" id="tab-ObA6BM0" checked><label data-title="yarn" for="tab-ObA6BM0">yarn</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @prisma/client</span></span></code></pre></div></div></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-OTv2d" id="tab-7Ty13eY" checked><label data-title=".env" for="tab-7Ty13eY">.env</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DATABASE_URL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;file:./dev.db&quot;</span></span></code></pre></div></div></div><h2 id="schema-prisma作成" tabindex="-1"><code>schema.prisma</code>作成 <a class="header-anchor" href="#schema-prisma作成" aria-label="Permalink to &quot;\`schema.prisma\`作成&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-jiTou" id="tab-mBSb6B_" checked><label data-title="yarn" for="tab-mBSb6B_">yarn</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prisma</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --datasource-provider</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sqlite</span></span></code></pre></div></div></div><h2 id="migrate" tabindex="-1">Migrate <a class="header-anchor" href="#migrate" aria-label="Permalink to &quot;Migrate&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-khKQn" id="tab-QzVTOm3" checked><label data-title="yarn" for="tab-QzVTOm3">yarn</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prisma</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> migrate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div></div></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-2bz-1" id="tab-ltYcB-c" checked><label data-title="src/index.ts" for="tab-ltYcB-c">src/index.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { PrismaClient } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@prisma/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> prisma</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PrismaClient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> deleteUsers</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> prisma.user.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">deleteMany</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">deleteUsers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createUsers</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> prisma.user.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createMany</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    data: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;prisma&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        email: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;prisma@email.com&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;drizzle&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        email: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;drizzle@email.com&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;typeorm&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        email: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;typeorm@email.com&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createUsers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> users</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> prisma.user.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">findMany</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(users)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(e)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    process.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">exit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">finally</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> prisma.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$disconnect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span></code></pre></div></div></div><h2 id="execution" tabindex="-1">Execution <a class="header-anchor" href="#execution" aria-label="Permalink to &quot;Execution&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[</span></span>
<span class="line"><span>  { id: 1, email: &#39;prisma@email.com&#39;, name: &#39;prisma&#39; },</span></span>
<span class="line"><span>  { id: 2, email: &#39;drizzle@email.com&#39;, name: &#39;drizzle&#39; },</span></span>
<span class="line"><span>  { id: 3, email: &#39;typeorm@email.com&#39;, name: &#39;typeorm&#39; }</span></span>
<span class="line"><span>]</span></span></code></pre></div><h2 id="mermaid" tabindex="-1">Mermaid <a class="header-anchor" href="#mermaid" aria-label="Permalink to &quot;Mermaid&quot;">​</a></h2><ul><li><a href="https://github.com/keonik/prisma-erd-generator" target="_blank" rel="noreferrer">prisma-erd-generator </a></li></ul><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-lWPcO" id="tab-jM1SexN" checked><label data-title="yarn" for="tab-jM1SexN">yarn</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prisma-erd-generator</span></span></code></pre></div></div></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-uKDV2" id="tab-RhA3ciU" checked><label data-title="prisma/schema.prisma" for="tab-RhA3ciU">prisma/schema.prisma</label><input type="radio" name="group-uKDV2" id="tab-4QiORss"><label data-title="mermaid" for="tab-4QiORss">mermaid</label></div><div class="blocks"><div class="language-prisma vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">prisma</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">generator</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> client</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  provider </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;prisma-client-js&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">datasource</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> db</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  provider </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;sqlite&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  url      </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;DATABASE_URL&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">generator</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> erd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  provider </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;prisma-erd-generator&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  output   </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;er.md&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">model</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> User</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  id        </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        @id</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">autoincrement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  email     </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     @unique</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name      </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  profile   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Profile</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  posts     </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Post</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  comments  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Comment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  roles     </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">UserRole</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  createdAt </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DateTime</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   @default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  updatedAt </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DateTime</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   @updatedAt</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">model</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Profile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  id     </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     @id</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">autoincrement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  bio    </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  userId </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     @unique</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  user   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">User</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    @relation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fields</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">userId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">references</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">model</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Post</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  id         </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        @id</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">autoincrement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  title      </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  content    </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  published  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Boolean</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    @default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  authorId   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  author     </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">User</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">       @relation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fields</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">authorId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">references</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  categories </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Category</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  comments   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Comment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  tags       </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Tag</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  createdAt  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DateTime</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   @default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  updatedAt  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DateTime</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   @updatedAt</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">model</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Comment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  id        </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      @id</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">autoincrement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  content   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  postId    </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  post      </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Post</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     @relation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fields</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">postId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">references</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  authorId  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  author    </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">User</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     @relation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fields</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">authorId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">references</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  createdAt </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DateTime</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  updatedAt </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DateTime</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @updatedAt</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">model</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Category</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  id    </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    @id</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">autoincrement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @unique</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  posts </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Post</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">model</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Tag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  id    </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    @id</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">autoincrement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @unique</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  posts </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Post</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">model</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Role</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  id    </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        @id</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">autoincrement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     @unique</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  users </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">UserRole</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">model</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UserRole</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  userId </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  roleId </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  user   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">User</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @relation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fields</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">userId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">references</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  role   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Role</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @relation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fields</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">roleId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">references</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  @@id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">userId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">roleId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-mmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">erDiagram</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &quot;User&quot; {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Int id &quot;🗝️&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    String email </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    String name &quot;❓&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    DateTime createdAt </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    DateTime updatedAt </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &quot;Profile&quot; {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Int id &quot;🗝️&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    String bio &quot;❓&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &quot;Post&quot; {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Int id &quot;🗝️&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    String title </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    String content &quot;❓&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Boolean published </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    DateTime createdAt </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    DateTime updatedAt </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &quot;Comment&quot; {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Int id &quot;🗝️&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    String content </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    DateTime createdAt </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    DateTime updatedAt </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &quot;Category&quot; {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Int id &quot;🗝️&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    String name </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &quot;Tag&quot; {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Int id &quot;🗝️&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    String name </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &quot;Role&quot; {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Int id &quot;🗝️&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    String name </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &quot;UserRole&quot; {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;User&quot; o{--}o &quot;Profile&quot; : &quot;profile&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;User&quot; o{--}o &quot;Post&quot; : &quot;posts&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;User&quot; o{--}o &quot;Comment&quot; : &quot;comments&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;User&quot; o{--}o &quot;UserRole&quot; : &quot;roles&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;Profile&quot; o|--|| &quot;User&quot; : &quot;user&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;Post&quot; o|--|| &quot;User&quot; : &quot;author&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;Post&quot; o{--}o &quot;Category&quot; : &quot;categories&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;Post&quot; o{--}o &quot;Comment&quot; : &quot;comments&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;Post&quot; o{--}o &quot;Tag&quot; : &quot;tags&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;Comment&quot; o|--|| &quot;Post&quot; : &quot;post&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;Comment&quot; o|--|| &quot;User&quot; : &quot;author&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;Category&quot; o{--}o &quot;Post&quot; : &quot;posts&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;Tag&quot; o{--}o &quot;Post&quot; : &quot;posts&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;Role&quot; o{--}o &quot;UserRole&quot; : &quot;users&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;UserRole&quot; o|--|| &quot;User&quot; : &quot;user&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;UserRole&quot; o|--|| &quot;Role&quot; : &quot;role&quot;</span></span></code></pre></div></div></div><h2 id="generate" tabindex="-1">Generate <a class="header-anchor" href="#generate" aria-label="Permalink to &quot;Generate&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-ZWJur" id="tab-peeakEK" checked><label data-title="yarn" for="tab-peeakEK">yarn</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prisma</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> generate</span></span></code></pre></div></div></div>`,19)),(a(),h(r,null,{default:n(()=>[d(p,{id:"mermaid-58",class:"mermaid",graph:"erDiagram%0A%0A%20%20%22User%22%20%7B%0A%20%20%20%20Int%20id%20%22%F0%9F%97%9D%EF%B8%8F%22%0A%20%20%20%20String%20email%20%0A%20%20%20%20String%20name%20%22%E2%9D%93%22%0A%20%20%20%20DateTime%20createdAt%20%0A%20%20%20%20DateTime%20updatedAt%20%0A%20%20%20%20%7D%0A%20%20%0A%0A%20%20%22Profile%22%20%7B%0A%20%20%20%20Int%20id%20%22%F0%9F%97%9D%EF%B8%8F%22%0A%20%20%20%20String%20bio%20%22%E2%9D%93%22%0A%20%20%20%20%7D%0A%20%20%0A%0A%20%20%22Post%22%20%7B%0A%20%20%20%20Int%20id%20%22%F0%9F%97%9D%EF%B8%8F%22%0A%20%20%20%20String%20title%20%0A%20%20%20%20String%20content%20%22%E2%9D%93%22%0A%20%20%20%20Boolean%20published%20%0A%20%20%20%20DateTime%20createdAt%20%0A%20%20%20%20DateTime%20updatedAt%20%0A%20%20%20%20%7D%0A%20%20%0A%0A%20%20%22Comment%22%20%7B%0A%20%20%20%20Int%20id%20%22%F0%9F%97%9D%EF%B8%8F%22%0A%20%20%20%20String%20content%20%0A%20%20%20%20DateTime%20createdAt%20%0A%20%20%20%20DateTime%20updatedAt%20%0A%20%20%20%20%7D%0A%20%20%0A%0A%20%20%22Category%22%20%7B%0A%20%20%20%20Int%20id%20%22%F0%9F%97%9D%EF%B8%8F%22%0A%20%20%20%20String%20name%20%0A%20%20%20%20%7D%0A%20%20%0A%0A%20%20%22Tag%22%20%7B%0A%20%20%20%20Int%20id%20%22%F0%9F%97%9D%EF%B8%8F%22%0A%20%20%20%20String%20name%20%0A%20%20%20%20%7D%0A%20%20%0A%0A%20%20%22Role%22%20%7B%0A%20%20%20%20Int%20id%20%22%F0%9F%97%9D%EF%B8%8F%22%0A%20%20%20%20String%20name%20%0A%20%20%20%20%7D%0A%20%20%0A%0A%20%20%22UserRole%22%20%7B%0A%0A%20%20%20%20%7D%0A%20%20%0A%20%20%20%20%22User%22%20o%7B--%7Do%20%22Profile%22%20%3A%20%22profile%22%0A%20%20%20%20%22User%22%20o%7B--%7Do%20%22Post%22%20%3A%20%22posts%22%0A%20%20%20%20%22User%22%20o%7B--%7Do%20%22Comment%22%20%3A%20%22comments%22%0A%20%20%20%20%22User%22%20o%7B--%7Do%20%22UserRole%22%20%3A%20%22roles%22%0A%20%20%20%20%22Profile%22%20o%7C--%7C%7C%20%22User%22%20%3A%20%22user%22%0A%20%20%20%20%22Post%22%20o%7C--%7C%7C%20%22User%22%20%3A%20%22author%22%0A%20%20%20%20%22Post%22%20o%7B--%7Do%20%22Category%22%20%3A%20%22categories%22%0A%20%20%20%20%22Post%22%20o%7B--%7Do%20%22Comment%22%20%3A%20%22comments%22%0A%20%20%20%20%22Post%22%20o%7B--%7Do%20%22Tag%22%20%3A%20%22tags%22%0A%20%20%20%20%22Comment%22%20o%7C--%7C%7C%20%22Post%22%20%3A%20%22post%22%0A%20%20%20%20%22Comment%22%20o%7C--%7C%7C%20%22User%22%20%3A%20%22author%22%0A%20%20%20%20%22Category%22%20o%7B--%7Do%20%22Post%22%20%3A%20%22posts%22%0A%20%20%20%20%22Tag%22%20o%7B--%7Do%20%22Post%22%20%3A%20%22posts%22%0A%20%20%20%20%22Role%22%20o%7B--%7Do%20%22UserRole%22%20%3A%20%22users%22%0A%20%20%20%20%22UserRole%22%20o%7C--%7C%7C%20%22User%22%20%3A%20%22user%22%0A%20%20%20%20%22UserRole%22%20o%7C--%7C%7C%20%22Role%22%20%3A%20%22role%22%0A"})]),fallback:n(()=>[...s[0]||(s[0]=[k(" Loading... ",-1)])]),_:1})),s[2]||(s[2]=i(`<h2 id="plantuml" tabindex="-1">PlantUML <a class="header-anchor" href="#plantuml" aria-label="Permalink to &quot;PlantUML&quot;">​</a></h2><ul><li><a href="https://github.com/dbgso/prisma-generator-plantuml-erd/tree/main/packages/generator" target="_blank" rel="noreferrer">prisma-generator-plantuml-erd</a></li></ul><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Q4MaN" id="tab-vhZlXmV" checked><label data-title="yarn" for="tab-vhZlXmV">yarn</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prisma-generator-plantuml-erd</span></span></code></pre></div></div></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-_A7MT" id="tab-H1WawnX" checked><label data-title="prisma/schema.prisma" for="tab-H1WawnX">prisma/schema.prisma</label><input type="radio" name="group-_A7MT" id="tab-YNtGjzp"><label data-title="plantuml" for="tab-YNtGjzp">plantuml</label></div><div class="blocks"><div class="language-prisma vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">prisma</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// This is your Prisma schema file,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// learn more about it in the docs: https://pris.ly/d/prisma-schema</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">generator</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> client</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  provider </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;prisma-client-js&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">datasource</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> db</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  provider </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;sqlite&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  url      </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;DATABASE_URL&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">generator</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> erd_plantuml</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  provider                   </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;prisma-generator-plantuml-erd&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  output                     </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;erd.puml&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  showUniqueKeyLabel         </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  isShowForeignKeyOnRelation </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">model</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> User</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  id        </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        @id</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">autoincrement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  email     </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     @unique</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name      </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  profile   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Profile</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  posts     </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Post</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  comments  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Comment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  roles     </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">UserRole</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  createdAt </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DateTime</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   @default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  updatedAt </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DateTime</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   @updatedAt</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">model</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Profile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  id     </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     @id</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">autoincrement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  bio    </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  userId </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     @unique</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  user   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">User</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    @relation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fields</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">userId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">references</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">model</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Post</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  id         </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        @id</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">autoincrement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  title      </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  content    </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  published  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Boolean</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    @default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  authorId   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  author     </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">User</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">       @relation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fields</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">authorId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">references</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  categories </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Category</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  comments   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Comment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  tags       </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Tag</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  createdAt  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DateTime</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   @default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  updatedAt  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DateTime</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   @updatedAt</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">model</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Comment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  id        </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      @id</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">autoincrement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  content   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  postId    </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  post      </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Post</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     @relation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fields</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">postId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">references</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  authorId  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  author    </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">User</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     @relation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fields</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">authorId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">references</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  createdAt </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DateTime</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  updatedAt </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DateTime</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @updatedAt</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">model</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Category</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  id    </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    @id</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">autoincrement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @unique</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  posts </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Post</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">model</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Tag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  id    </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    @id</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">autoincrement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @unique</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  posts </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Post</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">model</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Role</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  id    </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        @id</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">autoincrement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     @unique</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  users </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">UserRole</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">model</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UserRole</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  userId </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  roleId </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  user   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">User</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @relation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fields</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">userId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">references</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  role   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Role</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @relation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fields</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">roleId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">references</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  @@id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">userId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">roleId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@startuml erd</span></span>
<span class="line"><span>skinparam linetype ortho</span></span>
<span class="line"><span>entity &quot;User&quot; as User {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  * email : [UK] String</span></span>
<span class="line"><span>  name : String</span></span>
<span class="line"><span>  * createdAt : DateTime</span></span>
<span class="line"><span>  * updatedAt : DateTime</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>entity &quot;Profile&quot; as Profile {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  bio : String</span></span>
<span class="line"><span>  # userId : [UK] [FK] User</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>entity &quot;Post&quot; as Post {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  * title : String</span></span>
<span class="line"><span>  content : String</span></span>
<span class="line"><span>  * published : Boolean</span></span>
<span class="line"><span>  # authorId : [FK] User</span></span>
<span class="line"><span>  * createdAt : DateTime</span></span>
<span class="line"><span>  * updatedAt : DateTime</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>entity &quot;Comment&quot; as Comment {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  * content : String</span></span>
<span class="line"><span>  # postId : [FK] Post</span></span>
<span class="line"><span>  # authorId : [FK] User</span></span>
<span class="line"><span>  * createdAt : DateTime</span></span>
<span class="line"><span>  * updatedAt : DateTime</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>entity &quot;Category&quot; as Category {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  * name : [UK] String</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>entity &quot;Tag&quot; as Tag {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  * name : [UK] String</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>entity &quot;Role&quot; as Role {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  * name : [UK] String</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>entity &quot;UserRole&quot; as UserRole {</span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  # userId : [FK] User</span></span>
<span class="line"><span>  # roleId : [FK] Role</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39; Relations</span></span>
<span class="line"><span>Profile |o--|| User: userId</span></span>
<span class="line"><span>Post }o--|| User: authorId</span></span>
<span class="line"><span>Comment }o--|| Post: postId</span></span>
<span class="line"><span>Comment }o--|| User: authorId</span></span>
<span class="line"><span>UserRole }o--|| User: userId</span></span>
<span class="line"><span>UserRole }o--|| Role: roleId</span></span>
<span class="line"><span>&#39; ManyToMany Relations</span></span>
<span class="line"><span>Post }o--o{ Category</span></span>
<span class="line"><span>Post }o--o{ Tag</span></span>
<span class="line"><span>&#39; enum relations</span></span>
<span class="line"><span>@enduml</span></span></code></pre></div></div></div><h2 id="generate-1" tabindex="-1">Generate <a class="header-anchor" href="#generate-1" aria-label="Permalink to &quot;Generate&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-TyKgR" id="tab-_EJvisR" checked><label data-title="yarn" for="tab-_EJvisR">yarn</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prisma</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> generate</span></span></code></pre></div></div></div><img src="https://www.plantuml.com/plantuml/svg/jPJDRi8m3CVlUGeB3fEO-W8ziGzDGjCanE24TWZKWsZvg9BqK07lFYUafMMC0zCkgMF7__piM1qxpwslb6JkI-YIMwv02es-BX6CzLl3K7lXQnWi7De1S0V1W1sx1r70Slhw0JbCj0UMPGnW1AYuaEHRBYZqxgtG6_9hhf2SxNu4QulSO_7WoVrCrbmeZ86gB7u63gm5cLhpAIH6bcJ_YhCIfdlh42g2dnGDtlA5bb1FJzyuVnGduqgXT5hsQbeRxKcaNsPPhQHmMmntFXeZaUi8mYjgRa9fAVxKboUZ5DaHFTbNw2_03g6aYaz8eVx_OYNVnjZw29isLsZJ-7HdggCsvvieHD-RDMOcZLGmRbO9dMcLcWsfnUJkz7NQE0HBXqxka18qxs26adjXj6FDdEzDbkttCJDFQYoEwQ4RQDwBDMEGek5adXxvF7QMsR8VBjnu7WnsdgeWx3Ukwxa9QxU2XjBisWVlEUdnA1TrfS2sMMFK1VsTlW40" alt="erd"><h2 id="md" tabindex="-1">Md <a class="header-anchor" href="#md" aria-label="Permalink to &quot;Md&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-q7S1w" id="tab-wjFFdh2" checked><label data-title="prisma/schema.prisma" for="tab-wjFFdh2">prisma/schema.prisma</label></div><div class="blocks"><div class="language-prisma vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">prisma</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// This is your Prisma schema file,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// learn more about it in the docs: https://pris.ly/d/prisma-schema</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">generator</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> client</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  provider </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;prisma-client-js&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">datasource</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> db</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  provider </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;sqlite&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  url      </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;DATABASE_URL&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">generator</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> erd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  provider </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;prisma-erd-generator&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  output   </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;er.md&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">generator</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> erd_plantuml</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  provider                   </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;prisma-generator-plantuml-erd&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  exportPerTables            </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  showUniqueKeyLabel         </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  isShowForeignKeyOnRelation </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  markdownOutput             </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./example-tables.md&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  markdownIncludeERD         </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">model</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> User</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  id        </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        @id</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">autoincrement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  email     </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     @unique</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name      </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  profile   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Profile</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  posts     </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Post</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  comments  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Comment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  roles     </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">UserRole</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  createdAt </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DateTime</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   @default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  updatedAt </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DateTime</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   @updatedAt</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">model</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Profile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  id     </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     @id</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">autoincrement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  bio    </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  userId </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     @unique</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  user   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">User</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    @relation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fields</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">userId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">references</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">model</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Post</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  id         </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        @id</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">autoincrement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  title      </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  content    </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  published  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Boolean</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    @default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  authorId   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  author     </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">User</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">       @relation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fields</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">authorId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">references</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  categories </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Category</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  comments   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Comment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  tags       </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Tag</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  createdAt  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DateTime</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   @default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  updatedAt  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DateTime</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   @updatedAt</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">model</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Comment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  id        </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      @id</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">autoincrement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  content   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  postId    </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  post      </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Post</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     @relation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fields</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">postId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">references</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  authorId  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  author    </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">User</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     @relation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fields</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">authorId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">references</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  createdAt </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DateTime</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  updatedAt </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DateTime</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @updatedAt</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">model</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Category</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  id    </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    @id</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">autoincrement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @unique</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  posts </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Post</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">model</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Tag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  id    </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    @id</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">autoincrement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @unique</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  posts </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Post</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">model</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Role</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  id    </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        @id</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">autoincrement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     @unique</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  users </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">UserRole</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">model</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UserRole</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  userId </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  roleId </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Int</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  user   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">User</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @relation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fields</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">userId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">references</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  role   </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Role</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @relation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fields</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">roleId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">references</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  @@id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">userId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">roleId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="generate-2" tabindex="-1">Generate <a class="header-anchor" href="#generate-2" aria-label="Permalink to &quot;Generate&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-KE0DS" id="tab-wS9-ZiO" checked><label data-title="yarn" for="tab-wS9-ZiO">yarn</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prisma</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> generate</span></span></code></pre></div></div></div><details class="details custom-block"><summary>Generated Md</summary><h1 id="tables" tabindex="-1">Tables <a class="header-anchor" href="#tables" aria-label="Permalink to &quot;Tables&quot;">​</a></h1><ul><li><a href="#user">User</a></li><li><a href="#profile">Profile</a></li><li><a href="#post">Post</a></li><li><a href="#comment">Comment</a></li><li><a href="#category">Category</a></li><li><a href="#tag">Tag</a></li><li><a href="#role">Role</a></li><li><a href="#userrole">UserRole</a></li></ul><h1 id="er-diagram" tabindex="-1">ER diagram <a class="header-anchor" href="#er-diagram" aria-label="Permalink to &quot;ER diagram&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@startuml erd</span></span>
<span class="line"><span>skinparam linetype ortho</span></span>
<span class="line"><span>entity &quot;User&quot; as User {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  * email : [UK] String</span></span>
<span class="line"><span>  name : String</span></span>
<span class="line"><span>  * createdAt : DateTime</span></span>
<span class="line"><span>  * updatedAt : DateTime</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>entity &quot;Profile&quot; as Profile {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  bio : String</span></span>
<span class="line"><span>  # userId : [UK] [FK] User</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>entity &quot;Post&quot; as Post {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  * title : String</span></span>
<span class="line"><span>  content : String</span></span>
<span class="line"><span>  * published : Boolean</span></span>
<span class="line"><span>  # authorId : [FK] User</span></span>
<span class="line"><span>  * createdAt : DateTime</span></span>
<span class="line"><span>  * updatedAt : DateTime</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>entity &quot;Comment&quot; as Comment {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  * content : String</span></span>
<span class="line"><span>  # postId : [FK] Post</span></span>
<span class="line"><span>  # authorId : [FK] User</span></span>
<span class="line"><span>  * createdAt : DateTime</span></span>
<span class="line"><span>  * updatedAt : DateTime</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>entity &quot;Category&quot; as Category {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  * name : [UK] String</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>entity &quot;Tag&quot; as Tag {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  * name : [UK] String</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>entity &quot;Role&quot; as Role {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  * name : [UK] String</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>entity &quot;UserRole&quot; as UserRole {</span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  # userId : [FK] User</span></span>
<span class="line"><span>  # roleId : [FK] Role</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39; Relations</span></span>
<span class="line"><span>Profile |o--|| User: userId</span></span>
<span class="line"><span>Post }o--|| User: authorId</span></span>
<span class="line"><span>Comment }o--|| Post: postId</span></span>
<span class="line"><span>Comment }o--|| User: authorId</span></span>
<span class="line"><span>UserRole }o--|| User: userId</span></span>
<span class="line"><span>UserRole }o--|| Role: roleId</span></span>
<span class="line"><span>&#39; ManyToMany Relations</span></span>
<span class="line"><span>Post }o--o{ Category</span></span>
<span class="line"><span>Post }o--o{ Tag</span></span>
<span class="line"><span>&#39; enum relations</span></span>
<span class="line"><span>@enduml</span></span></code></pre></div><h1 id="user" tabindex="-1">User <a class="header-anchor" href="#user" aria-label="Permalink to &quot;User&quot;">​</a></h1><h2 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h2><h2 id="columns" tabindex="-1">Columns <a class="header-anchor" href="#columns" aria-label="Permalink to &quot;Columns&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Nullable</th><th>Unique</th><th>Children</th><th>Parent</th><th>Comment</th></tr></thead><tbody><tr><td>id</td><td>Int</td><td>autoincrement</td><td>false</td><td>true</td><td><a href="#profile">Profile</a>, <a href="#post">Post</a>, <a href="#comment">Comment</a>, <a href="#userrole">UserRole</a></td><td></td><td></td></tr><tr><td>email</td><td>String</td><td></td><td>false</td><td>true</td><td></td><td></td><td></td></tr><tr><td>name</td><td>String</td><td></td><td>true</td><td>false</td><td></td><td></td><td></td></tr><tr><td>createdAt</td><td>DateTime</td><td>now</td><td>false</td><td>false</td><td></td><td></td><td></td></tr><tr><td>updatedAt</td><td>DateTime</td><td></td><td>false</td><td>false</td><td></td><td></td><td></td></tr></tbody></table><h2 id="er-diagram-1" tabindex="-1">ER diagram <a class="header-anchor" href="#er-diagram-1" aria-label="Permalink to &quot;ER diagram&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@startuml User</span></span>
<span class="line"><span>skinparam linetype ortho</span></span>
<span class="line"><span>entity &quot;User&quot; as User {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  * email : [UK] String</span></span>
<span class="line"><span>  name : String</span></span>
<span class="line"><span>  * createdAt : DateTime</span></span>
<span class="line"><span>  * updatedAt : DateTime</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>entity &quot;Profile&quot; as Profile {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  bio : String</span></span>
<span class="line"><span>  # userId : [UK] [FK] User</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>entity &quot;Post&quot; as Post {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  * title : String</span></span>
<span class="line"><span>  content : String</span></span>
<span class="line"><span>  * published : Boolean</span></span>
<span class="line"><span>  # authorId : [FK] User</span></span>
<span class="line"><span>  * createdAt : DateTime</span></span>
<span class="line"><span>  * updatedAt : DateTime</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>entity &quot;Comment&quot; as Comment {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  * content : String</span></span>
<span class="line"><span>  # postId : [FK] Post</span></span>
<span class="line"><span>  # authorId : [FK] User</span></span>
<span class="line"><span>  * createdAt : DateTime</span></span>
<span class="line"><span>  * updatedAt : DateTime</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>entity &quot;UserRole&quot; as UserRole {</span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  # userId : [FK] User</span></span>
<span class="line"><span>  # roleId : [FK] Role</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39; Relations</span></span>
<span class="line"><span>Profile |o--|| User: userId</span></span>
<span class="line"><span>Post }o--|| User: authorId</span></span>
<span class="line"><span>Comment }o--|| Post: postId</span></span>
<span class="line"><span>Comment }o--|| User: authorId</span></span>
<span class="line"><span>UserRole }o--|| User: userId</span></span>
<span class="line"><span>&#39; ManyToMany Relations</span></span>
<span class="line"><span>&#39; enum relations</span></span>
<span class="line"><span>@enduml</span></span></code></pre></div><h1 id="profile" tabindex="-1">Profile <a class="header-anchor" href="#profile" aria-label="Permalink to &quot;Profile&quot;">​</a></h1><h2 id="description-1" tabindex="-1">Description <a class="header-anchor" href="#description-1" aria-label="Permalink to &quot;Description&quot;">​</a></h2><h2 id="columns-1" tabindex="-1">Columns <a class="header-anchor" href="#columns-1" aria-label="Permalink to &quot;Columns&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Nullable</th><th>Unique</th><th>Children</th><th>Parent</th><th>Comment</th></tr></thead><tbody><tr><td>id</td><td>Int</td><td>autoincrement</td><td>false</td><td>true</td><td></td><td></td><td></td></tr><tr><td>bio</td><td>String</td><td></td><td>true</td><td>false</td><td></td><td></td><td></td></tr><tr><td>userId</td><td>Int</td><td></td><td>false</td><td>true</td><td></td><td><a href="#user">User</a></td><td></td></tr></tbody></table><h2 id="er-diagram-2" tabindex="-1">ER diagram <a class="header-anchor" href="#er-diagram-2" aria-label="Permalink to &quot;ER diagram&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@startuml Profile</span></span>
<span class="line"><span>skinparam linetype ortho</span></span>
<span class="line"><span>entity &quot;User&quot; as User {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  * email : [UK] String</span></span>
<span class="line"><span>  name : String</span></span>
<span class="line"><span>  * createdAt : DateTime</span></span>
<span class="line"><span>  * updatedAt : DateTime</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>entity &quot;Profile&quot; as Profile {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  bio : String</span></span>
<span class="line"><span>  # userId : [UK] [FK] User</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39; Relations</span></span>
<span class="line"><span>Profile |o--|| User: userId</span></span>
<span class="line"><span>&#39; ManyToMany Relations</span></span>
<span class="line"><span>&#39; enum relations</span></span>
<span class="line"><span>@enduml</span></span></code></pre></div><h1 id="post" tabindex="-1">Post <a class="header-anchor" href="#post" aria-label="Permalink to &quot;Post&quot;">​</a></h1><h2 id="description-2" tabindex="-1">Description <a class="header-anchor" href="#description-2" aria-label="Permalink to &quot;Description&quot;">​</a></h2><h2 id="columns-2" tabindex="-1">Columns <a class="header-anchor" href="#columns-2" aria-label="Permalink to &quot;Columns&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Nullable</th><th>Unique</th><th>Children</th><th>Parent</th><th>Comment</th></tr></thead><tbody><tr><td>id</td><td>Int</td><td>autoincrement</td><td>false</td><td>true</td><td><a href="#comment">Comment</a></td><td></td><td></td></tr><tr><td>title</td><td>String</td><td></td><td>false</td><td>false</td><td></td><td></td><td></td></tr><tr><td>content</td><td>String</td><td></td><td>true</td><td>false</td><td></td><td></td><td></td></tr><tr><td>published</td><td>Boolean</td><td></td><td>false</td><td>false</td><td></td><td></td><td></td></tr><tr><td>authorId</td><td>Int</td><td></td><td>false</td><td>false</td><td></td><td><a href="#user">User</a></td><td></td></tr><tr><td>createdAt</td><td>DateTime</td><td>now</td><td>false</td><td>false</td><td></td><td></td><td></td></tr><tr><td>updatedAt</td><td>DateTime</td><td></td><td>false</td><td>false</td><td></td><td></td><td></td></tr></tbody></table><h2 id="er-diagram-3" tabindex="-1">ER diagram <a class="header-anchor" href="#er-diagram-3" aria-label="Permalink to &quot;ER diagram&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@startuml Post</span></span>
<span class="line"><span>skinparam linetype ortho</span></span>
<span class="line"><span>entity &quot;User&quot; as User {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  * email : [UK] String</span></span>
<span class="line"><span>  name : String</span></span>
<span class="line"><span>  * createdAt : DateTime</span></span>
<span class="line"><span>  * updatedAt : DateTime</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>entity &quot;Post&quot; as Post {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  * title : String</span></span>
<span class="line"><span>  content : String</span></span>
<span class="line"><span>  * published : Boolean</span></span>
<span class="line"><span>  # authorId : [FK] User</span></span>
<span class="line"><span>  * createdAt : DateTime</span></span>
<span class="line"><span>  * updatedAt : DateTime</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>entity &quot;Comment&quot; as Comment {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  * content : String</span></span>
<span class="line"><span>  # postId : [FK] Post</span></span>
<span class="line"><span>  # authorId : [FK] User</span></span>
<span class="line"><span>  * createdAt : DateTime</span></span>
<span class="line"><span>  * updatedAt : DateTime</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>entity &quot;Category&quot; as Category {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  * name : [UK] String</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>entity &quot;Tag&quot; as Tag {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  * name : [UK] String</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39; Relations</span></span>
<span class="line"><span>Post }o--|| User: authorId</span></span>
<span class="line"><span>Comment }o--|| Post: postId</span></span>
<span class="line"><span>Comment }o--|| User: authorId</span></span>
<span class="line"><span>&#39; ManyToMany Relations</span></span>
<span class="line"><span>Post }o--o{ Category</span></span>
<span class="line"><span>Post }o--o{ Tag</span></span>
<span class="line"><span>&#39; enum relations</span></span>
<span class="line"><span>@enduml</span></span></code></pre></div><h1 id="comment" tabindex="-1">Comment <a class="header-anchor" href="#comment" aria-label="Permalink to &quot;Comment&quot;">​</a></h1><h2 id="description-3" tabindex="-1">Description <a class="header-anchor" href="#description-3" aria-label="Permalink to &quot;Description&quot;">​</a></h2><h2 id="columns-3" tabindex="-1">Columns <a class="header-anchor" href="#columns-3" aria-label="Permalink to &quot;Columns&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Nullable</th><th>Unique</th><th>Children</th><th>Parent</th><th>Comment</th></tr></thead><tbody><tr><td>id</td><td>Int</td><td>autoincrement</td><td>false</td><td>true</td><td></td><td></td><td></td></tr><tr><td>content</td><td>String</td><td></td><td>false</td><td>false</td><td></td><td></td><td></td></tr><tr><td>postId</td><td>Int</td><td></td><td>false</td><td>false</td><td></td><td><a href="#post">Post</a></td><td></td></tr><tr><td>authorId</td><td>Int</td><td></td><td>false</td><td>false</td><td></td><td><a href="#user">User</a></td><td></td></tr><tr><td>createdAt</td><td>DateTime</td><td>now</td><td>false</td><td>false</td><td></td><td></td><td></td></tr><tr><td>updatedAt</td><td>DateTime</td><td></td><td>false</td><td>false</td><td></td><td></td><td></td></tr></tbody></table><h2 id="er-diagram-4" tabindex="-1">ER diagram <a class="header-anchor" href="#er-diagram-4" aria-label="Permalink to &quot;ER diagram&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@startuml Comment</span></span>
<span class="line"><span>skinparam linetype ortho</span></span>
<span class="line"><span>entity &quot;User&quot; as User {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  * email : [UK] String</span></span>
<span class="line"><span>  name : String</span></span>
<span class="line"><span>  * createdAt : DateTime</span></span>
<span class="line"><span>  * updatedAt : DateTime</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>entity &quot;Post&quot; as Post {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  * title : String</span></span>
<span class="line"><span>  content : String</span></span>
<span class="line"><span>  * published : Boolean</span></span>
<span class="line"><span>  # authorId : [FK] User</span></span>
<span class="line"><span>  * createdAt : DateTime</span></span>
<span class="line"><span>  * updatedAt : DateTime</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>entity &quot;Comment&quot; as Comment {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  * content : String</span></span>
<span class="line"><span>  # postId : [FK] Post</span></span>
<span class="line"><span>  # authorId : [FK] User</span></span>
<span class="line"><span>  * createdAt : DateTime</span></span>
<span class="line"><span>  * updatedAt : DateTime</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39; Relations</span></span>
<span class="line"><span>Post }o--|| User: authorId</span></span>
<span class="line"><span>Comment }o--|| Post: postId</span></span>
<span class="line"><span>Comment }o--|| User: authorId</span></span>
<span class="line"><span>&#39; ManyToMany Relations</span></span>
<span class="line"><span>&#39; enum relations</span></span>
<span class="line"><span>@enduml</span></span></code></pre></div><h1 id="category" tabindex="-1">Category <a class="header-anchor" href="#category" aria-label="Permalink to &quot;Category&quot;">​</a></h1><h2 id="description-4" tabindex="-1">Description <a class="header-anchor" href="#description-4" aria-label="Permalink to &quot;Description&quot;">​</a></h2><h2 id="columns-4" tabindex="-1">Columns <a class="header-anchor" href="#columns-4" aria-label="Permalink to &quot;Columns&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Nullable</th><th>Unique</th><th>Children</th><th>Parent</th><th>Comment</th></tr></thead><tbody><tr><td>id</td><td>Int</td><td>autoincrement</td><td>false</td><td>true</td><td></td><td></td><td></td></tr><tr><td>name</td><td>String</td><td></td><td>false</td><td>true</td><td></td><td></td><td></td></tr></tbody></table><h2 id="er-diagram-5" tabindex="-1">ER diagram <a class="header-anchor" href="#er-diagram-5" aria-label="Permalink to &quot;ER diagram&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@startuml Category</span></span>
<span class="line"><span>skinparam linetype ortho</span></span>
<span class="line"><span>entity &quot;Post&quot; as Post {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  * title : String</span></span>
<span class="line"><span>  content : String</span></span>
<span class="line"><span>  * published : Boolean</span></span>
<span class="line"><span>  # authorId : [FK] User</span></span>
<span class="line"><span>  * createdAt : DateTime</span></span>
<span class="line"><span>  * updatedAt : DateTime</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>entity &quot;Category&quot; as Category {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  * name : [UK] String</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39; Relations</span></span>
<span class="line"><span>&#39; ManyToMany Relations</span></span>
<span class="line"><span>Post }o--o{ Category</span></span>
<span class="line"><span>&#39; enum relations</span></span>
<span class="line"><span>@enduml</span></span></code></pre></div><h1 id="tag" tabindex="-1">Tag <a class="header-anchor" href="#tag" aria-label="Permalink to &quot;Tag&quot;">​</a></h1><h2 id="description-5" tabindex="-1">Description <a class="header-anchor" href="#description-5" aria-label="Permalink to &quot;Description&quot;">​</a></h2><h2 id="columns-5" tabindex="-1">Columns <a class="header-anchor" href="#columns-5" aria-label="Permalink to &quot;Columns&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Nullable</th><th>Unique</th><th>Children</th><th>Parent</th><th>Comment</th></tr></thead><tbody><tr><td>id</td><td>Int</td><td>autoincrement</td><td>false</td><td>true</td><td></td><td></td><td></td></tr><tr><td>name</td><td>String</td><td></td><td>false</td><td>true</td><td></td><td></td><td></td></tr></tbody></table><h2 id="er-diagram-6" tabindex="-1">ER diagram <a class="header-anchor" href="#er-diagram-6" aria-label="Permalink to &quot;ER diagram&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@startuml Tag</span></span>
<span class="line"><span>skinparam linetype ortho</span></span>
<span class="line"><span>entity &quot;Post&quot; as Post {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  * title : String</span></span>
<span class="line"><span>  content : String</span></span>
<span class="line"><span>  * published : Boolean</span></span>
<span class="line"><span>  # authorId : [FK] User</span></span>
<span class="line"><span>  * createdAt : DateTime</span></span>
<span class="line"><span>  * updatedAt : DateTime</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>entity &quot;Tag&quot; as Tag {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  * name : [UK] String</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39; Relations</span></span>
<span class="line"><span>&#39; ManyToMany Relations</span></span>
<span class="line"><span>Post }o--o{ Tag</span></span>
<span class="line"><span>&#39; enum relations</span></span>
<span class="line"><span>@enduml</span></span></code></pre></div><h1 id="role" tabindex="-1">Role <a class="header-anchor" href="#role" aria-label="Permalink to &quot;Role&quot;">​</a></h1><h2 id="description-6" tabindex="-1">Description <a class="header-anchor" href="#description-6" aria-label="Permalink to &quot;Description&quot;">​</a></h2><h2 id="columns-6" tabindex="-1">Columns <a class="header-anchor" href="#columns-6" aria-label="Permalink to &quot;Columns&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Nullable</th><th>Unique</th><th>Children</th><th>Parent</th><th>Comment</th></tr></thead><tbody><tr><td>id</td><td>Int</td><td>autoincrement</td><td>false</td><td>true</td><td><a href="#userrole">UserRole</a></td><td></td><td></td></tr><tr><td>name</td><td>String</td><td></td><td>false</td><td>true</td><td></td><td></td><td></td></tr></tbody></table><h2 id="er-diagram-7" tabindex="-1">ER diagram <a class="header-anchor" href="#er-diagram-7" aria-label="Permalink to &quot;ER diagram&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@startuml Role</span></span>
<span class="line"><span>skinparam linetype ortho</span></span>
<span class="line"><span>entity &quot;Role&quot; as Role {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  * name : [UK] String</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>entity &quot;UserRole&quot; as UserRole {</span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  # userId : [FK] User</span></span>
<span class="line"><span>  # roleId : [FK] Role</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39; Relations</span></span>
<span class="line"><span>UserRole }o--|| Role: roleId</span></span>
<span class="line"><span>&#39; ManyToMany Relations</span></span>
<span class="line"><span>&#39; enum relations</span></span>
<span class="line"><span>@enduml</span></span></code></pre></div><h1 id="userrole" tabindex="-1">UserRole <a class="header-anchor" href="#userrole" aria-label="Permalink to &quot;UserRole&quot;">​</a></h1><h2 id="description-7" tabindex="-1">Description <a class="header-anchor" href="#description-7" aria-label="Permalink to &quot;Description&quot;">​</a></h2><h2 id="columns-7" tabindex="-1">Columns <a class="header-anchor" href="#columns-7" aria-label="Permalink to &quot;Columns&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Nullable</th><th>Unique</th><th>Children</th><th>Parent</th><th>Comment</th></tr></thead><tbody><tr><td>userId</td><td>Int</td><td></td><td>false</td><td>false</td><td></td><td><a href="#user">User</a></td><td></td></tr><tr><td>roleId</td><td>Int</td><td></td><td>false</td><td>false</td><td></td><td><a href="#role">Role</a></td><td></td></tr></tbody></table><h2 id="er-diagram-8" tabindex="-1">ER diagram <a class="header-anchor" href="#er-diagram-8" aria-label="Permalink to &quot;ER diagram&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@startuml UserRole</span></span>
<span class="line"><span>skinparam linetype ortho</span></span>
<span class="line"><span>entity &quot;User&quot; as User {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  * email : [UK] String</span></span>
<span class="line"><span>  name : String</span></span>
<span class="line"><span>  * createdAt : DateTime</span></span>
<span class="line"><span>  * updatedAt : DateTime</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>entity &quot;Role&quot; as Role {</span></span>
<span class="line"><span>+ id [PK] : Int </span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  * name : [UK] String</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>entity &quot;UserRole&quot; as UserRole {</span></span>
<span class="line"><span>--</span></span>
<span class="line"><span>  # userId : [FK] User</span></span>
<span class="line"><span>  # roleId : [FK] Role</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39; Relations</span></span>
<span class="line"><span>UserRole }o--|| User: userId</span></span>
<span class="line"><span>UserRole }o--|| Role: roleId</span></span>
<span class="line"><span>&#39; ManyToMany Relations</span></span>
<span class="line"><span>&#39; enum relations</span></span>
<span class="line"><span>@enduml</span></span></code></pre></div></details><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><h3 id="exportpertables" tabindex="-1">exportPerTables <a class="header-anchor" href="#exportpertables" aria-label="Permalink to &quot;exportPerTables&quot;">​</a></h3><p> 各テーブルが出力される。デフォルト値は<code>false</code>。</p><h3 id="showuniquekeylabel" tabindex="-1">showUniqueKeyLabel <a class="header-anchor" href="#showuniquekeylabel" aria-label="Permalink to &quot;showUniqueKeyLabel&quot;">​</a></h3><p> <code>ER</code>図上で一意のキーとしてもラベル付けされる<code>[UK]</code>。デフォルト値は<code>false</code>。</p><h3 id="linetype" tabindex="-1">lineType <a class="header-anchor" href="#linetype" aria-label="Permalink to &quot;lineType&quot;">​</a></h3><ul><li>ortho</li><li>polyline</li><li>unset</li></ul><p>デフォルト値は<code>ortho</code>。</p><h3 id="islefttorightdirection" tabindex="-1">isLeftToRightDirection <a class="header-anchor" href="#islefttorightdirection" aria-label="Permalink to &quot;isLeftToRightDirection&quot;">​</a></h3><p> <code>true</code>にすると、<code>PlantUML</code>が<code>left to right direction</code>指定される。</p><h3 id="linelength" tabindex="-1">lineLength <a class="header-anchor" href="#linelength" aria-label="Permalink to &quot;lineLength&quot;">​</a></h3><p> 線の長さを変更できる。デフォルト値は<code>--</code>。</p>`,24))])}const B=t(E,[["render",o]]);export{m as __pageData,B as default};
