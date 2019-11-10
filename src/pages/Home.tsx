import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React, {FC, useContext} from 'react';
import {StorageContext} from '../provider/Storage/Storage';

export const Home: FC = () => {
  const {participants} = useContext(StorageContext);

  return ( // return
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Ionic Blank</IonTitle>
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
        </IonContent>
    </IonPage>
  )
};
