import m from 'mithril';

import Component from 'Component';


export default class extends Component {

	constructor(){
		super();
		this.param1 = "o(^-^o)";
		this.init();
	}


	view(){

		return (
			<section class="container">
				<h1>Index page</h1>
				{ this.param1 }

				<button class="btn btn-link" onclick={ (sender)=>{ m.route.set("/hello"); return false } }>goto Hello page.</button>
			</section>
		);
	}

}

