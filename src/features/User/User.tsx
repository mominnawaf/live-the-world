import { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { loginUser,} from './userSlice'
import { selectUser, selectLoginError, getUserTrips } from './userSlice'
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  TextField,
  Button
} from '@mui/material'
import './User.module.css'
import Logo from '../../assets/logo.svg'
import styles from './User.module.css'



export default function User() {
  const user = useAppSelector(selectUser)
  const error = useAppSelector(selectLoginError)
  const dispatch = useAppDispatch()
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  useEffect(() => {
    if (user.jwt) {
      setOpen(false)
      dispatch(getUserTrips())
    }
    else {
      setOpen(true)
    }

  }, [user, dispatch])

  const submit = () => {
    if (!email.length) {
      setEmailError('Email Needed')
    }
    if (!password.length) {
      setPasswordError('Password Needed')
    }
    if (email.length && password.length) {
      dispatch(loginUser(
        {
          identifier: email,
          password: password
        }
      ))
    }
    setEmail('')
    setPassword('')
  }

  return (
    <div>
      <Dialog open={open}>
        <DialogTitle className={styles.dialogTitle}>
          Login
          </DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className={styles.dialogTop}>
            <img src={Logo} alt='logo' style={{ width: 100 }} />
            <span className={styles.dialogSpan}>
              Happy planning. <br/>
              Happy travel.</span>
          </div>
          {
            error ? <span className={styles.errorSpan}>{error}</span> : null
          }
          <TextField
            className={styles.authInput}
            required
            value={email}
            label="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)} // Debouncing is needed
            error={emailError ? true : false}
            helperText={emailError}
          />
          <TextField
            className={styles.authInput}
            required
            type='password'
            value={password}
            label="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)} // Debouncing is needed
            error={passwordError ? true : false}
            helperText={passwordError}
          />
        </DialogContent>
        <DialogActions>
          <Button variant='contained' className={styles.loginBtn} onClick={() => submit()}>Login</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
