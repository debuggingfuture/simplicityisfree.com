/* eslint-disable */
!(function () {
  const analytics = window.analytics = window.analytics || []; if (!analytics.initialize) {
    if (analytics.invoked)window.console && console.error && console.error('Segment snippet included twice.'); else {
      analytics.invoked = !0; analytics.methods = ['trackSubmit', 'trackClick', 'trackLink', 'trackForm', 'pageview', 'identify', 'reset', 'group', 'track', 'ready', 'alias', 'debug', 'page', 'once', 'off', 'on']; analytics.factory = function (t) { return function () { const e = Array.prototype.slice.call(arguments); e.unshift(t); analytics.push(e); return analytics; }; }; for (let t = 0; t < analytics.methods.length; t++) { const e = analytics.methods[t]; analytics[e] = analytics.factory(e); }analytics.load = function (t) { const e = document.createElement('script'); e.type = 'text/javascript'; e.async = !0; e.src = `${document.location.protocol === 'https:' ? 'https://' : 'http://'}cdn.segment.com/analytics.js/v1/${t}/analytics.min.js`; const n = document.getElementsByTagName('script')[0]; n.parentNode.insertBefore(e, n); }; analytics.SNIPPET_VERSION = '4.0.0';
      analytics.load('CjEE9KIsNo8tDZPatz7l6qIrb03HPwgl');
      analytics.page();
    }
  }
}());
