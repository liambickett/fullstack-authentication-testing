import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Dashboard from './components/Dashboard';
import NewSurvey from './components/NewSurvey';
import LandingPage from './components/LandingPage';

import { useGetUserQuery } from './store/apis/userApi';

function App() {
  const { data, error, isLoading, refetch } = useGetUserQuery();

  let user;

  if (isLoading) {
    user = 'loading...';
  } else if (error) {
    console.log(error);
  } else if (data) {
    user = data;
  }

  return (
    <div>
      <Header user={user} />
      <BrowserRouter>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route path='/survey'>
          <NewSurvey />
        </Route>
        <Route path='/dashboard'>
          <Dashboard user={user} />
        </Route>
      </BrowserRouter>
      <a href='/auth/google'>Sign in with Google</a>
    </div>
  );
}
export default App;
