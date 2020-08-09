import React, { Component } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { CustomControlTab } from "../../custom/CustomControlTab";
import { Sizes } from "@dungdang/react-native-basic";
import DanhSachLopHoc from "./DanhSachLopHoc";
import DanhSachLopHocPhan from "./DanhSachLopHocPhan";

class TuyChonLop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, width: "100%" }}>
          <CustomControlTab
            titleLeft={"Lớp học"}
            titleRight={"Lớp học phần"}
            backgroundColorLeft={
              this.state.selectedIndex === 0 ? "#FFF" : "#E1E1E1"
            }
            backgroundColorRight={
              this.state.selectedIndex === 1 ? "#FFF" : "#E1E1E1"
            }
            colorLeft={this.state.selectedIndex === 0 ? "#3333FF" : "#717171"}
            colorRight={this.state.selectedIndex === 1 ? "#3333FF" : "#717171"}
            onPressLeft={(value) => {
              this.setState({
                selectedIndex: value,
              });
            }}
            onPressRight={(value) => {
              this.setState({
                selectedIndex: value,
              });
            }}
          />
          <View style={{ flex: 1 }}>
            {this.state.selectedIndex === 0 ? (
              <DanhSachLopHoc />
            ) : (
              <DanhSachLopHocPhan />
            )}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});

export default TuyChonLop;