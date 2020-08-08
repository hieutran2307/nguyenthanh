import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { PieChart } from 'react-native-svg-charts'
import { Circle, G, Line, Mask, Rect, Svg } from 'react-native-svg'

class CustomPieChart extends React.PureComponent {

  render() {

    const data = [
      {
        title: "Trước hạn: ",
        value: 10099,
        color: "#42BE5C",
      },
      {
        title: "Đúng hạn: ",
        value: 2268,
        color: "#1DB2CD",
      },
      {
        title: "Trễ hạn:     ",
        value: 6837,
        color: "#FF7342",
      },
      {
        title: "Còn hạn:   ",
        value: 6196,
        color: "#EF9100",
      },
      {
        title: "Quá hạn:   ",
        value: 1266,
        color: "#4560CA",
      },
    ];
    const totalValues = data.reduce((total, data) => { return total += data.value }, 0)
    const pieData = data
      .filter(data => data.value > 0)
      .map((data, index) => ({
        value: data.value,
        svg: { fill: data.color },
        key: `pie-${index}`,
      }))
    //console.log(data.filter(data => data.value > 0))

    return (
      <View style={{ backgroundColor: '#fff', flex: 1, marginTop: 40 }}>
        <View style={{ height: 40, width: '100%', backgroundColor: '#2E68C3', alignContent: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, margin: 5, color: "#fff" }} >
            THỐNG KÊ CHI TIẾT
          </Text>

        </View>
        <PieChart
          style={{ height: 250 }}
          data={pieData}
          innerRadius={1}
          outerRadius={100}
          padAngle={0.01}
        />
        <FlatList style={{ flex: 1, marginLeft: 50 }}
          data={data}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <ItemFlatlist
              title={item.title}
              itemColor={item.color}
              total={totalValues}
              value={item.value}
            />
          )}
        />
      </View>

    )
  }
}
class ItemFlatlist extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { title, itemColor, value, total } = this.props;
    return (
      <View style={{ flex: 1, flexDirection: 'row', }}>
        <View style={{ height: 20, borderRadius: 10, width: 20, margin: 10, backgroundColor: `${itemColor}` }} />
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 20, margin: 5 }} >
            {title}</Text>
          <Text style={{ fontSize: 20, color: '#144DB6', fontWeight: 'bold', margin: 5 }} >{value}</Text>
          <Text style={{ fontSize: 20, margin: 5 }} >/{total}</Text>

        </View>
      </View>
    )
  }
}
export default CustomPieChart