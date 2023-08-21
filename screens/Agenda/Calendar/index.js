import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import globalStyles from '../../../globalStyles';
import { mockClasses } from '../../../mockData';
import { getSundayOfCurrentWeek, getDatesOfWeek } from '../../../utils/dates';
import DayColumn from './DayColumn';
import { styles } from './styles';

const Calendar = ({ setSelected, loading }) => {
    const [sunday, setSunday] = useState(getSundayOfCurrentWeek());
    const [datesOfWeek, setDatesOfWeek] = useState(getDatesOfWeek(sunday));
    const [yogaClasses, setYogaClasses] = useState(mockClasses);

    const handleNextWeekClick = useCallback(() => {
        const nextSunday = new Date(sunday.getTime() + 7 * 24 * 3600 * 1000);
        setSunday(nextSunday);
        setDatesOfWeek(getDatesOfWeek(nextSunday));
    }, [sunday]);

    const handlePreviousWeekClick = useCallback(() => {
        const previousSunday = new Date(sunday.getTime() - 7 * 24 * 3600 * 1000);
        setSunday(previousSunday);
        setDatesOfWeek(getDatesOfWeek(previousSunday));
    }, [sunday]);

    const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    const renderItem = ({ item }) => (
        <DayColumn
            date={item.date}
            yogaClasses={item.classes}
            day={item.day}
            setSelected={setSelected}
        />
    );

    const flatListData = daysOfWeek.map((day, i) => ({
        key: day,
        date: datesOfWeek[i],
        classes: yogaClasses?.length ? yogaClasses.filter((a) => a.day === day) : [],
        day,
    }));


    return (
        <GestureHandlerRootView>
            <View style={globalStyles.buttonContainer}  >
                <TouchableOpacity
                    style={globalStyles.button}
                    onPress={handlePreviousWeekClick}
                >
                    <Text style={globalStyles.buttonText}>Anterior</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={globalStyles.button}
                    onPress={handleNextWeekClick}
                >
                    <Text style={globalStyles.buttonText}>Próxima</Text>
                </TouchableOpacity>
            </View>


            <FlatList
                data={flatListData}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
                horizontal={true}
                contentContainerStyle={styles.calendarContainer}
            /> 
        </GestureHandlerRootView>
    );
};

export default Calendar;
