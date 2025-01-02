import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
} from 'react-native';
import DateTimePicker, { DateType } from 'react-native-ui-datepicker';
import 'dayjs/locale/en';
import 'dayjs/locale/de';
import 'dayjs/locale/es';
import 'dayjs/locale/fr';
import 'dayjs/locale/tr';

export default function App() {

  const [date, setDate] = useState<DateType | undefined>();

  const percentChecked = (resolutions: any[], day: number) => {
    return resolutions[day]
  }

  const resolutions = [
    50, 100, 75, 23, 14, 67, 90, 13, 45, 34,
    50, 100, 75, 23, 14, 67, 90, 13, 45, 34,
    50, 100, 75, 23, 14, 67, 90, 13, 45, 34,
    50, 100, 75, 23, 14, 67, 90, 13, 45, 34,
  ]

  const resolutionUtilities = {'percentChecked': percentChecked}

  const onChange = 
    (params: { date: React.SetStateAction<DateType>; }) => {
      setDate(params.date);
    };

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.datePickerContainer}>
          <View style={styles.datePicker}>
            <DateTimePicker
              mode={'single'}
              date={date}
              resolutions={resolutions}
              resolutionUtilities={resolutionUtilities}
              onChange={onChange}
            />
          </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  body: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
  },
  titleContainer: {
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 20,
    width: '100%',
  },
  title: { fontSize: 18, fontWeight: 'bold' },
  modesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 20,
  },
  modeSelect: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  modeSelectText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  datePickerContainer: {
    alignItems: 'center',
  },
  datePicker: {
    width: 330,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    shadowRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 0 },
  },
  footer: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginTop: 15,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  todayButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  todayButtonText: {
    fontWeight: 'bold',
  },
});
