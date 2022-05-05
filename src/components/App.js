import { Component } from "react";
import mock from "../Mock/Mock";
import Common from './common/Common';


class App extends Component {
  componentDidMount=()=>{
   this.props.fetchUsers('africa')
  }
  render() {
    const regionName=mock.map((item)=>item.name)
    const contryname = this.props.users.map((item) => item.name.common);

    return (
      <div className="container">
      <header>
          <h1>World Region and its Countries</h1>
        </header>
        <div className="error">
        <h1 >{this.props.error}</h1>
        </div>
      <div className="App">    
        <Common onChange={(e)=>this.props.fetchUsers(e.target.value)}
        value={regionName}
        />
        <Common value={contryname}/>
      </div>
      </div>
    );
  }
}
export default App;
