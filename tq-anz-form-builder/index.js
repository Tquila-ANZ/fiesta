import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class TqanzFormBuilder extends React.Component {
  render() {
    const { rowData } = this.props;
    switch (rowData.component.name) {
      case "date":
        return !rowData.isHidden ? (
          <View key={rowData.api}>
            <FormDatePicker
              label={rowData.label}
              subLabel={rowData.subLabel}
              value={rowData.value}
              editable={rowData.isEditable}
              stacked={!rowData.stacked}
              required={!!rowData.required}
              onChange={value => this.onChange(rowData, value)}
            />
          </View>
        ) : null;
      case "text":
        return !rowData.isHidden ? (
          <View key={rowData.api}>
            <FormText
              label={rowData.label}
              subLabel={rowData.subLabel}
              value={rowData.value}
              editable={rowData.isEditable}
              stacked
              required={!!rowData.required}
              maxLength={rowData.component.maxLength}
              onChangeText={value => this.onChangeText(value, rowData)}
            />
          </View>
        ) : null;
      case "number":
        return !rowData.isHidden ? (
          <View key={rowData.api}>
            <FormText
              label={rowData.label}
              subLabel={rowData.subLabel}
              value={rowData.value && rowData.value.toString()}
              keyboardType="numeric"
              editable={rowData.isEditable}
              stacked
              required={!!rowData.required}
              onChangeText={value => this.onChangeText(value, rowData)}
            />
          </View>
        ) : null;
      case "textarea":
        return !rowData.isHidden ? (
          <View key={rowData.api}>
            <FormTextarea
              label={rowData.label}
              subLabel={rowData.subLabel}
              value={rowData.value}
              editable={rowData.isEditable}
              stacked
              required={!!rowData.required}
              maxLength={rowData.component.maxLength}
              defaultHeight={rowData.component.defaultHeight}
              onChangeText={value => this.onChangeText(value, rowData)}
            />
          </View>
        ) : null;
      case "radioButton":
        return !rowData.isHidden ? (
          <View key={rowData.api}>
            <FormRadioButton
              label={rowData.label}
              subLabel={rowData.subLabel}
              options={rowData.picklistValues}
              selectedOption={rowData.value}
              onSelection={value => this.onChange(rowData, value)}
              stacked
            />
          </View>
        ) : null;
      case "checkboxGroup":
        return !rowData.isHidden ? (
          <View key={rowData.api}>
            <FormCheckboxGroup
              label={rowData.label}
              subLabel={rowData.subLabel}
              options={rowData.picklistValues}
              checked={rowData.value ? rowData.value.split(";") : null}
              onSelect={values => this.onMultiSelect(rowData, values)}
              stacked
            />
          </View>
        ) : null;
      case "segmentedControl":
        return !rowData.isHidden ? (
          <View key={rowData.api}>
            <FormSegmentedControl
              direction={rowData.component.direction}
              label={rowData.label}
              subLabel={rowData.subLabel}
              options={rowData.picklistValues}
              selectedOption={rowData.value}
              onSelection={value => this.onChange(rowData, value)}
              stacked
            />
          </View>
        ) : null;
      default:
        return null;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
