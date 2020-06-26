import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import persik from '../img/persik.png';
import spotty from '../img/spotty.png';
import './main.css';

const osName = platform();
let image = persik;

function handleClick(e) {
    e.preventDefault();
    if(image === persik) {
        console.log('Вы нажали на Персика!');
        image = spotty;
    }else{
        console.log('Вы нажали на Спотти!');
        image = persik;
    }
}

const TestPanel = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<PanelHeaderButton onClick={props.go} data-to="home">
                {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </PanelHeaderButton>}
        >
            Тест
        </PanelHeader>
        <img id={'Cat'} className="Persik" src={image} alt="Persik The Cat" onClick={handleClick}/>
        <img className="Persik" src={image} alt="Spotty The Dog"/>

    </Panel>
);

TestPanel.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default TestPanel;
