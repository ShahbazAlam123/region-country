import { connect } from "react-redux";
import App from '../components/App';
import { fetchUsers } from "../Action/Action";

const mapStateToProps = (state) => {
    console.log("mapstate", state);
    return {
      users: state.region.users,
      error: state.region.error,
    };
  };
  
  const mapDispatchToProps = (dispatch) =>( {
     fetchUsers:(user)=>dispatch(fetchUsers(user))
    
  });

  export default connect(mapStateToProps,mapDispatchToProps)(App)
