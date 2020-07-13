import React from 'react';
import persik from './img/persik.png';
import spotty from './img/spotty.png';
import luna from './img/luna.png';
import puppy from './img/puppy.png';
import doctor from './img/doctor.png';
import catFish from './img/catFish.png';
import hardKot from './img/hardKot.png';
import horse from './img/horse.png';
import iLame from './img/iLameRu.png';
import kurica from './img/kurica.png';
import spider from './img/spider.png';
import vanya from './img/vanya.png';
// import vsIcon from './img/VSicon.png';
import bratishkin from './img/BratishkinOff.png';
import cheatBanned from './img/CheatBanned.png';
import evelone from './img/Evelone.png';
import gnumme from './img/Gnumme.png';
import iLameRU from './img/iLameRu копия.png';
import itpedia from './img/ITPEDIA.png';
import jesusavgn from './img/JesusAVGN.png';
import karmikKoala from './img/KarmikKoala.png';
import kuplinovPlay from './img/kuplinovPLAY.png';
import maddyson from './img/Maddyson.png';
import navalny from './img/Navalny.png';
import olsior from './img/Olsior.png';
import papich from './img/papich.png';
import paver from './img/Russia Paver.png';
import snailkick from './img/SnailKick.png';
import vjLink from './img/VJLINK.png';
import Group from "@vkontakte/vkui/dist/components/Group/Group";

let persikIMG = new TestImage(persik, 'Персик');
let spottyIMG = new TestImage(spotty, 'Спотти');
let lunaIMG = new TestImage(luna, 'Луна');
let puppyIMG = new TestImage(puppy, 'Паппи');
let doctorIMG = new TestImage(doctor, 'Доктор');
let catFishIMG = new TestImage(catFish, 'КотоРыба');
let hardKotIMG = new TestImage(hardKot, 'ХардКот');
let horseIMG = new TestImage(horse, 'Конь');
let iLameIMG = new TestImage(iLame, 'Ламыч');
let kuricaIMG = new TestImage(kurica, 'Курица');
let spiderIMG = new TestImage(spider, 'Паук');
let vanyaIMG = new TestImage(vanya, 'Ваня');

let Bratishkin = new TestImage(bratishkin, 'BratishkinOff');
let CheatBanned = new TestImage(cheatBanned, 'CheatBanned');
let Evelone = new TestImage(evelone, 'Evelone');
let Gnumme = new TestImage(gnumme, 'Gnumme');
let ILameRU = new TestImage(iLameRU, 'iLameRU');
let Itpedia = new TestImage(itpedia, 'Itpedia');
let JesusAVGN = new TestImage(jesusavgn, 'JesusAVGN');
let Karmik = new TestImage(karmikKoala, 'Karmik Koala');
let Kuplinov = new TestImage(kuplinovPlay, 'Kuplinov');
let Maddyson = new TestImage(maddyson, 'Maddyson');
let Navalny = new TestImage(navalny, 'Навальный');
let Olsior = new TestImage(olsior, 'Olsior');
let Papich = new TestImage(papich, 'Папич');
let Paver = new TestImage(paver, 'Russia Paver');
let Snailkick = new TestImage(snailkick, 'SnailKick');
let VjLink = new TestImage(vjLink, 'VJLink');



// Массивы с картинками (Число картинок должно быть равно степени двойки)
let imageArr1 = [Bratishkin, CheatBanned, Evelone, Gnumme, ILameRU, Itpedia, JesusAVGN, Karmik, Kuplinov,
    Maddyson, Navalny, Olsior, Papich, Paver, Snailkick, VjLink];
let imageArr2 = [persikIMG, spottyIMG, lunaIMG, puppyIMG, doctorIMG, catFishIMG, hardKotIMG, horseIMG];
let imageArr3 = [spottyIMG, spiderIMG, iLameIMG, vanyaIMG];
let imageArr4 = [persikIMG, persikIMG];

//Массив со всеми массивами с картинками.
let images = [imageArr1.slice(), imageArr2.slice(), imageArr3.slice(), imageArr4.slice()];

//Рабочий массив
let imageArr = [persikIMG, persikIMG];

//Счётчик кол-ва итераций
let counter = 1;
//Кол-во удалённых элементов
let undefinedElements;
//мин кол-во использований
let minUsage = 0;

// рандомные номера картинок из массива
let num1 = getRandomInt(0, imageArr.length-1);
let num2 = getRandomInt(0, imageArr.length-1);

// Нужно, чтобы картинки были разными
while(num1 === num2){
    num2 = getRandomInt(0, imageArr.length-1);
}

//Функция для получения рандомного числа от 0 до max
function getRandomInt(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

console.log('UPPER CLASS STARTED');

//Класс для изображений
function TestImage(image, text){
        this.image = image; //Картинка
        this.text = text; //Подпись к картинке
        this.useNum = 0; //Сколько раз использовали
}

class ImageForTest extends React.Component {

    constructor(props) {
        images = [imageArr1.slice(), imageArr2.slice(), imageArr3.slice(), imageArr4.slice()];
        imageArr = images[global.tests.currentTest - 1];
        for(let i = 0; i < imageArr.length; i++){
            imageArr[i].useNum = 0;
        }
        undefinedElements = 0;
        num1 = getRandomInt(0, imageArr.length-1);
        num2 = getRandomInt(0, imageArr.length-1);
        while(num1 === num2){
            num2 = getRandomInt(0, imageArr.length-1);
        }
        super(props);
        console.log('CONSTRUCTOR STARTED');
        console.log(imageArr);
    }

    state = {
        image1: imageArr[num1].image, //верхняя картинка
        image2: imageArr[num2].image, //нижняя картинка
        text1: imageArr[num1].text, //название верхней картинки
        text2: imageArr[num2].text, //название нижней картинки
        css1: 'TestImage', //класс верхней картинки
        css2: 'TestImage', //Класс нижней картинки
        textCss1: 'textForImage1',
        textCss2: 'textForImage2',//класс названия картинок
        text: null, //Текст победителя
        vsIconCSS: 'VSicon', //CSS картинки VS
    }

    changeImg1Remastered = () => {
        undefinedElements = 0;
        delete imageArr[num2];
        //Находим кол-во удалённых элементов
        for(let i = 0; i < imageArr.length; i++){
            if(imageArr[i] === undefined){
                undefinedElements++;
            }
        }

        if(undefinedElements < imageArr.length-1){
            counter++;
            imageArr[num1].useNum++;
            imageArr.sort();
            console.log(imageArr);
            minUsage = 100;
            //Находим минимальное кол-во использований
            for(let i = 0; i < imageArr.length-counter; i++){
                if(imageArr[i].useNum < minUsage){
                    minUsage = imageArr[i].useNum;
                }
            }
            console.log('MinUSAGE = ' + minUsage);

            num1 = getRandomInt(0, imageArr.length-counter);
            while(imageArr[num1].useNum !== minUsage){
                num1 = getRandomInt(0, imageArr.length-counter);
            }
            num2 = getRandomInt(0, imageArr.length-counter);
            while((imageArr[num2].useNum !== minUsage) || (num1 === num2)){
                num2 = getRandomInt(0, imageArr.length-counter);
            }

            this.setState({
                image1: imageArr[num1].image,
                image2: imageArr[num2].image,
                text1: imageArr[num1].text,
                text2: imageArr[num2].text,
            });

        }else{
            global.tests.winner1 = imageArr[num1].image;
            this.setState({
                image1: imageArr[num1].image,
                css2:  'looser',
                css1: 'winner',
                text: 'Победитель!',
                textCss1: 'looser',
                textCss2: 'looser',
                vsIconCSS: 'looser',
            });
            counter = 1;
            images = [imageArr1.slice(), imageArr2.slice(), imageArr3.slice(), imageArr4.slice()];
        }
    }

    changeImg2Remastered = () => {

        undefinedElements = 0;
        delete imageArr[num1];
        //Находим кол-во удалённых элементов
        for(let i = 0; i < imageArr.length; i++){
            if(imageArr[i] === undefined){
                undefinedElements++;
            }
        }

        if(undefinedElements < imageArr.length-1){
            counter++;
            imageArr[num2].useNum++;
            imageArr.sort();
            console.log(imageArr);
            minUsage = 100;
            //Находим минимальное кол-во использований
            for(let i = 0; i < imageArr.length-counter; i++){
                if(imageArr[i].useNum < minUsage){
                    minUsage = imageArr[i].useNum;
                }
            }
            console.log('MinUSAGE = ' + minUsage);

            num1 = getRandomInt(0, imageArr.length-counter);
            while(imageArr[num1].useNum !== minUsage){
                num1 = getRandomInt(0, imageArr.length-counter);
            }

            num2 = getRandomInt(0, imageArr.length-counter);
            while((imageArr[num2].useNum !== minUsage) || (num1 === num2)){
                num2 = getRandomInt(0, imageArr.length-counter);
            }
            console.log('NUMS для следующего:');
            console.log(num1 + ' ' + num2);

            this.setState({
                image1: imageArr[num1].image,
                image2: imageArr[num2].image,
                text1: imageArr[num1].text,
                text2: imageArr[num2].text,
            });

        }else{
            global.tests.winner1 = imageArr[num2].image;
            this.setState({
                image1: imageArr[num2].image,
                css2:  'looser',
                css1: 'winner',
                text: 'Победитель!',
                textCss1: 'looser',
                textCss2: 'looser',
                vsIconCSS: 'looser',
            });
            counter = 1;
            images = [imageArr1.slice(), imageArr2.slice(), imageArr3.slice(), imageArr4.slice()];
        }
    }

    render() {
        return(
            <Group title="test">
            <div className={'picDIV'}>
                <div className={"sign"}>
                    <span className='sign__word'>{this.state.text}</span>
                </div>

            <img id={'image1'} className={this.state.css1} src={this.state.image1} alt="Loading error" onClick={this.changeImg1Remastered}/>
                    <p className={this.state.textCss1}>{this.state.text1}</p>
                    {/*<img className={this.state.vsIconCSS} alt="loading error" src={vsIcon} />*/}
                    <p className={this.state.textCss2}>{this.state.text2}</p>
            <img id={'image2'} className={this.state.css2} src={this.state.image2} alt="Loading error" onClick={this.changeImg2Remastered}/>

            </div>
            </Group>
        )
    }
}
export default ImageForTest;