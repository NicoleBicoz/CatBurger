import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You have { this.props.all_subjects.current.length } subjects.</Text>
        <Button
          title="Select more subjects"
          onPress={() =>
            this.props.navigation.navigate('Subjects')
          }
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  const { subjects } = state
  return { subjects }
};

export default connect(mapStateToProps)(Home);