import { useState } from "react";
import { AnimatePresence, Button, Input, Text, View, YStack } from "tamagui";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { Platform } from "react-native";
import { ChevronLeft, ChevronRight } from "@tamagui/lucide-icons";

export default function HomeScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleView = () => {
    setIsVisible(!isVisible);
    const newValue = isVisible ? 100 : 0;
  };
  const [date, setDate] = useState<Date>(new Date());
  const [mode, setMode] = useState<"date" | "time">("date");
  const [show, setShow] = useState<boolean>(false);
  const onChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date | undefined
  ) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };
  const showMode = (currentMode: "date" | "time") => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor={"lightblue"}
    >
      <YStack
        position="absolute"
        bottom={0}
        width="100%"
        height={"40%"}
        backgroundColor="#ffffff"
        borderTopLeftRadius={"10%"}
        borderTopRightRadius={"10%"}
        paddingTop={"10%"}
        paddingLeft={12}
        paddingRight={12}
      >
        <YStack gap={12}>
          <Text fontSize={20} fontWeight={"bold"}>
            Set Your Route
          </Text>
          <View flexDirection="column" gap={4}>
            <Text flexShrink={1} fontWeight={"bold"}>
              Select a Date&Time
            </Text>
            <View display="flex" flexDirection="row">
              <Button onPress={() => showMode("date")} height={32}>
                <Text>{date.toDateString()}</Text>
              </Button>
              <Button onPress={() => showMode("time")} height={32}>
                <Text>{date.toLocaleTimeString()}</Text>
              </Button>
            </View>
          </View>
          <View flexDirection="column" gap={4}>
            <Text flexShrink={1} fontWeight={"bold"}>
              Starting Point
            </Text>
          </View>
          <View flexDirection="column" gap={4}>
            <Text flexShrink={1} fontWeight={"bold"}>
              Ending Point
            </Text>
          </View>
          <View flexDirection="column" gap={4}>
            <Text flexShrink={1} fontWeight={"bold"}>
              Available Seats
            </Text>
            <View
              flexDirection="row"
              display="flex"
              width={64}
              alignItems="center"
            >
              <Button
                icon={<ChevronLeft size={"$1"} />}
                flexShrink={1}
                width={4}
              ></Button>
              <View
                backgroundColor={"#eee"}
                width={"$3"}
                height={"$3"}
                borderRadius={10}
                justifyContent="center"
                alignItems="center"
                alignContent="center"
              >
                <Text>{1}</Text>
              </View>
              <Button
                icon={<ChevronRight size={"$1"} />}
                flexShrink={1}
                width={4}
              ></Button>
            </View>
          </View>
        </YStack>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <Button
          position="absolute"
          bottom={0}
          right={0}
          margin={9}
          borderColor={"black"}
          borderWidth={2}
        >
          <Text fontWeight="bold">Confirm</Text>
        </Button>
      </YStack>
    </YStack>
  );
}
