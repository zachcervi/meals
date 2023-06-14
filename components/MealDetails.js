import { StyleSheet, Text, View } from "react-native";
function MealDetails({ affordability, complexity, duration, style, textStyle }) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    fontSize: 12,
    marginHorizontal: 4,
  },
});

export default MealDetails;
