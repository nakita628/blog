import{_ as s,c as i,o as e,a5 as t}from"./chunks/framework.TIL9AXbx.js";const k=JSON.parse('{"title":"MongoDB","description":"MongoDB Docker Start","frontmatter":{"date":"2024-11-28T00:00:00.000Z","title":"MongoDB","description":"MongoDB Docker Start","tags":["MongoDB","Docker"],"prev":{"text":"CORS","link":"./59"},"next":{"text":"Next.js Start","link":"./61"}},"headers":[],"relativePath":"posts/2024/60.md","filePath":"posts/2024/60.md"}'),n={name:"posts/2024/60.md"};function l(p,a,h,o,d,r){return e(),i("div",null,a[0]||(a[0]=[t(`<h1 id="mongodb" tabindex="-1">MongoDB <a class="header-anchor" href="#mongodb" aria-label="Permalink to &quot;MongoDB&quot;">​</a></h1><ul><li><a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">MongoDB</a></li></ul><h2 id="directory-structure" tabindex="-1">Directory Structure <a class="header-anchor" href="#directory-structure" aria-label="Permalink to &quot;Directory Structure&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├── mongo-db</span></span>
<span class="line"><span>│   └── Dockerfile</span></span></code></pre></div><h2 id="dockerfile" tabindex="-1">Dockerfile <a class="header-anchor" href="#dockerfile" aria-label="Permalink to &quot;Dockerfile&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-yrON1" id="tab-lvHjSDn" checked><label data-title="mongo-db/Dockerfile" for="tab-lvHjSDn">mongo-db/Dockerfile</label></div><div class="blocks"><div class="language-Dockerfile vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">Dockerfile</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mongo:latest</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ENV</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MONGO_INITDB_ROOT_USERNAME=root</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ENV</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MONGO_INITDB_ROOT_PASSWORD=pass</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">EXPOSE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 27017</span></span></code></pre></div></div></div><h2 id="build" tabindex="-1">Build <a class="header-anchor" href="#build" aria-label="Permalink to &quot;Build&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-rb7pY" id="tab-VdgoC6c" checked><label data-title="sh" for="tab-VdgoC6c">sh</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mongo-db/Dockerfile</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mongo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span></code></pre></div></div></div><h2 id="run" tabindex="-1">Run <a class="header-anchor" href="#run" aria-label="Permalink to &quot;Run&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-HtA1N" id="tab-25-4bKc" checked><label data-title="sh" for="tab-25-4bKc">sh</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -itd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 27017:27017</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mongo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mongo</span></span></code></pre></div></div></div><h2 id="enter-the-container" tabindex="-1">Enter the container <a class="header-anchor" href="#enter-the-container" aria-label="Permalink to &quot;Enter the container&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-vRa6S" id="tab-o3RakM1" checked><label data-title="sh" for="tab-o3RakM1">sh</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> exec</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mongo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bash</span></span></code></pre></div></div></div><h2 id="connection" tabindex="-1">Connection <a class="header-anchor" href="#connection" aria-label="Permalink to &quot;Connection&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-VLpBB" id="tab-MZmS_yP" checked><label data-title="sh" for="tab-MZmS_yP">sh</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">root@************:/#</span></span></code></pre></div></div></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Pd1kG" id="tab-pkj-yBh" checked><label data-title="sh" for="tab-pkj-yBh">sh</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mongosh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pass</span></span></code></pre></div></div></div>`,15)]))}const g=s(n,[["render",l]]);export{k as __pageData,g as default};
