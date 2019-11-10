import {IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React, {FC, useContext} from 'react';
import {StorageContext} from '../../provider/Storage/Storage';
import {Card} from './Card/Card';
import src from '../../img/Download.jpg';

export const Home: FC = () => {
  const {events} = useContext(StorageContext);

  return ( // return
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="title">Eventübersicht</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
          {events && events.length > 0 && events.map(
            (event: any) => <Card key={event.id} title={event.name} date={event.date} src={src} />
          )}
      </IonContent>
      <IonFooter className="toolbar"><p>test</p></IonFooter>
    </IonPage>
  );
};
