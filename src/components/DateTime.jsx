import React, { useEffect, useState } from "react";
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import moment from 'moment';
import '../styles/DateTime.css';

export default function DateTime(){

    const [datetimeList, setDatetimeList] = useState([])

    const datetimeCollectionRef = collection(db, "pomodoroSessions");

    useEffect(() => {
        const getDatetimeList = async () => {
            // read the data
            // set the datetime list
            try {
            const data = await getDocs(datetimeCollectionRef);

            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setDatetimeList(filteredData);

            } catch (err) {
                console.log(err);
            }
        };

        getDatetimeList();
    }, []);


    return (
        <div>
            <p id="datetime-info">log: </p>
            {datetimeList.map((datetime) => (
                <div>
                    <p id="datetime-info">{moment(datetime.timestamp.toDate()).format('MMMM Do YYYY, h:mm:ss a')}</p>
                </div>
            ))}
        </div>
    )
}