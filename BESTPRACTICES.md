# Best Practices

### - Avoiding the `.bind(this)`

Instead of using any `autobind` library simply declare functions as:

    goHome = () => {
      console.log("home");
    };

### - Use PureComponent or shouldComponentUpdate

### - Avoid creating functions in `render` method

### - Don’t update state or dispatch actions in componentWillUpdate

## Resources

* https://codeburst.io/6-simple-ways-to-speed-up-your-react-native-app-d5b775ab3f16
* https://medium.com/komenco/react-autobinding-2261a1092849
