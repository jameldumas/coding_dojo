import './App.css';
import { Router } from '@reach/router';
import { Link, navigate } from '@reach/router';
import AllEngineers from './components/AllEngineers';
import EngDashBoard from './components/EngDashBoard';
import EditEngineers from './components/EditEngineers';
import NewEngineer from './components/NewEngineer';
import ViewEngineer from './components/ViewEngineer';
import LoginEngineer from './components/LoginEngineer';
import RegEngineer from './components/RegEngineer';
import EngLoginReg from './views/EngLoginReg';
import LoginCompany from './components/LoginCompany';
import RegCompany from './components/RegCompany';
import NewProject from './components/NewProject';
import ViewAll from './views/ViewAll';
import ViewProject from './components/ViewProject';
import DelView from './views/DelView';
import ProjectView from './views/ProjectView';
import DashView from './views/DashView';
import Pview from './views/PView';
import Home from './views/Home';
import ViewProject2 from './components/ViewProject2';
import EditProject from './components/EditProject';

function App() {
  return (
    <div className="App">

      <Router>
        <AllEngineers path="/engineers/"/>
        <EngDashBoard path="/engineers/dashboard/:id"/>
        <NewEngineer path="/engineers/new"/>
        <EditEngineers path="/engineers/:id/edit"/>
        <ViewEngineer path="/engineers/manager_view/dashboard/:id"/>
        <LoginEngineer path="/engineers/login"/>
        <RegEngineer path="/engineers/register"/>
        <EngLoginReg path="/engineers/loginreg"/>
      </Router>

      <Router>
        <LoginCompany path="/engineers/management/login"/>
        <RegCompany path="/engineers/manager/register"/>
        <NewProject path="/engineers/manager/new_project"/>
        <ViewProject path="/engineers/projects/:id" />
        <ViewProject2 path="/engineers/project/:id" />
        <EditProject path="/engineers/manager/new_projecy/edit/:id" />
      </Router>

      <Router>
        <ViewAll path ="/engineers/all"/>
        <DelView path ="/engineers/del_view"/>
        <ProjectView path= "/engineers/projects_view"/>
        <DashView path= "engineers/view_dashboard" />
        <Home path="/home"/>
        <Pview path="/engineers/projects_view2"/>
      </Router>
      
    </div>
  );
}

export default App;
