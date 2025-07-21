import React from 'react';
import FormBuilder from './components/FormBuilder';
import Carousel from './components/Carousel';



 const images = [
    <img src="https://imagekit.io/blog/content/images/2020/06/LinkedIn-1200_628.png" alt="1" />,
    <img src="https://imagekit.io/blog/content/images/2020/06/LinkedIn-1200_628.png" alt="2" />,
    <img src="https://imagekit.io/blog/content/images/2020/06/LinkedIn-1200_628.png" alt="3" />,
  ];

class App extends React.Component {

  constructor(props) {
    console.log('App component is being constructed');
    super(props);
    this.state = {favoritefood: "rice"};
  }
 render() {
    return <Carousel items={images} />;
  }
}

export default App
