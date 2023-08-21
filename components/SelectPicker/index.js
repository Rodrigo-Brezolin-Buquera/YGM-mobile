import { Picker } from '@react-native-picker/picker';
import { View } from 'react-native';
import globalStyles from '../../globalStyles';

const SelectPicker = ({state, setState, list, placeholder}) => {

    const pickerList = list?.length && list.map(i => <Picker.Item label={i} value={i} key={i} />)

    return (
        <View  style={globalStyles.input} >
        <Picker
            selectedValue={state}
            onValueChange={(value, i) => setState(value)}
            >
             <Picker.Item label={placeholder} value={null} />

           {pickerList}
        </Picker>

        </View>
    )
}

export default SelectPicker