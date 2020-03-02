import React, { Component, useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Switch,
  Picker,
  ActivityIndicator
} from 'react-native';
import { TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { GetTypes } from '../services/schedules';

const Scheduler = props => {
  const [date, setDate] = useState(
    props.item.time ? new Date(props.item.time) : new Date()
  );
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [type, setType] = useState(props.item.type);
  const [types, setTypes] = useState([]);
  const [loaded, setLoaded] = useState(false); // for toggling loader
  let isLoaded = false; // for toggling Mount, unmount in UseEffect

  useEffect(() => {
    if (!isLoaded)
      GetTypes()
        .then(res => {
          console.log('res', res);
          setTypes(res);
          setLoaded(true);
          isLoaded = true;
        })
        .catch(err => console.log(err));
    return () => {
      isLoaded = false;
    };
  }, [isLoaded]);

  const onChange = (event, selectedValue) => {
    setShow(Platform.OS === 'ios');
    if (mode == 'date') {
      const currentDate = selectedValue || new Date();
      setDate(currentDate);
      setMode('time');
      setShow(Platform.OS !== 'ios');
    } else {
      const selectedTime = selectedValue || new Date();
      let selectedDateTime = date;
      selectedDateTime.setHours(selectedTime.getHours());
      selectedDateTime.setMinutes(selectedTime.getMinutes());
      setDate(selectedDateTime);
      setShow(Platform.OS === 'ios');
      console.log('time', date);
      props.onSchUpdate({ time: date });
      setMode('date');
    }
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatePicker = () => {
    showMode('date');
  };

  return !loaded ? (
    <ActivityIndicator size='large' color='#ffa500' />
  ) : (
    <View style={styles.scheduler}>
      <View>
        <TextInput
          style={styles.textInput}
          onChangeText={text => props.onSchUpdate({ title: text })}
          placeholder='Title'
          value={props.item.title}
        />
        <TextInput
          onChangeText={text => props.onSchUpdate({ desc: text })}
          style={styles.textArea}
          multiline
          numberOfLines={4}
          editable
          placeholder='Description'
          value={props.item.desc}
        />
        <TouchableOpacity onPress={showDatePicker}>
          <Text style={styles.title}>{formatDate(date)}</Text>
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            value={date}
            minimumDate={Date.parse(new Date())}
            display='default'
            mode={mode}
            onChange={onChange}
          />
        )}
        <View
          style={(styles.title, { flexDirection: 'row', alignItems: 'center' })}
        >
          <Text style={styles.title}>Online</Text>
          <Switch
            style={{
              marginLeft: 50,
              width: 100,
              height: 10,
              transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }]
            }}
            thumbColor='white'
            trackColor={{ false: 'red', true: 'green' }}
            value={props.item.online}
            onValueChange={val => props.onSchUpdate({ online: val })}
          />
        </View>
        <Picker
          style={styles.picker}
          selectedValue={type || props.item.type}
          onValueChange={val => {
            setType(val);
            props.onSchUpdate({ type: val });
          }}
        >
          {types
            ? types.map(v => <Picker.Item key={v} label={v} value={v} />)
            : ''}
        </Picker>
      </View>
    </View>
  );
};

const formatDate = date => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date
    .getHours()
    .toString()
    .padStart(2, 0)}:${date
    .getMinutes()
    .toString()
    .padStart(2, 0)}`;
};

const borderRadius = {
  borderRadius: 5
};

const styles = StyleSheet.create({
  scheduler: {
    padding: 20
  },
  textArea: {
    ...borderRadius,
    textAlignVertical: 'top',
    margin: 20,
    fontSize: 20,
    borderStyle: 'solid',
    borderColor: 'black',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 30,
    color: 'white',
    padding: 20
  },
  picker: {
    ...borderRadius,
    backgroundColor: 'orange',
    width: 150,
    margin: 20
  },
  textInput: {
    ...borderRadius,
    color: 'black',
    backgroundColor: 'white',
    margin: 20,
    fontSize: 30,
    height: 60
  }
});

export default Scheduler;
