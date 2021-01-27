import { useTheme } from '@material-ui/styles';
import React, { useState, useEffect } from 'react';

const Function2 = () => {
    const [dateUS, setDateUS] = useState('');
    const [timeUS, setTimeUS] = useState('');
    const [dateTH, setDateTH] = useState('');
    const [timeTH, setTimeTH] = useState('');
    const [quarter, setQuarter ] = useState('');
    const [unixDate, setUnixDate] = useState(0)

    useEffect(() => {
        const d = "2020-08-10T14:54:52+07:00";

        let ddmmyyy = formatDateDDMMYYUS(); // dd/mm/yyyy
        let hhmm = fomatTimeHHMMUS(); // hh:mm
        let unix = unixDates();
        let ddmmyyth = formatDateDDMMYYTH();
        let q = quarters();

        let date = new Date(d);
        // let day = new Date(d).getDate();
        // let month = new Date(d).getMonth()+1;
        // let year = new Date(d).getFullYear();

        // console.log(date)
        // console.log(day)
        // console.log(month)
        // console.log(year)

        //d = d || new Date(); // If no date supplied, use today
        
      

        setDateUS(ddmmyyy);
        setTimeUS(hhmm);
        setDateTH(ddmmyyth);
        setUnixDate(unix);
        setQuarter(q);

    }, []);

    const formatDateDDMMYYUS = () => {
        // let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        // console.log(date.toLocaleDateString("en-US", options));
        const d = "2020-08-10T14:54:52+07:00";

        let date = new Date(d);
        let day = new Date(d).getDate();
        let month = new Date(d).getMonth()+1;
        let year = new Date(d).getFullYear();
        return `${day}/${month}/${year}`
    }

    const fomatTimeHHMMUS = () => {
        const d = "2020-08-10T14:54:52+07:00";
        let date = new Date(d);
        let time_us = date.toLocaleTimeString("en-GB").substr(0,5);
        return `${time_us}`
    };

    const formatDateDDMMYYTH = () => {
        // let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        // console.log(date.toLocaleDateString("en-US", options));
        const d = "2020-08-10T14:54:52+07:00";

        const date = new Date(d)
        // let day = new Date(d).getDate();
        // let month = new Date(d).getMonth()+1;
        // let year = new Date(d).getFullYear();
        // return `${day}/${month}/${year}`
        const result = date.toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        return result
    }

    const quarters = () => {
        const d = "2020-08-10T14:54:52+07:00";
        let date = new Date(d);
        let q = Math.floor((date.getMonth() + 3) / 3);
        return q
    };

    const fomatTimeHHMMTH = () => {
        const d = "2020-08-10T14:54:52+07:00";
        let date = new Date(d);
        let time_us = date.toLocaleTimeString("en-GB").substr(0,5);
        return `${time_us}`
    };

    const unixDates = () => {
        const d = "2020-08-10T14:54:52+07:00";
        let unix = Math.floor(new Date(d).getTime() / 1000)
        return unix
    };

    return (
        <div className="container">
            <div className="mx-auto w-25 bg-light p-3 rounded">
                <div># 2020-08-10T14:54:52+07:00 #</div>
                <div>{dateUS} {timeUS}</div>
                <div>{dateTH}</div>
                <div>{quarter}</div>
                <div>{unixDate}</div>
            </div>
        </div>
    )
}

export default Function2;
