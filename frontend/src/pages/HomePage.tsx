import Home from '../components/Home/Home';
import { triggerDeleteArtical, triggerGetAllArtical, triggerGetArtical, triggerGetMyArtical, triggerUpdateArtical } from '../store/Actions/articalAction';
import { connect } from 'react-redux';

const mapStateToProps = (state:any) => ({
  isLogin:state.authReducer.isLogin,
  userData:state.authReducer.data,
  articals:state.articalReducer.articals,
})
const mapDispatchToProps=(dispatch:any)=>({
  getAllArticals:(payload:any)=>dispatch(triggerGetAllArtical(payload)),
  getMyArticals:(payload:any)=>dispatch(triggerGetMyArtical(payload)),
  getArtical:(payload:any)=>dispatch(triggerGetArtical(payload)),  
  updateArtical:(payload:any)=>dispatch(triggerUpdateArtical(payload)),  
  deleteArtical:(payload:any)=>dispatch(triggerDeleteArtical(payload)),  
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);
