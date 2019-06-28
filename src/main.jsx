import m from 'mithril';

import Index from 'App/Index';
import Hello from 'App/Hello';

//m.route.prefix('');

m.route(document.body, '/', {
	'/': new Index(),
	'/hello': new Hello(),
});


