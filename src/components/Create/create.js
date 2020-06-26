import React from 'react';
import { useHistory } from 'react-router-dom';
import TopBar from './../top-bar';
import RangeCalendar from './../range-calendar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { formatDate } from './../../util';

const CalendarContainer = styled.div`
    padding: 20px 0;
`;

export default function Create(props) {
    const history = useHistory();
    let tripName = '';
    
    // set initial range (today + 2 weeks)
    const today = new Date();
    const endDate = new Date();
    endDate.setDate(today.getDate() + 14);

    let range = {
        start: formatDate(today),
        end: formatDate(endDate)
    };

    const setSelection = (newRange) => {
        const startDate = newRange.start < newRange.end ? newRange.start : newRange.end;
        const endDate = newRange.start < newRange.end ? newRange.end : newRange.start;
        range = {
            start: formatDate(startDate),
            end: formatDate(endDate)
        }
    }

    const handleTripNameChange = event => {
        tripName = event.target.value;
    }

    const generateTrip = () => {
        const tripId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        history.push('/respond/' + tripId);

        console.log('Create new trip in DB', {
            tripName: tripName,
            tripId: tripId,
            range: range
        })

        // TODO add to database
        // {
        //     trip: ''
        //     tripId: ''
        //     dates: [
        //         '12/12/20': 0, (number of unavailabe responses)
        //         '12/13/20': 0,
        //         '12/14/20': 0,
        //         '12/15/20': 0,
        //         '12/16/20': 0,
        //     ]
        // }
    }

    return (
        <header className="app-content">
            <TopBar />
            <TextField 
                id="trip-name" 
                label="Trip Name"
                onChange={handleTripNameChange} 
                variant="outlined" 
                color="primary"
            />
            <CalendarContainer>
                <RangeCalendar
                    setRange={setSelection} 
                    startDate={range.start}
                    endDate={range.end}
                />
            </CalendarContainer>
            <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={generateTrip}
            >
                Create
            </Button>
        </header>
    );
}
