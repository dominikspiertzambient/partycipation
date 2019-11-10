import React, {createContext, FC, useState} from 'react';
import {Plugins} from '@capacitor/core';
import jsonData from '../../data.json';

export const StorageContext = createContext({
  events: [],
  setEvents: () => undefined,
  participants: [],
  setParticipants: () => undefined,
  items: [],
  setItems: () => undefined,
});

export const StorageProvider: FC = ({ children }) => {
  const { Storage } = Plugins;
  const seeds = JSON.parse(JSON.stringify(jsonData));
  const [events, setEvents] = useState(null);
  const [participants, setParticipants] = useState(null);
  const [items, setItems] = useState(null);

  const getStorageData = async (key: string): Promise<any> => {
    const {value} = await Storage.get({ key });
    if (!value) {
      await Storage.set({key, value: JSON.stringify(seeds[key])});
      return JSON.stringify(seeds[key]);
    }
    return value;
  };

  !events && getStorageData('events').then((data) => {setEvents(JSON.parse(data))});
  !participants && getStorageData('participants').then((data) => {setParticipants(JSON.parse(data))});
  !items && getStorageData('items').then((data) => {setItems(JSON.parse(data))});

  return (
    <StorageContext.Provider
      value={{events, setEvents, participants, setParticipants, items, setItems} as any}>
      {children}
    </StorageContext.Provider>
  );
};
