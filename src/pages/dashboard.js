import { useEffect, lazy, Suspense, useState } from 'react';
import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as ROUTES from '../constants/routes';
import useUser from '../hooks/use-user';
import LoggedInUserContext from '../context/logged-in-user';
import Leftbar from '../components/leftbar';
import SearchBar from '../components/leftbar/searchBar';
import ReactLoader from '../components/loader';

const Request = lazy(() => import('../components/newpost/request'));
const Material = lazy(() => import('../components/leftbar/material'));
const SearchResult = lazy(() => import('../components/leftbar/searchResult'));
const Newpost = lazy(() => import('../components/newpost/newpost'));
const Bookshell = lazy(() => import('../components/bookshell/bookshell'));

export default function Dashboard({ user: loggedInUser }) {
  const [show, setShow] = useState(false)
  const [searchResult, setSearchResult] = useState([])
  const userId = loggedInUser ? loggedInUser.id : null
  const username = loggedInUser ? loggedInUser.username : null
  const { user, setActiveUser } = useUser(username);
  let { path, url } = useRouteMatch();

  useEffect(() => {
    document.title = "Book'N'Things";
  }, []);
  return (
    <LoggedInUserContext.Provider value={{ user, setActiveUser, searchResult, setSearchResult }}>
      <div className="dashboard">
        <div className="dashboard__leftbar">
          <Leftbar path={path} url={url} />
        </div>
        <div className="dashboard__main">
          <div className="dashboard__searchbar">
            <SearchBar searchResult={searchResult} setSearchResult={setSearchResult} />
          </div>
          <Suspense fallback={<ReactLoader />}>
            <Switch>
              <Redirect exact from={ROUTES.DASHBOARD} to={ROUTES.BOOKSHELL} />
              <Route path={ROUTES.BOOKSHELL} component={Bookshell} />
              <Route path={ROUTES.REQUEST} component={Request} />
              <Route path={ROUTES.NEWPOST} component={Newpost} />
              <Route path={ROUTES.SEARCHRESULT} component={SearchResult} />
              <Route path={ROUTES.MATERIAL} component={Material} />
            </Switch>
          </Suspense>
        </div>

      </div>

    </LoggedInUserContext.Provider>
  );
}

Dashboard.propTypes = {
  user: PropTypes.object.isRequired
};
