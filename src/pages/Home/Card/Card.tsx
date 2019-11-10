import React, {FC} from "react";
import "./Card.css";
import src from "../../../img/Download.jpg";
import {IonCard, IonCardSubtitle, IonCardTitle, IonImg} from "@ionic/react";
import PropTypes from 'prop-types';


export const Card: FC = () => (
    <IonCard className="box">
        <IonImg className="bild1" src={src}/>
        <IonCardTitle>{props.title}</IonCardTitle>
        <IonCardSubtitle>{props.date}</IonCardSubtitle>
    </IonCard>
);
