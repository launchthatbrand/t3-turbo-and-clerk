import { Text, H5, P } from "../../../design/typography";
import { View } from "../../../design/view";
import { Button } from "../../../design/button";
import { Row } from "../../../design/layout";
import PropTypes from "prop-types";

export function CardStats(props: CardStatsProps): JSX.Element {
  return (
    <View className="relative mb-6 flex min-w-0 flex-col break-words rounded bg-white shadow-lg xl:mb-0">
      <View className="flex-auto p-4">
        <View className="flex flex-row flex-wrap">
          <View className="relative max-w-full flex-grow pr-4">
            <Text className="text-blueGray-400 text-xs font-bold uppercase">
              {props.statSubtitle}
            </Text>
            <Text className="text-blueGray-700 text-xl font-semibold">
              {props.statTitle}
            </Text>
          </View>
          <View className="relative w-auto flex-initial pl-4">
            <View
              className={
                "inline-flex h-12 w-12 items-center justify-center rounded-full p-3 text-center text-white shadow-lg " +
                props.statIconColor
              }
            >
              {/* <i className={statIconName}></i> */}
            </View>
          </View>
        </View>
        <Text className="text-blueGray-400 mt-4 text-sm">
          <Text className={props.statPercentColor + " mr-2"}>
            {/*             <i
              className={
                statArrow === "up"
                  ? "fas fa-arrow-up"
                  : statArrow === "down"
                  ? "fas fa-arrow-down"
                  : ""
              }
            ></i>{" "} */}
            {props.statPercent}%
          </Text>
          <View className="whitespace-nowrap">
            <Text>{props.statDescripiron}</Text>
          </View>
        </Text>
      </View>
    </View>
  );
}

interface CardStatsProps {
  statSubtitle: string;
  statTitle: string;
  statArrow: "up" | "down";
  statPercent: string;
  // can be any of the text color utilities
  // from tailwindcss
  statPercentColor: string;
  statDescripiron: string;
  statIconName: string;
  // can be any of the background color utilities
  // from tailwindcss
  statIconColor: string;
}

CardStats.defaultProps = {
  statSubtitle: "Traffic",
  statTitle: "350,897",
  statArrow: "up",
  statPercent: "3.48",
  statPercentColor: "text-emerald-500",
  statDescripiron: "Since last month",
  statIconName: "far fa-chart-bar",
  statIconColor: "bg-red-500",
};

CardStats.propTypes = {
  statSubtitle: PropTypes.string,
  statTitle: PropTypes.string,
  statArrow: PropTypes.oneOf(["up", "down"]),
  statPercent: PropTypes.string,
  // can be any of the text color utilities
  // from tailwindcss
  statPercentColor: PropTypes.string,
  statDescripiron: PropTypes.string,
  statIconName: PropTypes.string,
  // can be any of the background color utilities
  // from tailwindcss
  statIconColor: PropTypes.string,
};
