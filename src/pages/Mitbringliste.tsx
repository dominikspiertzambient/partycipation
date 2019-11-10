import React, {FC} from 'react';
import {IonContent, IonHeader, IonPage, IonTextarea,IonInput, IonItem, IonLabel} from '@ionic/react';
import {RouteComponentProps, withRouter} from "react-router";
import {Link} from "react-router-dom";

const _CreateList: FC<RouteComponentProps> = ({history}) => (
    <IonPage>
      <IonHeader>
        <h1>Liste</h1>
      </IonHeader>
      <IonContent>
          <IonTextarea>Mitbringliste↓</IonTextarea>
        <p> z.B Cola↑</p>
        <Link to="/home">Beenden und Speichern</Link>
      </IonContent>
    </IonPage>);
export const CreateList = withRouter(_CreateList);
