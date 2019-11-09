import React, {FC} from 'react';
import {IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {RouteComponentProps, withRouter} from "react-router";

const _Create: FC<RouteComponentProps> = ({history}) => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Event erstellen</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      Name de Events ↓
      <IonInput placeholder="Ich hab Morgen Geburtstag"></IonInput>
      Standort des Events ↓
      <IonInput placeholder="Köln Achenerstraßer 18"></IonInput>
      Bemerkungen ↓
      <IonInput placeholder="Notizen"></IonInput>
      <IonButton
        onClick={e => {
          e.preventDefault();
          history.push("/event/add2");
        }}>
        Zur zweiten Seite
      </IonButton>
      <p>1 Schritt von 3 </p>
    </IonContent>
  </IonPage>);

export const Create = withRouter(_Create);
