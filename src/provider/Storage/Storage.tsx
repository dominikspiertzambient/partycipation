import React, {createContext, FC, useState} from 'react';
import {Plugins} from '@capacitor/core';
import jsonData from '../../data.json';

export const StorageContext = createContext({
  events: [],
  participants: [],
});

export const StorageProvider: FC = ({ children }) => {
  const { Storage } = Plugins;
  const seeds = JSON.parse(JSON.stringify(jsonData));
  const [events, setEvents] = useState(null);
  const [participants, setParticipants] = useState(null);

  const getStorageData = async (key: string): Promise<any> => {
    const {value} = await Storage.get({ key });
    if (!value) return Storage.set({key, value: JSON.stringify(seeds[key])});
    return value;
  };

  !events && getStorageData('events').then((data) => {setEvents(JSON.parse(data))});
  !participants && getStorageData('participants').then((data) => {setParticipants(JSON.parse(data))});

  return <StorageContext.Provider value={{events, participants} as any}>{children}</StorageContext.Provider>;
};
