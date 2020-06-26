import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import TopBar from './../top-bar';
import MultiSelectCalendar from './../multi-select-calendar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { formatDate } from './../../util';

const CalendarContainer = styled.div`
    padding: 20px 0;
`;

export default function Respond(props) {
    let history = useHistory();
    let { id } = useParams();
    let participantName = '';
    const selectedDates = [];

    const updateSelection = (date) => {
        const newDate = formatDate(date);
        const newDateIdx = selectedDates.indexOf(newDate);
        debugger
        if (newDateIdx === -1) {
            selectedDates.push(newDate); 
        } else {
            selectedDates.splice(newDateIdx, 1);
        }
    }

    const handleParticipantNameChange = event => {
        participantName = event.target.value;
    }

    const submitResponse = () => {
        history.push('/results/' + id);

        console.log('Add user entry to trip in DB', {
            participantName: participantName,
            tripId: id,
            selected: selectedDates
        })

        // TODO find trip from database and add response to that trip in dB
        // {
        //     name: ''
        //     dates: [
        //         '12/12/20': true,
        //         '12/13/20': false,
        //         '12/14/20': false,
        //         '12/15/20': true,
        //         '12/16/20': true,
        //     ]
        // }
    }

    // todo add trip name
    // todo on load get trip date range
    // todo pass in minDate and maxDate to MultiSelectCalendar as props

    return (
        <header className="app-content">
            <TopBar /> 
            <TextField
                id="participant-name"
                label="Your Name"
                onChange={handleParticipantNameChange} 
                variant="outlined"
                color="primary" />

            <CalendarContainer>
                <MultiSelectCalendar
                    addDate={updateSelection} 
                />
            </CalendarContainer>

            <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={submitResponse}
            // onClick={() => history.push('/respond')}
            >
                Submit
            </Button>
        </header>
    );
}
