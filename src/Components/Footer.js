import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<Footer className="bg-gray-900 capitalize px-10 py-5 text-gray-600">
				<nav>
					<ul>
						<li>docs</li>
						<li>pricing</li>
						<li>support</li>
						<li>news</li>
						<li>terms</li>
					</ul>
				</nav>
				<p>2020 netlify</p>
			</Footer>
		);
	}
}
