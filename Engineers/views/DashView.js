import React from 'react';
import DelEngineer from '../components/DelEngineer';
import EngDashBoard from '../components/EngDashBoard';
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
                <h2 className="yourDashboard"> View and Delete </h2>
                <div className="engDashBoard4">
                    <div className="viewAll">
                        <button className="loginBtn2" onClick={() => navigate('/engineers/manager/new_project') }>
                        List A New Project
                        </button>
                        <br />
                        <br />
                        
                    </div>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <div>
                    <button className="loginBtn2" onClick={() => navigate('/engineers/all') }>
                        View All
                        </button>
                        <br />
                        <br />
                        <EngDashBoard />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DelView;