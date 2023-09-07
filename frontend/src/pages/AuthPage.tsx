import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getIsLogin } from '../store/selector/authSelector';
import { Button, Container, TextField, colors } from '@mui/material';

function AuthPage() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(getIsLogin);
  let initialState = { email: '', password: '' }
  const [userInfo, setUserInfo] = useState(initialState);
  const [login, setLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState({status:false,message:''});

  const handleSubmit = () => {
    setErrorMessage({status:false,message:""})
    if (!userInfo.email?.trim?.() || !userInfo?.password?.trim?.()) {
      console.log("invalid data");
      setErrorMessage({status:true,message:"please fill required fields"})
    } else {
      if (login) {
        console.log('login uesr => ', userInfo);
        setUserInfo(initialState)
      } else {
        console.log('register user =>', userInfo);
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

export default AuthPage
