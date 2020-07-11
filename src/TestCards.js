import {Card, CardGrid} from "@vkontakte/vkui";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import React from "react";
import bridge from "@vkontakte/vk-bridge";
import persik from "./img/persik.png";
import spotty from "./img/spotty.png";
import luna from "./img/luna.png";
import puppy from "./img/puppy.png";
import doctor from "./img/doctor.png";
import catFish from "./img/catFish.png";
import hardKot from "./img/hardKot.png";
import horse from "./img/horse.png";
import iLame from "./img/iLameRu.png";
import kurica from "./img/kurica.png";
import spider from "./img/spider.png";
import vanya from "./img/vanya.png";

// Массивы с картинками
let imageArr1 = [persik, spotty, luna, puppy, doctor, catFish, hardKot, horse, iLame, kurica, spider, vanya];
let imageArr2 = [persik, spotty]
let imageArr3 = [spotty, spotty]
let imageArr4 = [persik, persik]

const cards =[
    { id: 1, className: 'TestUNLOCKED', title: 'Самый лучший стример'},
    { id: 2, className: 'TestUNLOCKED', title: 'Лучший мем 2020 года'},
    { id: 3, className: 'TestUNLOCKED', title: 'Лучшая игра года'},
    { id: 4, className: 'TestUNLOCKED', title: 'Футболист года'},
    { id: 5, className: 'TestUNLOCKED', title: 'Лучший стикерпак ВК'},
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
