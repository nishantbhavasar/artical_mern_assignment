import Auth from '../components/Auth/Auth';
import { triggerLogin, triggerRegister } from '../store/Actions/authAction';
import { connect } from 'react-redux';

const mapStateToProps = (state:any) => ({
  isLogin:state.authReducer.isLogin,
  userData:state.authReducer.data
})
const mapDispatchToProps=(dispatch:any)=>({
  loginhandler:(payload:any)=>dispatch(triggerLogin(payload)),
  registerHandler:(payload:any)=>dispatch(triggerRegister(payload))
})

export default connect(mapStateToProps,mapDispatchToProps)(Auth);
