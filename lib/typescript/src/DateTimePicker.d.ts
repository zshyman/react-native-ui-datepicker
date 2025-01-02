import React from 'react';
import type { DateType, DatePickerBaseProps, CalendarThemeProps, HeaderProps, SingleChange, RangeChange, MultiChange } from './types';
export interface DatePickerSingleProps extends CalendarThemeProps, HeaderProps, DatePickerBaseProps {
    mode: 'single';
    date?: DateType;
    onChange?: SingleChange;
    resolutions?: any[];
    resolutionUtilities?: any;
}
export interface DatePickerRangeProps extends CalendarThemeProps, HeaderProps, DatePickerBaseProps {
    mode: 'range';
    startDate?: DateType;
    endDate?: DateType;
    onChange?: RangeChange;
    resolutions?: any[];
    resolutionUtilities?: any;
}
export interface DatePickeMultipleProps extends CalendarThemeProps, HeaderProps, DatePickerBaseProps {
    mode: 'multiple';
    dates?: DateType[];
    onChange?: MultiChange;
    resolutions?: any[];
    resolutionUtilities?: any;
}
declare const _default: React.MemoExoticComponent<(props: DatePickerSingleProps | DatePickerRangeProps | DatePickeMultipleProps) => React.JSX.Element>;
export default _default;
//# sourceMappingURL=DateTimePicker.d.ts.map