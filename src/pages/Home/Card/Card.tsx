import React, {FC} from "react";
import "./Card.css"
import src from "../../../img/Download.jpg"
import {IonCard, IonCardSubtitle, IonCardTitle, IonImg} from "@ionic/react";


export const Card: FC = () => (
    <IonCard className="box">
        <IonImg className="bild1" src={src}/>
        <IonCardTitle>Code + Design Camp</IonCardTitle>
        <IonCardSubtitle>Samstag, 09.11.2019</IonCardSubtitle>
    </IonCard>
);
