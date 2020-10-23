import * as React from 'react';
import Beer from './Beer';

interface Props {}

interface State {
    beers: string[];
    field: string;
};

export default class BeerList extends React.Component<Props, State> {
  state: State = {
      beers : ['Coreff', 'Corona', 'Mort Subite'],
      field: ''
  }

  
  add = () => {
      const field = this.state.field
      const beers = this.state.beers
      if (field && !(beers.indexOf(this.state.field)>=0)) {
          this.setState({
              field: ''      
            }) 
            beers.push(field)
      }
      
  }

  supp = () => {
    const field = this.state.field
    const beers = this.state.beers
    if (field && beers.indexOf(this.state.field)>=0) {
        this.setState({
            beers: beers.filter(b => b !== field),
            field: ''
          }) 
        }
    
  }

    handleInputChange(e: any) {
        this.setState({
            field: e.target.value
        })
    }

  render () {
    return <div>
    <input type="text" value={this.state.field} onChange={this.handleInputChange.bind(this)}/>
    <button onClick={this.add}>add</button>
    <button onClick={this.supp}>supprimer</button>
    <ul>
    {this.state.beers?.map(b => <Beer name={b}/>)}
    </ul>
    </div>;
  }
}