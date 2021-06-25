import React from 'react';
import AllEngineers from '../components/AllEngineers';
import AllProjects from '../components/AllProjects';
import { Link, navigate } from '@reach/router';


const View = () => {
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
                        <button className="loginBtn2" onClick={() => navigate('/engineers/del_view') }>
                        Control View
                        </button>

                        <br />
                        <br />
                        <AllProjects />
                    </div>
                    <div>
                        <AllEngineers />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default View;