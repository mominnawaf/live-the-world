import {
    AppBar,
    Toolbar,
    Avatar,
} from '@mui/material'
import Logo from '../../assets/logo.svg'
import  styles from'./TopBar.module.css'

function TopBar() {
  return (
    <AppBar title="TopBar" component="nav" position="sticky" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'white', boxShadow: `0px 0px 15px rgba(2, 27, 121, 0.2)` }}>
    <Toolbar variant='dense'>
      <div className={styles.toolBar}>
        <div className={styles.toolBarLeft}>
          <div className={styles.logoDiv}>
            <img src={Logo} alt="logo" className={styles.logoImg} />
          </div>
        </div>
        <div className={styles.ToolBarRight}>
          <Avatar sx={{ width: 46, height: 46, backgroundColor: 'rgb(252 107 67)' }} />
        </div>
      </div>
    </Toolbar>
  </AppBar>
  )
}

export default TopBar