import HomeHeader from "@/components/home-header";
import MacroGrid from "@/components/macro-grid";
import RecentMeals from "@/components/recent-meals";
import { getMeals, Meal } from "@/libs/storage";
import { globalStyles } from "@/styles/global";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  const [meals, setMeals] = useState<Meal[]>([]);

  const loadMeal = async () => {
    const data = await getMeals();
    setMeals(data);
  };
  useFocusEffect(
    useCallback(() => {
      loadMeal();
    }, []),
  );

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
      <HomeHeader />
      <MacroGrid meals={meals} />
      <RecentMeals meals={meals} onDelete={loadMeal} />
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
