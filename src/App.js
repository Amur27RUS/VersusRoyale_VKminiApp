import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import TestPanel from './panels/TestPanel';

//npm start - запуск на локалке
//npm run deploy - запуск на хостинг

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(null);

	const cards =[
		{ id: 1, className: 'TestUNLOCKED', title: 'Лучший пубгер'},
		{ id: 2, className: 'TestUNLOCKED', title: 'Игра века'},
		{ id: 3, className: 'TestUNLOCKED', title: 'Лучший стример'},
		{ id: 4, className: 'TestUNLOCKED', title: 'Фильм всех времен'},
	]

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel} popout={popout}>
			<Home id='home' fetchedUser={fetchedUser} go={go} cardsInfo={cards}/>
			<TestPanel id='TestPanel' go={go} />
		</View>
	);
}

export default App;

