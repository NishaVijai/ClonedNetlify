import React, { Component } from 'react';
import netlifyIcon from './Images/netlify-icon.svg';
import downArrow from './Images/down-arrow.svg';
import notification from './Images/notification.svg';
import support from './Images/support.svg';
import userIcon from './Images/user-icon.svg';

export default class Header extends Component {
	render() {
		return (
			<header className="bg-gray-900 px-10 py-5 text-gray-600">
				<div className="border-b-2 border-gray-800 border-opacity-75 flex justify-between">
					<div className="flex items-center m-4">
                        <button>
                        <img src={netlifyIcon} alt="Netlify Icon" height="40px" width="40px" />
                        </button>
					

						<button className="flex items-center hover:bg-black focus:bg-black ml-2 pl-2 text-white text-2xl">User's GitHub's team<img src={downArrow} alt="Down Arrow Icon" height="22px" width="22px" /></button>

						
					</div>

					<div className="flex">
                        <button className="focus:bg-gray-800 hover:bg-gray-800 m-2 p-2 rounded-lg">
                        <img src={notification} alt="Notification Icon" height="30px" width="30px" />
                        </button>
						<button className="focus:bg-gray-800 hover:bg-gray-800 m-2 p-2 rounded-lg">
                        <img src={support} alt="Support Icon" height="30px" width="30px" />
                        </button>
						<button className="focus:bg-gray-800 hover:bg-gray-800 m-2 p-2 rounded-lg">
                        <img src={userIcon} alt="User Icon" height="30px" width="30px" />
                        </button>
						
					</div>
				</div>

				<nav>
					<ul className="capitalize flex m-2">
						<li className="cursor-pointer focus:bg-gray-800 hover:bg-gray-800 hover:text-white p-2 rounded-lg text-white">sites</li>
						<li className="cursor-pointer focus:bg-gray-800 hover:bg-gray-800 hover:text-white p-2 rounded-lg">builds</li>
						<li className="cursor-pointer focus:bg-gray-800 hover:bg-gray-800 hover:text-white p-2 rounded-lg">plugins</li>
						<li className="cursor-pointer focus:bg-gray-800 hover:bg-gray-800 hover:text-white p-2 rounded-lg">domains</li>
						<li className="cursor-pointer focus:bg-gray-800 hover:bg-gray-800 hover:text-white p-2 rounded-lg">members</li>
						<li className="cursor-pointer focus:bg-gray-800 hover:bg-gray-800 hover:text-white p-2 rounded-lg">audit log</li>
						<li className="cursor-pointer focus:bg-gray-800 hover:bg-gray-800 hover:text-white p-2 rounded-lg">billing</li>
						<li className="cursor-pointer focus:bg-gray-800 hover:bg-gray-800 hover:text-white p-2 rounded-lg">team settings</li>
					</ul>
				</nav>
			</header>
		);
	}
}
