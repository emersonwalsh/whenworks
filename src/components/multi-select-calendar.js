import React from 'react';
import InfiniteCalendar, {
    Calendar,
    defaultMultipleDateInterpolation,
    withMultipleDates
} from 'react-infinite-calendar';
import { getCalendarWidth, getCalendarHeight } from './../util';


export default function MultiSelectCalendar(props) {
    const today = new Date();
    const minDateRange = props.minDate || today;
    // const maxDateRange = props.maxDate || new Date();

    const minYear = minDateRange.getFullYear();
    const minMonth = minDateRange.getMonth() - 1;
    const minMonthDate = new Date(minYear, minMonth, 1);

    // todo update calendar header text to say "Select unavailable days"
    
	return (
        <InfiniteCalendar
            Component={withMultipleDates(Calendar)}
            selected={[]}
            onSelect={props.addDate}
            interpolateSelection={defaultMultipleDateInterpolation}
            width={getCalendarWidth()}
            height={getCalendarHeight()}
            minDate={minDateRange} // Minimum selectable date
            min={minMonthDate} // Minimum month to render
        />
    );
}
