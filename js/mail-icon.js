document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="mailto:"]').forEach(function (a) {
    const li = a.closest('li') || a.parentElement;
    if (li) {
      li.querySelectorAll('i,.icon,.iconfont').forEach(function (el) {
        el.style.display = 'none';
      });
    }
    if (!a.querySelector('.__mail_svg')) {
      const span = document.createElement('span');
      span.className = '__mail_svg';
      span.style.display = 'inline-block';
      span.style.width = '1em';
      span.style.height = '1em';
      span.style.marginRight = '.35em';
      span.style.verticalAlign = '-0.15em';
      span.style.color = 'currentColor';
      span.innerHTML =
        "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' style='width:100%;height:100%;display:block'>" +
        "<path d='M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75zm2.28-.75 7.22 5.4 7.47-5.4H4.53zm15.72 2.22-7.92 5.73a.75.75 0 0 1-.9 0L3.5 8.22v9.03c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75V8.22z'/>" +
        "</svg>";
      a.prepend(span);
    }
  });
});