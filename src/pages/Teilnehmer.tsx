import {
    IonAvatar,
    IonBadge,
    IonChip,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import React, {FC, useContext} from 'react';
import {RouteComponentProps, withRouter} from "react-router";
import {StorageContext} from "../provider/Storage/Storage";

export const Teil_: FC<RouteComponentProps<any>> = ({match: {params}}) => {

    const {events, participants} = useContext(StorageContext);
    const event: any = events.find((findEvent: any) => findEvent.id.toString() === params.id);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Teilnehmer</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonList>

                    <div>
                        {event.participants && event.participants.length > 0 && event.participants.map((participant: any) => {
                                console.log(participant);
                                const partyParticipant: any = participants.find((findP: any) => findP.id === participant);

                                return (
                                    <IonItem key={participant}>
                                        <IonAvatar slot={"start"}><img
                                            src="https://www.lewesac.co.uk/wp-content/uploads/2017/12/default-avatar.jpg"/></IonAvatar>
                                        <IonLabel>
                                            {partyParticipant.name}
                                        </IonLabel>
                                        <IonChip color="success">
                                            <IonLabel>nimmt teil</IonLabel>
                                        </IonChip>
                                    </IonItem>
                                )
                            }
                        )}
                    </div>
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

                    <IonTabButton tab="Teilnehmer" href="details/participants">
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


export const Teil = withRouter(Teil_);