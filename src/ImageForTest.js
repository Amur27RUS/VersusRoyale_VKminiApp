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
import {escapeLeadingUnderscores} from "typescript";
let persikIMG = new TestImage(persik, 'Персик');
let spottyIMG = new TestImage(spotty, 'Спотти');
let lunaIMG = new TestImage(luna, 'Луна');
let puppyIMG = new TestImage(puppy, 'Паппи');
let doctorIMG = new TestImage(doctor, 'Доктор')
let catFishIMG = new TestImage(catFish, 'КотоРыба');
let hardKotIMG = new TestImage(hardKot, 'ХардКот');
let horseIMG = new TestImage(horse, 'Конь');
let iLameIMG = new TestImage(iLame, 'Ламыч');
let kuricaIMG = new TestImage(kurica, 'Курица');
let spiderIMG = new TestImage(spider, 'Паук');
let vanyaIMG = new TestImage(vanya, 'Ваня');





// Массивы с картинками (Число картинок должно быть равно степени двойки)
let imageArr1 = [persikIMG, spottyIMG, lunaIMG, puppyIMG, doctorIMG, catFishIMG, hardKotIMG, horseIMG];
let imageArr2 = [persikIMG, spottyIMG]
let imageArr3 = [spottyIMG, spottyIMG]
let imageArr4 = [persikIMG, persikIMG]

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
        image1: imageArr[num1].image,
        image2: imageArr[num2].image,
        css1: 'TestImage',
        css2: 'TestImage',
        text: null,
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
            console.log('NUMS для следующего:');
            console.log(num1 + ' ' + num2);

            this.setState({
                image1: imageArr[num1].image,
                image2: imageArr[num2].image,
            });

        }else{
            this.setState({
                image1: imageArr[num1].image,
                css2:  'looser',
                css1: 'winner',
                text: 'Победитель!'
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
            });

        }else{
            this.setState({
                image1: imageArr[num2].image,
                css2:  'looser',
                css1: 'winner',
                text: 'Победитель!'
            });
            counter = 1;
            images = [imageArr1.slice(), imageArr2.slice(), imageArr3.slice(), imageArr4.slice()];
        }
    }

    render() {
        return(
            <div>
                <div className={"sign"}>
                    <span className="sign__word">{this.state.text}</span>
                </div>
                <div>
            <img id={'image1'} className={this.state.css1} src={this.state.image1} alt="Loading error" onClick={this.changeImg1Remastered}/>
                </div>
                <br/>
                <div>
            <img id={'image2'} className={this.state.css2} src={this.state.image2} alt="Loading error" onClick={this.changeImg2Remastered}/>
                </div>
            </div>
        )
    }
}
export default ImageForTest;