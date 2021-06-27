import React from 'react';


class App extends React.Component{
  constructor() {
    super();
    this.state  = {
      map1: new Map([['a', 1], ['i', 1], ['j', 1], ['q', 1], ['y', 1], ['b',2], ['k',2], ['r', 2], ['c', 3], ['g', 3], ['l', 3],
      ['s',3], ['d', 4], ['m', 4], ['t', 4], ['e',5], ['h', 5], ['n', 5], ['x', 5], ['u', 6], ['v', 6], ['w', 6], 
      ['o', 7], ['z', 7], ['f', 8], ['p', 9]]),
      compoundNumber: 0,
      destinyNumber: 0,
      soulUrgeNumber: 0,
      dreamNumber: 0,
      userName :'',
      textarr: ['Text 1', 'Text 2', 'Text 3', 'Text 4', 'Text 5', 'Text 6', 'Text 7', 'Text 8', 'Text 9', 'Text 10'],
      destinyText: '',
      soulText: '',
      dreamText: ''
    }
  }

  clicked = () => {
    var name = this.state.userName.toLocaleLowerCase();
    var arr = name.split("");

    // Calculating Compound Number
    var cn = 0;
    var soulUrge = 0;
    var vowel = "aeiou";
    arr.map((ele) => {
      var temp = this.state.map1.get(ele);
      cn = cn + temp;
      if(vowel.includes(ele)){
        soulUrge = soulUrge + temp;
      }
      return cn;
    })
    this.setState({compoundNumber: cn});
    this.setState({soulUrgeNumber: soulUrge});
    this.setState({soulText: this.state.textarr[soulUrge%10]})
    this.setState({dreamNumber: cn - soulUrge});
    this.setState({dreamText: this.state.textarr[(cn - soulUrge)%10]})

    // Calculating Destiny Number
    var dn = 0;
    while(cn > 0){
      var temp = Math.floor(cn%10);
      dn = dn + temp;
      cn = Math.floor(cn/10);
    }
    this.setState({destinyNumber: Math.floor(dn)});
    this.setState({destinyText: this.state.textarr[dn%10]})
  }
 

  render(){
    return(
    <div className="App">
      <h1 className="main-heading">Name Numerology Calculator</h1>

      <div className="form-group">
          <label className="form-label">Enter Your Name</label>
          <input type="text" className="form-input" onChange = {(e) => {this.setState({userName: e.target.value})}} ></input>
          <button type="submit" className="form-submit" onClick={this.clicked}> Submit</button>
      </div>

      <div className="result-box">
          <h1 className="result">Compound Number:{this.state.compoundNumber}</h1>
          <h1 className="result">Destiny Number: {this.state.destinyNumber}</h1>
          <p>{this.state.destinyText}</p>
          <h1 className="result">Soul Urge Number: {this.state.soulUrgeNumber}</h1>
          <p>{this.state.soulText}</p>
          <h1 className="result">Dream Number: {this.state.dreamNumber}</h1>
          <p>{this.state.dreamText}</p>
      </div>
    </div>
    )
  };
}

export default App;
