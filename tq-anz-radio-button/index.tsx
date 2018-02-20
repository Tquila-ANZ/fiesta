import * as React from 'react';
import { View, Text } from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';

interface IRadioGroupItem {
  value: any;
  text: string;
}

interface props {
  radios: Array<RadioGroup>;
}

interface state {
  radios: Array<RadioGroup>;
  styles: any;
}

class RadioGroupItem implements IRadioGroupItem {
  constructor(public value: any, public text: string) {}
}

class TqanzRadioButton extends React.Component<props, state> {
  constructor(props) {
    super(props);

    this.state = {
      radios: props.radios,
      styles: {
        ...defaultStyles,
        ...props.styles
      }
    };
  }
  onSelect(index, value) {
    console.log(index);
    console.log(value);
    // this.setState({
    //     text: `Selected index: ${index} , value: ${value}`
    // })
  }

  protected renderGroup = (a: Array<RadioGroupItem>) => {
    if (a === undefined) a = new Array<RadioGroupItem>();

    // FOR TESTING
    // a.push(new RadioGroupItem(1, "Single"));
    // a.push(new RadioGroupItem(1, "Double"));

    return a.map(info => (
      <RadioButton
        key={info.value}
        value={info.value}
        style={this.state.styles.radio_button}
      >
        <Text key={info.text} style={this.state.styles.radio_text}>
          {info.text}
        </Text>
      </RadioButton>
    ));
  };

  render() {
    const styles = this.state.styles;
    return (
      <View>
        <RadioGroup
          onSelect={(index, value) => this.onSelect(index, value)}
          style={styles.radio_group}
        >
          {this.renderGroup(this.props.radios)}
        </RadioGroup>
      </View>
    );
  }
}

const defaultStyles = {
  radio_text: {},
  radio_group: {},
  radio_button: {}
};

export default TqanzRadioButton;
