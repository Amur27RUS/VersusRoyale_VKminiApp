import React from 'react';
import persik from './img/persik.png';
import spotty from './img/spotty.png';

class ImageForTest extends React.Component {
    state = {
        image: persik
    }

    changeImg = () => {
        if (this.state.image === persik){
         console.log('Вы выбрали Персика!');
            this.setState({
                image: spotty
            });
        }else{
            console.log('Вы выбрали Спотти!');
            this.setState({
                image: persik
            });
        }
    }

    render() {
        return(
            <img className="Persik" src={this.state.image} alt="Persik The Cat" onClick={this.changeImg}/>
        )
    }

}
export default ImageForTest;