import { Meal } from "@/libs/storage";
import { globalStyles } from "@/styles/global";
import { Text, View } from "react-native";
import MealItem from "./meal-item";

export default function RecentMeals({ meals }: { meals: Meal[] }) {
  return (
    <View style={{ marginTop: 30 }}>
      <Text style={globalStyles.sectionTitle}>Recent Meals</Text>
      {!meals.length ? (
        <Text style={globalStyles.empty}>No meals logged yet.</Text>
      ) : (
        meals.slice(0, 5).map((item) => <MealItem key={item.id} {...item} />)
      )}
    </View>
  );
}
