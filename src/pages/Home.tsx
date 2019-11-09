import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React, {FC} from 'react';

export const Home: FC = () => ( // return
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>sst</IonTitle>
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
        </IonContent>
    </IonPage>
);
