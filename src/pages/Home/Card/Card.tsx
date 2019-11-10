import React, {FC} from 'react';
import './Card.css';
import {IonCard, IonCardSubtitle, IonCardTitle, IonImg} from '@ionic/react';

export const Card: FC<any> = (props) => (
    <IonCard className="box">
        <IonImg className="bild1" src={props.src} />
        <IonCardTitle>{props.title}</IonCardTitle>
        <IonCardSubtitle>{props.date}</IonCardSubtitle>
    </IonCard>
);
