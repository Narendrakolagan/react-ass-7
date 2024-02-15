import {Component} from 'react'
import './index.css'

class LoginRoute extends Component {
  state = {
    showPasswordStatus: false,
  }

  changeShowPasswordStatus = () => {
    this.setState(prevState => ({
      showPasswordStatus: !prevState.showPasswordStatus,
    }))
  }

  render() {
    const {showPasswordStatus} = this.state

    const passwordStatusField = showPasswordStatus ? 'text' : 'password'

    return (
      <div className="login-container">
        <div className="login-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
            className="website-logo"
          />
          <div className="user-container">
            <label htmlFor="username" className="user-label">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="input"
            />
          </div>
          <div className="pass-container">
            <label htmlFor="password" className="pass-label">
              PASSWORD
            </label>
            <input
              type={passwordStatusField}
              id="password"
              placeholder="Password"
              className="input"
            />
          </div>
          <div>
            <input
              type="checkbox"
              id="showPasswordInputField"
              className="checkbox-input"
              onChange={this.changeShowPasswordStatus}
            />
            <label htmlFor="showPasswordInputField">Show Password</label>
          </div>
          <div className="button-container">
            <button type="submit" className="log-button">
              Login
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginRoute
