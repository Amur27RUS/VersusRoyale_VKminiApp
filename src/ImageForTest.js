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


//Массив с картинками
let imageArr = [persik, spotty, luna, puppy, doctor, catFish, hardKot, horse, iLame, kurica, spider, vanya];
let usageArr = [imageArr.length];
for(let i = 0; i < imageArr.length; i++){
    usageArr[i] = 0;
}

let counter = 1;
let undefinedElements;

//рандомные номера картинок из массива
let num1 = getRandomInt(0, imageArr.length-1);
let num2 = getRandomInt(0, imageArr.length-1);

//Нужно, чтобы картинки были разными
while(num1 === num2){
    num2 = getRandomInt(0, imageArr.length-1);
}

//Функция для получения рандомного числа от 0 до max
function getRandomInt(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

class ImageForTest extends React.Component {

    state = {
        image1: imageArr[num1],
        image2: imageArr[num2],
        css1: 'TestImage',
        css2: 'TestImage',
        text: null,
    }

    changeImg1 = () => {
        undefinedElements = 0;

        if (undefinedElements < imageArr.length-1) {
            delete imageArr[num2];
        }

        for(let i = 0; i<imageArr.length; i++){
            if(imageArr[i] === undefined){
                undefinedElements++;
            }
        }

        imageArr.sort();
        counter++;
        if(undefinedElements < imageArr.length-1){
            num1 = getRandomInt(0, imageArr.length-counter);
            num2 = getRandomInt(0, imageArr.length-counter);
            while (num1 === num2){
                num2 = getRandomInt(0, imageArr.length-counter);
            }
            this.setState({
                image1: imageArr[num1],
                image2: imageArr[num2],
            })
        }else{
            this.setState({
                image1: imageArr[0],
                css2:  'looser',
                css1: 'winner',
                text: 'Победитель!'
            })
            document.getElementById('image2').onclick = null;
            document.getElementById('image1').onclick = null;
        }
    }

    changeImg2 = () => {
        undefinedElements = 0;

        if (undefinedElements < imageArr.length-1) {
            delete imageArr[num1];
        }

        for(let i = 0; i<imageArr.length; i++){
            if(imageArr[i] === undefined){
                undefinedElements++;
            }
        }

        imageArr.sort();
        counter++;
        if(undefinedElements < imageArr.length-1){
            num1 = getRandomInt(0, imageArr.length-counter);
            num2 = getRandomInt(0, imageArr.length-counter);
            while (num1 === num2){
                num2 = getRandomInt(0, imageArr.length-counter);
            }
            this.setState({
                image1: imageArr[num1],
                image2: imageArr[num2],
            })
        }else{
            this.setState({
                image1: imageArr[0],
                css1:  'looser',
                css2: 'winner',
                text: 'Победитель!',
            })
            document.getElementById('image2').onclick = null;
            document.getElementById('image1').onclick = null;
        }
    }


    render() {
        return(
            <div>
                <div className={"sign"}>
                    <span className="sign__word">{this.state.text}</span>
                </div>
                <div>
            <img id={'image1'} className={this.state.css1} src={this.state.image1} alt="Loading error" onClick={this.changeImg1}/>
                </div>
                <br/>
                <div>
            <img id={'image2'} className={this.state.css2} src={this.state.image2} alt="Loading error" onClick={this.changeImg2}/>
                </div>
            </div>


        )
    }

}
export default ImageForTest;