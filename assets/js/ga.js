window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
setTimeout(() => {
  gtag('js', new Date());
  gtag('config', '{{ . }}');
}, 2500)