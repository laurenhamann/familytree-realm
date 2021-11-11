import React from "react";
import './styles/modules/_login.scss';

function LogInForm(props) {
    return (
        <div className='pane'>
            <div className='pane--inner'>
                <h2 className="header-text">
                    Family Tree Log-in
                </h2>
                <div className="input--pane">
                    <div className="input--pane--inner">
                        <label className="input--label" htmlFor="input--username">
                            Username
                            <span title="This field is required">*</span>
                            </label>
                            <br />
                            <input
                                className="input"
                                id="input--username"
                                required
                                autoFocus
                                placeholder="mongodb@example.com"
                                onChange={(e) => props.setEmail(e.target.value)}
                                value={props.email}
                            />
                    </div>
                </div>
                <div className="input--pane">
                    <div className="input--pane--inner">
                        <label className="input--label" htmlFor="input--password">
                            Password
                            <span title="This field is required">*</span>
                            <br />
                            <input
                                className="input"
                                id="input--password"
                                required
                                placeholder="**********"
                                type="password"
                                onChange={(e) => props.setPassword(e.target.value)}
                                value={props.password}
                            />
                        </label>
                    </div>
                </div>
                <button className="button button--primary" onClick={props.handleLogIn}>
                    Log in
                </button>
            </div>
        </div>
    )
}


export default LogInForm