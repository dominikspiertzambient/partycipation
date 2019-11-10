import React, {FC} from 'react';

import {IonCard, IonCardContent, IonCardSubtitle, IonCardTitle} from '@ionic/react';

export const Card: FC<any> = (props) => (
    <IonCard className="box" onClick={props.onClick}>
        <img className="bild1" src={props.src} alt='card' />
        <IonCardContent>
          <IonCardTitle>{props.title}</IonCardTitle>
          <IonCardSubtitle>{props.date}</IonCardSubtitle>
        </IonCardContent>
    </IonCard>
);
