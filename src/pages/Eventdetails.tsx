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

                    <IonTabs>

                        /*
                        <IonRouterOutlet>
                            <Route path="/:tab(tabh)" component={Home} exact={true} />
                        </IonRouterOutlet>
                        */


                            <IonTab tab="Teilnehmer">
                                <IonHeader translucent>
                                    <IonToolbar>
                                        <IonTitle>lalalalal</IonTitle>
                                    </IonToolbar>
                                </IonHeader>
                                <IonRouterOutlet>
                                    <Route path="/:tab(tabh)" component={Home} exact={true} />
                                </IonRouterOutlet>

                                <IonContent fullscreen className="ion-padding">
                                    <h1>Games</h1>
                                </IonContent>
                            </IonTab>
/*
                            <IonTab tab="b">
                                <IonHeader translucent>
                                    <IonToolbar>
                                        <IonTitle>b</IonTitle>
                                    </IonToolbar>
                                </IonHeader>

                                <IonContent fullscreen className="ion-padding">
                                    <h1>Games</h1>
                                </IonContent>
                            </IonTab>

                            <IonTab tab="a">
                                <IonHeader translucent>
                                    <IonToolbar>
                                        <IonTitle>c</IonTitle>
                                    </IonToolbar>
                                </IonHeader>

                                <IonContent fullscreen className="ion-padding">
                                    <h1>Games</h1>
                                </IonContent>
                            </IonTab>
*/
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

                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default evdet;
