import {Card, CardGrid} from "@vkontakte/vkui";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import React from "react";

const cards =[
    { id: 1, className: 'TestUNLOCKED', title: 'Лучший стример мужчина'},
    { id: 2, className: 'TestUNLOCKED', title: 'Лучший стикерпак ВК'},
    { id: 3, className: 'TestUNLOCKED', title: 'Лучшая игра года'},
    { id: 4, className: 'TestUNLOCKED', title: 'Футболист года'},
    { id: 5, className: 'TestUNLOCKED', title: 'Лучший мем 2020 года'},
]

export default function TestCards({go}) {
    return(
        <Group title="Navigation" className={"cardGrid"}>
            <CardGrid>
                {cards.map(info =>{
                    return <div className={'CARD'}><Card className={"cards"} size="l" mode="shadow" onClick={ (e) => {
                        go(e);
                        global.tests.currentTest = info.id;
                        global.tests.currentTestName = info.title;
                    }} data-to="TestPanel">
                        <div className={'divYourVote'}>
                        <p className={"titleCards"}>{info.title}</p>

                        <p className={"yourVote"}>
                            {"Ваш выбор:"}
                            <br/>
                        <img src={global.tests.winner1} className={'imgOnCard'} width="60" height="60"/>
                        </p>
                        </div>
                    </Card>
                    </div>
                })}
            </CardGrid>
        </Group>
    );
}
