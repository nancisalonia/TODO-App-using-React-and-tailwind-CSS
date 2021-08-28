import { declareFunction } from '@babel/types';
import React from 'react';


class App extends  React.Component{

  state = {
    input: '',
    items: [
      'Walk my seagul',
      'Legalize murder',
      'Listen to Dean Martin'
    ]
  }

  constructor(props){
    super(props);

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }



  addItem(event){
    
    this.setState((state) => (
      {
        items: state.items.concat(state.input)
      }
    ));

    event.preventDefault();

  }

  removeItem(event){

    let newList = this.state.items;
    newList.pop();

    this.setState((state) => (
      {
        items: newList
      }
    ))

  }

  handleInput(event){

    this.setState(({
      input: event.target.value
    }));
  
  }
  
 
 
  render(){



    return (
      <div className="App">
        <div>
          <h2 className="bg-purple-600 text-white text-center max-w-2xl font-mono text-5xl shadow-xl font-medium m-auto mt-5 mb-5 p-5 rounded-lg">My TODO List</h2>

          <List items={this.state.items} removeItem={this.removeItem}></List>

          

          <div className="flex justify-center">
            <form onSubmit={this.addItem}>
              <div className="space-x-5">
                <input onChange={this.handleInput} placeholder="Walk my dog" type="text" className="pl-2 p-2 border border-purple-500 rounded-lg w-64" />
                <button type="submit" className="bg-pink-500 hover:bg-pink-800 rounded-md text-white px-5 py-1 ">Add</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    )
  }
 
}

function List(props){
  return(
    <div className="grid justify-items-center">
      {
        props.items.map((item, index) => {
          return(
            <Item removeItem={props.removeItem} name={item} key={index}></Item>
          )
        })
      }

    </div>

  )

}

function Item(props){
  return(
    <div className="bg-white text-center m-5 rounded-xl p-6 w-2/6">
      <div className="flex justify-between space-x-5">
        <h5 className="font-sans font-semibold text-lg">{props.name}</h5>
        <button onClick={props.removeItem} className="bg-red-600 text-white font-medium px-2 py-1 rounded-xl hover:bg-red-900">Remove</button>
      </div>
    </div>
  )
}

export default App;

