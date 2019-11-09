import React, {FC} from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon} from '@ionic/react';
import {RouteComponentProps, withRouter} from "react-router";

const _CreateList: FC<RouteComponentProps> = ({history}) => (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Was braucst du noch?</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          {/*-- fab placed to the top end --*/}
          <IonFab vertical="top" horizontal="end" slot="fixed">
            <IonFabButton>
              <IonIcon name="add" />
            </IonFabButton>
          </IonFab>
      </IonContent>
    </IonPage>);
export const CreateList = withRouter(_CreateList);
