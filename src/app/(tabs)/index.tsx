import HomeHeader from "@/components/home-header";
import MacroGrid from "@/components/macro-grid";
import RecentMeals from "@/components/recent-meals";
import { globalStyles } from "@/styles/global";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
      <HomeHeader />
      <MacroGrid />
      <RecentMeals />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  date: {
    fontSize: 14,
    color: "#a0a0b0",
    marginTop: 4,
    marginBottom: 30,
  },
});
