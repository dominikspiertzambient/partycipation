import {
    IonAvatar,
    IonBadge,
    IonButton, IonChip,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon, IonItem,
    IonLabel, IonList,
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

const teil: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Teilnehmer</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonList>
                    <IonItem>
                        <IonAvatar slot={"start"}><img src="https://www.lewesac.co.uk/wp-content/uploads/2017/12/default-avatar.jpg" /></IonAvatar>
                        <IonLabel>Pikachus</IonLabel>
                        <IonChip color="success">
                            <IonLabel>nimmt teil</IonLabel>
                        </IonChip>
                    </IonItem>
                    <IonItem>
                        <IonAvatar slot={"start"}><img src="https://www.lewesac.co.uk/wp-content/uploads/2017/12/default-avatar.jpg" /></IonAvatar>
                        <IonLabel>Thor</IonLabel>
                        <IonChip color="warning">
                            <IonLabel>weiß noch nicht</IonLabel>
                        </IonChip>
                    </IonItem>
                    <IonItem>
                        <IonAvatar slot={"start"}><img src="https://www.lewesac.co.uk/wp-content/uploads/2017/12/default-avatar.jpg" /></IonAvatar>
                        <IonLabel>Tony Start</IonLabel>
                        <IonChip color="success">
                            <IonLabel>nimmt teil</IonLabel>
                        </IonChip>
                    </IonItem>
                    <IonItem>
                        <IonAvatar slot={"start"}><img src="https://www.lewesac.co.uk/wp-content/uploads/2017/12/default-avatar.jpg" /></IonAvatar>
                        <IonLabel>Pac-Man</IonLabel>
                        <IonChip color="danger">
                            <IonLabel>nimmt nicht teil</IonLabel>
                        </IonChip>
                    </IonItem>
                    <IonItem>
                        <IonAvatar slot={"start"}><img src="https://www.lewesac.co.uk/wp-content/uploads/2017/12/default-avatar.jpg" /></IonAvatar>
                        <IonLabel>Super Mario</IonLabel>
                        <IonChip color="warning">
                            <IonLabel>weiß noch nicht</IonLabel>
                        </IonChip>
                    </IonItem>
                </IonList>
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
                        <IonIcon name="list" ></IonIcon>
                        <IonLabel>Liste</IonLabel>
                        <IonBadge>6</IonBadge>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>

        </IonPage>
    );
};

export default teil;
