import m from 'mithril';
import stream from 'mithril/stream';

export default class Component {

	init(){

		console.log("init()");

		/**
		 * クラス内に存在するプロパティをすべて探索し、
		 * もし Mithril Stream でなければ  Mithril Stream に書き換えます。
		 * 
		 *	
		 *	内部で "_$" から始まる変数は予約語として使用しています。
		 *	ですので、これら変数を宣言することも、直接アクセスすることもは控えてください。
		 *
		 */

		const prefix = "_$";

		// this オブジェクトの変数を探索します
		for(let key of Object.keys(this) ) {;

			// 変数名 '_$' から始まるものは除外
			if( key.substring(0, prefix.length) == prefix ){
				console.log(`  - ${key} : skip "${prefix}" reserved`);
				continue;
			}

			// 変数が object は除外 (JavaScript の オブジェクトは参照渡しなので、大丈夫? ちょっと不安)
			if( typeof(this[key]) == 'object' ){
				console.log(`  - ${key} : skip object`);
				continue;
			}

			// 変数が function は除外
			if( typeof(this[key]) == 'function' ){
				console.log(`  - ${key} : skip function`);
				continue;
			}
		//	// 変数が stream であれば除外 
		//	if( typeof(this[key]) == 'function' && this[key].name == 'stream' ){
		//		continue;
		//	}

			console.log(`  - ${key} -> ${prefix + key}`);

			// 変数を stream へ変換して待避させる
			this[ prefix + key ] = stream(this[key]);

			// 変数に対して getter/setter を上書き設定する
			Object.defineProperty(this, key, {
				get: ()=>{
					return this[prefix + key]();
				},
				set: (value)=>{
					this[prefix + key]( value );
				}
			});


		}


	}

}

