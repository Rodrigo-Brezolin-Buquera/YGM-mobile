import { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import globalStyles from '../../globalStyles'
import { mockClasses } from "../../mockData"
import CheckinList from './CheckinList'
import ClassDetails from './ClassDetails'

const Class = () => {
  const [yogaClass, setYogaClass] = useState(mockClasses[0])

  return (
    <View style={globalStyles.container} >

    
      <ClassDetails yogaClass={yogaClass} />
      <CheckinList />
      <View style={globalStyles.buttonContainer}>

        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => { }}
        >
          <Text style={globalStyles.buttonText}>Excluir aula</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={globalStyles.button}
        >
          <Text style={globalStyles.buttonText}>Remover horário</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Class