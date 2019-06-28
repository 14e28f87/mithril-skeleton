import m from 'mithril';

import Component from 'Component';


export default class extends Component {

	constructor(){
		super();
		this.param1 = "o(-_-.)";
		this.init();
	}


	view(){

		return (
			<section class="container">
				<h1>Hello page</h1>
				{ this.param1 }
			</section>
		);
	}

}

