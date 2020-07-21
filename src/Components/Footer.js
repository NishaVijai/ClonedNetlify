import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<div className="bg-gray-900 capitalize px-12 py-5 text-gray-600">
				<nav>
					<ul className="flex">
						<li className="cursor-pointer focus:bg-gray-800 font-bold hover:bg-gray-800 hover:text-white p-2 rounded-lg">docs</li>
						<li className="cursor-pointer focus:bg-gray-800 font-bold hover:bg-gray-800 hover:text-white p-2 rounded-lg">pricing</li>
						<li className="cursor-pointer focus:bg-gray-800 font-bold hover:bg-gray-800 hover:text-white p-2 rounded-lg">support</li>
						<li className="cursor-pointer focus:bg-gray-800 font-bold hover:bg-gray-800 hover:text-white p-2 rounded-lg">news</li>
						<li className="cursor-pointer focus:bg-gray-800 font-bold hover:bg-gray-800 hover:text-white p-2 rounded-lg">terms</li>
					</ul>
				</nav>
				<p className="my-2 p-2">&copy; 2020 netlify</p>
			</div>
		);
	}
}
