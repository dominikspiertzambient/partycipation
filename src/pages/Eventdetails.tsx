import {
    IonBadge,
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonLabel,
    IonPage,
    IonRouterOutlet,
    IonRow,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import React, {FC, useContext} from 'react';
import {StorageContext} from '../provider/Storage/Storage';
import {RouteComponentProps, withRouter} from 'react-router';

const Evdet_: FC<RouteComponentProps<any>> = ({match: {params}}) => {
    const {events} = useContext(StorageContext);
    const event: any = events.find((findEvent: any) => findEvent.id.toString() === params.id);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{event ? event.name : 'Event nicht gefunden'}</IonTitle>
                </IonToolbar>
            </IonHeader>
            {event && (
            <IonContent className="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol>Ort:</IonCol>
                        <IonCol>
                           test
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>Zeit:</IonCol>
                        <IonCol>11-23Uhr</IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>Datum:</IonCol>
                        <IonCol>11.11.2019</IonCol>
                    </IonRow>

                    <IonButton color="warning" expand="block">Abstimmung</IonButton>

                </IonGrid>
                <IonTabs>

                    <IonRouterOutlet>
                    </IonRouterOutlet>

                    <IonTabBar slot="bottom">

                        <IonTabButton tab="Ort und Zeit" href="/evdet">
                            <IonIcon name="time"/>
                            <IonLabel>Ort & Zeit</IonLabel>
                        </IonTabButton>

                        <IonTabButton tab="Teilnehmer" href="/teil">
                            <IonIcon name="person"/>
                            <IonLabel>Teilnehmer</IonLabel>
                        </IonTabButton>

                        <IonTabButton tab="Mitbringliste" href="/list">
                            <IonIcon name="list"/>
                            <IonLabel>Liste</IonLabel>
                            <IonBadge>6</IonBadge>
                        </IonTabButton>
                    </IonTabBar>
                </IonTabs>
            </IonContent>
              )}
        </IonPage>
    )
};

export const Evdet = withRouter(Evdet_);
