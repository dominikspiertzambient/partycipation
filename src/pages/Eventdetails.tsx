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
                            {event.city ? event.city : 'muss noch abgestimmt werden'}
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>Zeit:</IonCol>
                        <IonCol>{event.time ? event.time : 'muss noch abgestimmt werden'}</IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>Datum:</IonCol>
                        <IonCol>{event.date ? event.date : 'muss noch abgestimmt werden'}</IonCol>
                    </IonRow>

                    <IonButton color="warning" expand="block">Abstimmung</IonButton>

                </IonGrid>
                <IonTabs>

                    <IonRouterOutlet>
                    </IonRouterOutlet>

                    <IonTabBar slot="bottom">
                        <IonTabButton tab="Ort und Zeit" href={`/events/${params.id}/details`}>
                            <IonIcon name="time"/>
                            <IonLabel>Ort & Zeit</IonLabel>
                        </IonTabButton>

                        <IonTabButton tab="Teilnehmer" href={`/events/${params.id}/details/participants`}>
                            <IonIcon name="person"/>
                            <IonLabel>Teilnehmer</IonLabel>
                        </IonTabButton>

                        <IonTabButton tab="Mitbringliste" href={`/events/${params.id}/details/list`}>
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
