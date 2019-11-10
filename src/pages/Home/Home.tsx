import {IonCard, IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React, {FC, useContext} from 'react';
import {StorageContext} from '../../provider/Storage/Storage';
import {Card} from './Card/Card';
import src from '../../img/Download.jpg';

export const Home: FC = () => {
  const {participants, events, items} = useContext(StorageContext);

  return ( // return
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="title">Eventübersicht</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        The world is your oyster.
        <p>
          If you get lost, the{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/">
            docs
          </a>{' '}
          will be your guide.
        </p>
        {participants && participants.length > 0 && participants.map(
          (participant: any) => <p key={participant.id}>{participant.name}</p>
        )}
        <div>
          {events && events.length > 0 && events.map(
            (event: any) => <Card key={event.id} title={event.name} date={event.date} src={src} />
          )}
        </div>
        <div>
          {items && items.length > 0 && items.map(
            (item: any) => <p key={item.id}>{item.name}</p>
          )}
        </div>
      </IonContent>
      <IonFooter className="toolbar"><p>test</p></IonFooter>
    </IonPage>
  );
};
