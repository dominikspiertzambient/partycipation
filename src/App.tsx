import React, {FC} from 'react';
import {Redirect, Route} from 'react-router-dom';
import {IonApp, IonRouterOutlet} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import {Home} from './pages/Home';
import {StorageProvider} from './provider/Storage';
import {List} from "./pages/Mitbringliste";
import {Card} from "./pages/Home/Card/Card";
import {Teil} from "./pages/Teilnehmer";
import {Evdet} from "./pages/Eventdetails";

export const App: FC = () => (
  <StorageProvider>
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/teil" component={Teil} exact={true} />
          <Route path="/events/:id/details" component={Evdet} />
          <Route path="/list" component={List} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  </StorageProvider>
);
