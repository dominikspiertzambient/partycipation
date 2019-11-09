import {
  IonButton,
  IonContent,
  IonDatetime,
  IonHeader,
  IonInput,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React, {FC} from 'react';
import {RouteComponentProps, withRouter} from "react-router";

export const CreateEvent_: FC<RouteComponentProps> = ({history}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Event anlegen</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonLabel>Tag Monat Jahr</IonLabel>
        <IonDatetime displayFormat="DD MM YY" placeholder="Select Date"></IonDatetime>
        Uhrzeit bitte eingeben ↓
        <IonInput placeholder="z.B 20.00Uhr"></IonInput>
        <IonButton
          onClick={e => {
            e.preventDefault();
            history.push("/event/add2");
          }}>
          Zur zweiten Seite
        </IonButton>
        <p>2 Schritt von 3 </p>
      </IonContent>
    </IonPage>
  );
};

export const CreateEvent = withRouter(CreateEvent_);

