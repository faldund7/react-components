import YearlyDashboard from '../YearlyDashboard';
import LiveDashboard from '../LiveDashboard';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import NavButton from '../NavButton';
import styled from 'styled-components';

const StyledRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 1rem;
    padding-top: 1rem;
`

const NavRoutes = function(){
    return(
        <div>
            <Router>
                <StyledRow>
                    <Link to="/" style={{ textDecoration: 'none' }}><NavButton label="Live"></NavButton></Link>
                    <Link to="/yearly" style={{ textDecoration: 'none' }}><NavButton label="Yearly"></NavButton></Link>
                    <Link to="/trends" style={{ textDecoration: 'none' }}><NavButton label="Trends"></NavButton></Link>
                </StyledRow>

                <Switch>
                    <Route exact path='/' component={LiveDashboard}></Route>
                    <Route exact path='/yearly' component={YearlyDashboard}></Route>
                    <Route exact path='/trends' component={YearlyDashboard}></Route>
                </Switch>
            </Router>
        </div>
    );
    
}

export default NavRoutes;
