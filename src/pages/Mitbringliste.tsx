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
import Home from "./Home";
import {Route} from "react-router";

const list: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Liste</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                LOLOLOL
            </IonContent>

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

        </IonPage>
    );
};

export default list;
