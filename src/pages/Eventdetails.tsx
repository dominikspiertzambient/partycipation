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
    IonRow, IonTab,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import React from 'react';
import {Route} from "react-router";

const evdet: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Karnevalsparty</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol>Ort:</IonCol>
                        <IonCol>Zülpicher Str.</IonCol>
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
    );
};

export default evdet;
