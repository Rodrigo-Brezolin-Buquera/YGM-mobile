import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
// import ClassCard from './ClassCard';
import { sortByTime, simplifyDate } from "../../../../utils/dates"
import { agendaStyles } from '../../agendaStyles';
import { styles } from './styles';

const DayColumn = ({ day, date, setSelected, yogaClasses }) => {
    const [classes, setClasses] = useState(null);

    useEffect(() => {
        setClasses(yogaClasses);
    }, [date, yogaClasses]);

    //   const classList = classes?.length
    //     ? sortByTime(classes).map((yogaClass) => (
    //         <ClassCard key={yogaClass.id} yogaClass={yogaClass} setSelected={setSelected} />
    //       ))
    //     : null;



    const ColumnHeader = ({ date, day }) => {
        return (
            <>
                <Text style={styles.heading}>
                    {simplifyDate(date)}
                </Text>
                <View
                    style={[agendaStyles.circularCard, agendaStyles.cianCard]}
                >
                    <Text style={styles.label}>{day}</Text>
                </View>
            </>

        )
    }
    // fazer memo!!

    return (
        <View
            style={{
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                padding: 10,
                minHeight: 250,
            }}
        >
            <ColumnHeader date={date} day={day} />

            {/* {classList} */}
        </View>
    );
};

export default DayColumn;
