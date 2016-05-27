import React from 'react'
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const computeSelectorStyle = (size) => ({
    borderWidth:1,
    width:size,
    height:size,
    borderRadius: size/2,
    margin:3,
    padding:(size/2)-1,
  })
const computeGrowingSelectorStyle = (size) =>({
  borderRadius:(size/2) - 2,
  flex:1,
})

export default (props)=>{
  const colors = props.colors
  let colorSelectorStyle = styles.colorSelectorItem
  let growingSelectorStyle = styles.growingSelector

  if(props.size && props.size != 20){
    colorSelectorStyle = computeSelectorStyle(props.size)
    growingSelectorStyle = computeGrowingSelectorStyle(props.size)
  }
    //TODO if given size prop, rebuild all styles with that size
  return(
        <View style={[styles.selectorHolder, props.holderStyle]}>
        {
          colors.map((color)=>{
            return (
              <TouchableWithoutFeedback key={`tp-color-${color}`} onPress={()=>props.onSelected(color)}>
                <View style={[colorSelectorStyle, props.selectorStyle, {borderColor:color}, color == props.selectedColor && styles.selected,]}>
                  <View
                    style={[growingSelectorStyle, {backgroundColor:color}]}
                  />
                </View>
              </TouchableWithoutFeedback>
            )
          })
        }
        </View>
  )
}

const styles = StyleSheet.create({
  selectorHolder:{
    flexDirection:'row',
    justifyContent: 'center',
    padding:20,
    borderBottomWidth:1,
    borderColor:'#dddddd',
  },
  colorSelectorItem:{
    borderWidth:1,
    width:40,
    height:40,
    borderRadius: 20,
    margin:3,
    padding:19,
  },
  selected:{
    padding:0
  },
  growingSelector:{
    borderRadius:18, flex:1,
  },
})
