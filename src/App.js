import React, { Component } from 'react';

import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/Burgerbuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>

    );
  }
}

export default App;


// state ={
//   show:true
// };
// componentDidMount(){
//   setTimeout(()=>{
//     this.setState({show:false});
//   },5000);
// }
// render() {
//   return (
//     <div>
//       <Layout>
//       {this.state.show ? <BurgerBuilder />:null}
//       </Layout>
//     </div>

//   );
// }