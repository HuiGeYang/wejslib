//test git
(function(){
	var we = {};
	we.version  = '1.0';
	we.hostname = "http://"+window.location.host;
	we.basepath = we.hostname+"/js/wejs/";
	//加载sea.js
	(function(m, o, d, u, l, a, r) {
		if(m[d]){return;}
		function f(n, t) {//闭包
			return function() {
				r.push(n, arguments);
				return t;
			};
		}
		m[d] = a = { args: (r = []), config: f(0, a), use: f(1, a) };
		m.define = f(2);
		u = o.createElement('script');
		u.id = d + 'node';
		u.src = we.basepath+'sea.js';
		l = o.getElementsByTagName('head')[0];
		a = o.getElementsByTagName('base')[0];
		a ? l.insertBefore(u, a) : l.appendChild(u);
	})(window, document, 'seajs');

})();