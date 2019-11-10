import {
    IonBadge,
    IonButton, IonCard,
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
import {StorageContext} from "../provider/Storage/Storage";

export const Evdet: FC = () => {

    const {events} = useContext(StorageContext);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Karnevalsparty</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <div>
                    {events && events.length > 0 && events.map(
                        (event: any) => (
                            <IonCard key={1}>
                                <p>{event.date}</p>
                                <p>{event.city}</p>
                            </IonCard>
                        )
                    )}
                </div>
                <IonGrid>
                    <IonRow>
                        <IonCol>Ort:</IonCol>
                        <IonCol>
                            {events && events[0].city as any}
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
        </IonPage>
    )
};
