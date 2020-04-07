import React from 'react';
import { useState, useEffect } from 'react';
import convert from 'xml-js';
import XMLParser from 'react-xml-parser';

const serviceKey = 'VNuYY2Q4Kx2NS9IQVSQ%2FawNWRgdA4MogzzqKkxLQloa3o%2FkaMfC83NaCTPTmr%2BLhIFsNpFRZ1Ex9o1%2FYYqvLcg%3D%3D';

const Bus = () => {
    const [stationId, setStationId] = useState('12121');

    const url = (stationid) =>
        `http://ws.bus.go.kr/api/rest/stationinfo/getStationByUid?ServiceKey=${serviceKey}&arsId=${stationid}`;

    console.log(url(stationId));
    
    useEffect(() => {
        fetch(encodeURIComponent(url(stationId)))
        .then(response => response.text())
        .then(str => {
            console.log(str);
            const jsondata = JSON.parse(convert.xml2json(str));
            return jsondata;
        })
        .then(jsondata => console.log(jsondata));
        //.then(str => { return new XMLParser().parseFromString(str); })
        //.then(xmldata => console.log(xmldata.length));
        //.then(data => console.log(JSON.stringify(data)))
        //.then( data => convert.xml2json(data))
        //.then( data => console.log(data)); 
    });

    return (
        <div>
            <h2>죄송합니다</h2>
        </div>
    );
};

export default Bus;