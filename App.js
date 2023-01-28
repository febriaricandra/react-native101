import React from 'react'
import { SectionList, StyleSheet, Text } from 'react-native'

const sections = [
  {
    id: '0',
    title: 'Basic Components',
    data: [
      { id: '0', text: 'Febriari' },
      { id: '1', text: 'Candra' },
      { id: '2', text: 'Tutorial' },
    ],
  },
  {
    id: '1',
    title: 'List Components',
    data: [
      { id: '3', text: 'React-Native' },
      { id: '4', text: 'Tutorial By Febriari' },
    ],
  },
]

export default function App() {
  return (
    <SectionList
      style={styles.container}
      sections={sections}
      renderItem={({ item }) => <Text style={styles.row}>{item.text}</Text>}
      renderSectionHeader={({ section }) => (
        <Text style={styles.header}>{section.title}</Text>
      )}
      keyExtractor={(item) => item.id}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
  header: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'steelblue',
    color: 'white',
    fontWeight: 'bold',
  },
})