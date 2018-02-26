import * as React from 'react';
import { View, Image } from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';

interface IRadioGroupItem {
  value: any;
  text: string;
  unselectedImageUrl: any;
  selectedImageUrl: any;
}

interface props {
  radios: Array<RadioGroup>;
  activeColor?: string;
}

interface state {
  radios: Array<RadioGroup>;
  styles: any;
  selectedIndex?: number;
}

class RadioGroupItem implements IRadioGroupItem {
  constructor(
    public value: any,
    public text: string,
    public selectedImageUrl: any,
    public unselectedImageUrl: any
  ) {}
}

class TqanzRadioImageButton extends React.Component<props, state> {
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
  onSelect(index) {
    this.setState({
      selectedIndex: index
    });
  }

  protected isActive(index) {
    const { selectedIndex } = this.state;
    return index === selectedIndex;
  }

  protected renderGroup = (a: Array<RadioGroupItem>) => {
    if (a === undefined) a = new Array<RadioGroupItem>();

    return a.map((info, index) => (
      <RadioButton
        key={info.value}
        value={info.value}
        style={this.state.styles.radio_button}
        activeColor={this.props.activeColor}
        color={this.props.activeColor}
      >
        {this.isActive(index) ? (
          <Image
            style={this.state.styles.radio_image}
            source={info.selectedImageUrl}
          />
        ) : (
          <Image
            style={this.state.styles.radio_image}
            source={info.unselectedImageUrl}
          />
        )}
      </RadioButton>
    ));
  };

  render() {
    const styles = this.state.styles;
    return (
      <View>
        <RadioGroup
          onSelect={index => this.onSelect(index)}
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
  radio_button: {},
  radio_image: {
    width: 100,
    height: 100
  }
};

export default TqanzRadioImageButton;
