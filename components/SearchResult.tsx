import React from 'react'
import {View,Text,FlatList,TouchableOpacity} from 'react-native'
import DictionaryContext from '../context/DictionaryContext';
export default function SearchResult(){
    let {dictionaryData,word}:any  = React.useContext(DictionaryContext)
    return(
        <View>
          <FlatList
            data={dictionaryData.slice(0, 4)}
            renderItem={(element) => {
              let { definition } = element.item;
              return (
                <View>
                  <TouchableOpacity>
                    <Text>
                      {word}: {definition}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
    )
}