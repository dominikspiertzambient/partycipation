import React, {FC} from 'react';
import {Redirect, Route} from 'react-router-dom';
import {IonApp, IonRouterOutlet} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import {Home} from './pages/Home';
import {StorageProvider} from './provider/Storage';
import list from "./pages/Mitbringliste";
import {Card} from "./pages/Home/Card/Card";
import teil from "./pages/Teilnehmer";
import evdet from "./pages/Eventdetails";

export const App: FC = () => (
  <StorageProvider>
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/teil" component={teil} exact={true} />
          <Route path="/evdet" component={evdet} exact={true} />
          <Route path="/list" component={list} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/Card" component={Card} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  </StorageProvider>
);
