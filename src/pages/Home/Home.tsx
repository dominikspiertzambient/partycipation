import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React, {FC} from 'react';

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
            (event: any) => (
              <IonCard key={event.id}>
                <p>{event.date}</p>
                <p>{event.city}</p>
              </IonCard>
            )
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
