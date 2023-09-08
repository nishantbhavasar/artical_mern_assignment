import MyPostPage from '../components/Home/MyPosts';
import { triggerDeleteArtical, triggerGetAllArtical, triggerGetArtical, triggerGetMyArtical, triggerUpdateArtical } from '../store/Actions/articalAction';
import { connect } from 'react-redux';

const mapStateToProps = (state:any) => ({
  isLogin:state.authReducer.isLogin,
  userData:state.authReducer.data,
  myArticals:state.articalReducer.myArticals,
})
const mapDispatchToProps=(dispatch:any)=>({
  getAllArticals:(payload:any)=>dispatch(triggerGetAllArtical(payload)),
  getMyArticals:(payload:any)=>dispatch(triggerGetMyArtical(payload)),
  getArtical:(payload:any)=>dispatch(triggerGetArtical(payload)),  
  updateArtical:(payload:any)=>dispatch(triggerUpdateArtical(payload)),  
  deleteArtical:(payload:any)=>dispatch(triggerDeleteArtical(payload)),  
})

export default connect(mapStateToProps,mapDispatchToProps)(MyPostPage);
