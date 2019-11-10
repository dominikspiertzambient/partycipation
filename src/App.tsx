import React, {FC} from 'react';
import {Redirect, Route} from 'react-router-dom';
import {IonApp, IonRouterOutlet} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import {StorageProvider} from './provider/Storage';
import {Home} from './pages/Home/Home';
import {Card} from './pages/Home/Card/Card';

export const App: FC = () => (
  <StorageProvider>
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/Card" component={Card} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  </StorageProvider>
);
