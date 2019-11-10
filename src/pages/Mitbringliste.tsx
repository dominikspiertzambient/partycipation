import {
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
import React, {useContext} from 'react';

import {RouteComponentProps, withRouter} from 'react-router';
import {StorageContext} from '../provider/Storage/Storage';

const List_: React.FC<RouteComponentProps<any>> = ({match: {params}}) => {
    const {items} = useContext(StorageContext);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Liste</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonList>
                    <IonItem>
                        <IonLabel>Bier</IonLabel>
                        <IonChip color="warning">
                            <IonLabel>wird mehr gebraucht</IonLabel>
                        </IonChip>
                    </IonItem>

                    <div>
                        {items && items.length > 0 && items.map(
                            (item: any) => (
                                <IonItem key={item.id}>
                                    <p>{item.amount}</p>
                                    <p> x</p>
                                    <p>{item.name}</p>
                                </IonItem>
                            )
                        )}
                    </div>
                </IonList>
            </IonContent>


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

        </IonPage>
    );
};

export const List = withRouter(List_);
