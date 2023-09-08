import React, { useState } from 'react'
import { Button, Container, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';



function Auth(props:any) {
  console.log('authprops==>',props);
  let initialState = { email: '', password: '' }
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(initialState);
  const [login, setLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState({status:false,message:''});
  if(props.isLogin){navigate('/')}

  const handleSubmit = () => {
    setErrorMessage({status:false,message:""})
    if (!userInfo.email?.trim?.() || !userInfo?.password?.trim?.()) {
      console.log("invalid data");
      setErrorMessage({status:true,message:"please fill required fields"})
    } else {
      if (login) {
        props.loginhandler(userInfo);
        setUserInfo(initialState)
      } else {
        props.registerHandler(userInfo);
        setUserInfo(initialState)
      }
    }
  }

  return (
    <Container style={{ display: 'flex', flex: 1, width: '100vw', height: '100vh', padding: 0, justifyContent: 'center', alignItems: 'center' }}>
      <Container fixed style={{ width: '400px', gap: '20px', display: 'flex', flexDirection: 'column', paddingBlock: '20px', height: '400px', justifyContent: 'center' }}>
        <TextField id="outlined-basic" value={userInfo.email} onChange={(e) => { setUserInfo({ ...userInfo, email: e.target.value }) }} label="Email" variant="outlined" />
        <TextField id="outlined-basic" value={userInfo.password} onChange={(e) => { setUserInfo({ ...userInfo, password: e.target.value }) }} label="Password" variant="outlined" />
        {errorMessage?.status ? <span style={{ color: 'red', cursor: 'pointer' }} >{errorMessage.message}</span> : null}
        <Button variant="contained" onClick={() => { handleSubmit() }}>{login ? 'Login' : 'Register'}</Button>
        <span style={{ color: 'gray', cursor: 'pointer' }} onClick={() => { setLogin(!login) }}>{login ? 'Create Account' : 'Alredy Have Account Login'}</span>
      </Container>
    </Container>
  )
}

export default Auth