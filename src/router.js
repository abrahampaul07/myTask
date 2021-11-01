import { Link,BrowserRouter as Router,Route } from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Login from "./Login"


import { LoginConsumer } from "./Context/LoginContext"
export const routing=(
    
    <Router>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <Link className="navbar-brand" to="/">MyNav</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">

{
  <LoginConsumer>
     {
       (loginInfo)=>{
                if(loginInfo.login){
                  return (
                    <>
                  
                  <li className="nav-item">
                    <Link className="nav-link" to="/accounts">About</Link>
                  </li>
                  <li className="nav-item">
                    <p className="nav-link" onClick={ ()=>{
                      loginInfo.logout()
                      window.location.pathname="/"
                    }
                    }>Logout</p>
                  </li>
                  </>
                  )
                }
                else{
                     return (
                            <>
                            <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                           </li>
                            </>
                     )

                }
       }
       
     }
  </LoginConsumer>
}

  
      

     
      </ul>
      </div>
</nav>

<Route path="/" exact component={Home}/>
<Route path="/About" component={About}/>
<Route path="/login" component={Login}/>
</Router>



)