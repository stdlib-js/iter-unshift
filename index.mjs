// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0

/// <reference types="./index.d.ts" />
import require$$0 from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs';
import require$$1 from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs';
import require$$2 from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs';
import require$$3 from 'https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs';
import require$$4 from 'https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs';

/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// MODULES //

var setReadOnly = require$$0;
var isFunction = require$$1;
var isIteratorLike = require$$2;
var iteratorSymbol = require$$3;
var format = require$$4;


// MAIN //

/**
* Returns an iterator which prepends values to the beginning of a provided iterator.
*
* @param {Iterator} iterator - input iterator
* @param {*} items - values to prepend
* @throws {TypeError} first argument must be an iterator protocol-compliant object
* @returns {Iterator} iterator
*
* @example
* var array2iterator = require( '@stdlib/array-to-iterator' );
*
* var iter = iterUnshift( array2iterator( [ 1, 2 ] ), 3, 4 );
*
* var v = iter.next().value;
* // returns 3
*
* v = iter.next().value;
* // returns 4
*
* v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 2
*
* var bool = iter.next().done;
* // returns true
*/
function iterUnshift$1( iterator ) {
	var items;
	var iter;
	var FLG;
	var i;
	if ( !isIteratorLike( iterator ) ) {
		throw new TypeError( format( '0D14J', iterator ) );
	}
	items = [];
	for ( i = 1; i < arguments.length; i++ ) {
		items.push( arguments[ i ] );
	}
	FLG = 0;
	i = -1;

	// Create an iterator protocol-compliant object:
	iter = {};
	setReadOnly( iter, 'next', next );
	setReadOnly( iter, 'return', end );

	// If an environment supports `Symbol.iterator`, make the iterator iterable:
	if ( iteratorSymbol && isFunction( iterator[ iteratorSymbol ] ) ) {
		setReadOnly( iter, iteratorSymbol, factory );
	}
	return iter;

	/**
	* Returns an iterator protocol-compliant object containing the next iterated value.
	*
	* @private
	* @returns {Object} iterator protocol-compliant object
	*/
	function next() {
		var v;
		if ( FLG === 2 ) {
			return {
				'done': true
			};
		}
		if ( FLG === 1 ) {
			v = iterator.next();
			if ( v.done ) {
				FLG = 2;
			}
			return v;
		}
		i += 1;
		if ( i >= items.length ) {
			FLG = 1;
			return next();
		}
		return {
			'value': items[ i ],
			'done': false
		};
	}

	/**
	* Finishes an iterator.
	*
	* @private
	* @param {*} [value] - value to return
	* @returns {Object} iterator protocol-compliant object
	*/
	function end( value ) {
		FLG = 2;
		if ( arguments.length ) {
			return {
				'value': value,
				'done': true
			};
		}
		return {
			'done': true
		};
	}

	/**
	* Returns a new iterator.
	*
	* @private
	* @returns {Iterator} iterator
	*/
	function factory() {
		var args;
		var i;

		args = [ iterator[ iteratorSymbol ]() ];
		for ( i = 0; i < items.length; i++ ) {
			args.push( items[ i ] );
		}
		return iterUnshift$1.apply( null, args );
	}
}


// EXPORTS //

var main = iterUnshift$1;

/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
* Create an iterator which prepends values to the beginning of a provided iterator.
*
* @module @stdlib/iter-unshift
*
* @example
* var array2iterator = require( '@stdlib/array-to-iterator' );
* var iterUnshift = require( '@stdlib/iter-unshift' );
*
* var iter = iterUnshift( array2iterator( [ 1, 2 ] ), 3, 4 );
*
* var v = iter.next().value;
* // returns 3
*
* v = iter.next().value;
* // returns 4
*
* v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 2
*
* var bool = iter.next().done;
* // returns true
*/

// MODULES //

var iterUnshift = main;


// EXPORTS //

var lib = iterUnshift;

export { lib as default };
//# sourceMappingURL=index.mjs.map
