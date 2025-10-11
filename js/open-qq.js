document.addEventListener('DOMContentLoaded', function () {
  // 找到 QQ 那一项（href 里含你的 QQ 号即可）
  const qq = document.querySelector('a[href*="uin=411381355"]');
  if (!qq) return;

  qq.addEventListener('click', function (e) {
    // 优先尝试打开本机 QQ 客户端
    const uin = '411381355';
    const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const schemeDesktop = 'tencent://message/?Menu=yes&uin=' + uin;  // Windows QQ
    const schemeMobile  = 'mqqwpa://im/chat?chat_type=wpa&uin=' + uin + '&version=1&src_type=web'; // 手机 QQ
    const fallback      = qq.href; // 兜底：保留你 YAML 里设的 wpa.qq.com

    // 某些浏览器禁止阻止默认行为，这里只做“尝试 + 超时兜底”
    e.preventDefault();
    const scheme = mobile ? schemeMobile : schemeDesktop;

    let jumped = false;
    const t = setTimeout(function(){ if (!jumped) location.href = fallback; }, 800);
    // 直接导航到自定义协议；若系统未安装 QQ，会无反应，800ms 后回退到网页版
    location.href = scheme;
    // 如果成功，页面会切走；如果失败，超时后会去 fallback
    setTimeout(function(){ jumped = true; clearTimeout(t); }, 50);
  }, false);
});