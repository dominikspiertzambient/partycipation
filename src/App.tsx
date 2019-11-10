import React, {FC} from 'react';
import {Redirect, Route} from 'react-router-dom';
import {IonApp, IonRouterOutlet} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import {Home} from './pages/Home';
import {StorageProvider} from './provider/Storage';

export const App: FC = () => (
  <StorageProvider>
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/event/add1" component={Create} exact={true} />
          <Route path="/event/add2" component={CreateEvent} exact={true} />
          <Route path="/event/add3" component={CreateList} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  </StorageProvider>
);
