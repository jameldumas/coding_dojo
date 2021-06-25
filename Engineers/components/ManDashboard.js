import React from 'react';
import DelEngineer from '../components/DelEngineer';
import DelProjects from '../components/DelProjects';
import { Link, navigate } from '@reach/router';


const DelView = () => {
    return (
        <div className="appbackground">
            <h1 className="appHeaderInside">Engineers
            <Link className="linkHead" to="/engineers/login">
                Logout
            </Link>
            </h1>
            
            <div className="engDashBoard">
                <h2 className="yourDashboard"> Dashboard </h2>
                <div className="engDashBoard4">
                    <div className="viewAll">
                        <button className="loginBtn2" onClick={() => navigate('/engineers/manager/new_project') }>
                        List A New Project
                        </button>
                        <br />
                        <br />
                        <DelProjects />
                    </div>
                    <div>
                        <DelEngineer />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DelView;