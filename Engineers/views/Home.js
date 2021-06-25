import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

    
    
const Home = () => {
  return (
    <div className="appbackground">
      <h1 className="appHeaderInside">Engineers
            <Link className="linkHead" to="/engineers/login">
                Logout
            </Link>
      </h1>

      <div className="engDashBoard">
        <h2 className="yourDashboard"> Welcome To Asure's Engineering Intranet Site </h2>

        <div className="engDashBoard5">
          <iframe width="300" height="200" src="https://player.vimeo.com/video/382993571?app_id=122963&amp"></iframe>
          <table className="TableAll">
            <tbody>
              <tr>
                <td>
                  Engineer Registration
                </td>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <td>
                <button className="ViewBtn3" onClick={() => navigate('/engineers/register')}>Register</button>
                </td>
              </tr>
              <tr>
                <td>
                  Manager Registration
                </td>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <td>
                <button className="ViewBtn3" onClick={() => navigate('/engineers/manager/register')}>Register</button>
                </td>
              </tr>
              <tr>
                <td>
                  Engineer Login
                </td>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <td>
                <button className="ViewBtn3" onClick={() => navigate('/engineers/login')}>Login</button>
                </td>
              </tr>
              <tr>
                <td>
                  Manager Login
                </td>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <td>
                <button className="ViewBtn3" onClick={() => navigate('/engineers/manager/login')}>Login</button>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>

    </div>
  )
}

export default Home;
