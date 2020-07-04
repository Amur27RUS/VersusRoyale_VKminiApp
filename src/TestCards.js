import {Card, CardGrid} from "@vkontakte/vkui";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import React from "react";
import Home from "./panels/Home";


const cards =[
    { id: 1, className: 'TestUNLOCKED', title: 'Лучший пубгер'},
    { id: 2, className: 'TestUNLOCKED', title: 'Игра века'},
    { id: 3, className: 'TestUNLOCKED', title: 'Лучший стример'},
    { id: 4, className: 'TestUNLOCKED', title: 'Фильм всех времен'},
    { id: 5, className: 'TestUNLOCKED', title: 'Фигня'},
]

export default function TestCards({go}) {
    function test1() {
        global.tests.currentTest = 'test1';
    }
    return(
        <Group title="Navigation" className={"cardGrid"}>
            <CardGrid>
                {cards.map(info =>{
                    return <Card className={"cards"} size="l" mode="shadow" onClick={ (e) => {
                        go(e);
                        global.tests.currentTest = info.id;
                    }} data-to="TestPanel">
                        <div style={{ height: 15 }} />
                        <p className={"titleCards"}>{info.title}</p>
                    </Card>
                })}
            </CardGrid>
        </Group>
    );
}
