/*
去除漫小肆韓漫污秽广告 
https://www.mxs11.cc
https://www.92hm.top


[rewrite_local]
^https:\/\/www\.(mxs11\.cc|92hm\.top)\/(chapter|book)\/\d+ url script-response-body https://raw.githubusercontent.com/Jagerx/QuantumultFOX/refs/heads/main/HM_AntiADs.js

[mitm]
hostname = www.mxs11.cc, www.92hm.top
*/
let body = $response.body;

/* ===== 执行验证日志 ===== */
console.log('[mxshm.js] script-response-body executed:', $request && $request.url);

/* 详情页（substr(22) + Function(b)） */
body = body.replace(
  /<script>!function\(\)\{[\s\S]*?substr\(22\)\);new Function\(b\)\(\)\}\(\);<\/script>\s*(?:<!--HTML固定位置 结束-->\s*)?<br>/g,
  ''
);

/* 章节页（randoms.init() + document.write） */
body = body.replace(
  /<!--广告代码-->\s*<script>[\s\S]*?randoms\.init\(\);\s*<\/script>\s*<!--广告代码 -->/g,
  ''
);

$done({ body });
