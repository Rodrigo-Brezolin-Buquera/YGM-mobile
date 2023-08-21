import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { sortByTime, simplifyDate } from "../../../../utils/dates"
import { agendaStyles } from '../../agendaStyles';
import ClassesCard from '../ClassesCard';
import { styles } from './styles';

const DayColumn = ({ day, date, yogaClasses, navigation }) => {
    const [classes, setClasses] = useState(null);

    useEffect(() => {
        setClasses(yogaClasses);
    }, [date, yogaClasses]);

    const classList = classes?.length
        ? sortByTime(classes).map((yogaClass) => (
            <ClassesCard key={yogaClass.id} yogaClass={yogaClass} navigation={navigation} />
        ))
        : null;

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

    return (
        <View
            style={styles.columnContainer} >
            <ColumnHeader date={date} day={day} />

            {classList}
        </View>
    );
};

export default DayColumn;
