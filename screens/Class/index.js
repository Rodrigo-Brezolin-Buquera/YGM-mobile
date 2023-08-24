import {useState} from 'react'
import { Text, View } from 'react-native'
import globalStyles from '../../globalStyles'
import {mockClasses} from "../../mockData"
import ClassDetails from './ClassDetails'

const Class = () => {
  const [yogaClass, setYogaClass] = useState(mockClasses[0])
  return (
      <View style={globalStyles.container} >
          <ClassDetails yogaClass={yogaClass}/>

      </View>
  )
}

export default Class