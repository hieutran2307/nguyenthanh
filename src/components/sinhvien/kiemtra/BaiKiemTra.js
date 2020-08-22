import React from "react";
import {
  Button,
  Image,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  TextInput,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { Sizes } from "@dungdang/react-native-basic";
import Headers from "../../custom/Headers";
import Icon from "react-native-vector-icons/FontAwesome5";
import { userProfile, API_PUBLIC } from "../../../config/settings";
import UserAvatar from "react-native-user-avatar";
import { CheckBox, SearchBar } from "react-native-elements";
import MultiSelect from "react-native-multiple-select";
import { arrayIsEmpty } from "@dungdang/react-native-basic/src/Functions";

export default class BaiKiemTra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      makiemtra: this.props.navigation.getParam("makiemtra"),
      idkiemtra: this.props.navigation.getParam("idkiemtra"),
      thongtibaikiemtra: [],
      danhsachcauhoi: '',
      dapan: "",
      diemso: 0,
      checkeda: [],
      checkedb: [],
      checkedc: [],
      checkedd: [],
      idcauhoi: "",
      point: 0,
      vitri: 0,
      minutes: 0,
      seconds: 0,
      time: 10,
      // time: this.state.thongtibaikiemtra.thoigian,
      startedTime: false,
      ischeckdisplay: true,
    };
  }
  timeOut() {
    this.setState({
        minutes: this.state.time
    })
    setInterval(() => {
        if (this.state.startedTime === true) {
            if (this.state.minutes >= 0) {
                if (this.state.seconds > 0) {
                    this.setState({
                        seconds: this.state.seconds - 1,
                    })
                } else {
                    this.setState({ minutes: this.state.minutes - 1, }),
                        this.setState({ seconds: 59, })
                }
            } else if (this.state.minutes < 0) {
                this.setState({ ischeckdisplay: true, startedTime: false})
                this.nopbai()
            }
        }
    }, 1000);
}

checkDisplay() {
  this.setState({ ischeckdisplay: !this.state.ischeckdisplay }),
      this.setState({ minutes: 0, seconds: 0 })
}

  checkItemketquaa = (danhsachcauhoi) => {
    const { checkeda } = this.state;

    if (!checkeda.includes(danhsachcauhoi)) {
      this.setState({
        checkeda: [...checkeda, danhsachcauhoi],
        idcauhoi: danhsachcauhoi,
        dapanhchona: dapanhchona,
        ketquaa: ketquaa,
      });
    } else if (this.state.dapanhchona === this.state.ketquaa) {
      this.setState({
        point: this.state.point + 2,
      });
    } else {
      this.setState({ checkeda: checkeda.filter((a) => a !== danhsachcauhoi) });
    }
  };

  checkItemketquab = (danhsachcauhoi) => {
    const { checkedb } = this.state;

    if (!checkedb.includes(danhsachcauhoi)) {
      this.setState({
        checkedb: [...checkedb, danhsachcauhoi],
        idcauhoi: danhsachcauhoi,
        dapanhchonb: dapanhchonb,
        ketquab: ketquab,
      });
    } else if (this.state.dapanhchonb === this.state.ketquab) {
      this.setState({
        point: this.state.point + 2,
      });
    } else {
      this.setState({ checkedb: checkedb.filter((a) => a !== danhsachcauhoi) });
    }
  };
  checkItemketquac = (danhsachcauhoi) => {
    const { checkedc } = this.state;

    if (!checkedc.includes(danhsachcauhoi)) {
      this.setState({
        checkedc: [...checkedc, danhsachcauhoi],
        idcauhoi: danhsachcauhoi,
        dapanhchonc: dapanhchonc,
        ketquac: ketquac,
      });
    } else if (this.state.dapanhchonc === this.state.ketquac) {
      this.setState({
        point: this.state.point + 2,
      });
    } else {
      this.setState({ checkedc: checkedc.filter((a) => a !== danhsachcauhoi) });
    }
  };
  checkItemketquad = (danhsachcauhoi) => {
    const { checkedd } = this.state;

    if (!checkedd.includes(danhsachcauhoi)) {
      this.setState({
        checkedd: [...checkedd, danhsachcauhoi],
        idcauhoi: danhsachcauhoi,
        dapanhchond: dapanhchond,
        ketquad: ketquad,
      });
    } else if (this.state.dapanhchond === this.state.ketquad) {
      this.setState({
        point: this.state.point + 2,
      });
    } else {
      this.setState({
        checkedd: checkedd.filter((a) => a !== danhsachcauhoi),
      });
    }
  };

  renderItem = () => {
    const { danhsachcauhoi, vitri } = this.state;
    let listQuestion = [];
    if (!arrayIsEmpty(danhsachcauhoi)) {
      vitri < danhsachcauhoi.length;
      listQuestion.push(
        <View
          style={{
            flex: 1,
            width: "100%",
          }}
        >
          <View
            style={{
              backgroundColor: "#CCE5FF",
              marginVertical: Sizes.s30,
              marginHorizontal: Sizes.s15,
              padding: Sizes.s30,
              borderRadius: Sizes.s10,
            }}
          >
            <Text style={{ fontSize: Sizes.h40 }}>Câu hỏi {vitri + 1}</Text>
            <Text
              style={{
                marginTop: Sizes.s20,
                fontSize: Sizes.h36,
                textAlign: "center",
              }}
            >
              {danhsachcauhoi[vitri].tencauhoi}
            </Text>
          </View>
          <View style={styles.dapan}>
            <View style={styles.wrapper}>
              <CheckBox
                onPress={() =>
                  this.checkItemketquaa(
                    danhsachcauhoi[vitri].idcauhoi,
                    (dapanhchona = "a"),
                    (ketquaa = danhsachcauhoi[vitri].dapan)
                  )
                }
                checked={this.state.checkeda.includes(
                  danhsachcauhoi[vitri].idcauhoi,
                  (dapanhchona = danhsachcauhoi[vitri].a),
                  (ketquaa = danhsachcauhoi[vitri].dapan)
                )}
              />

              <Text
                style={{
                  fontSize: Sizes.h32,
                  width: "80%",
                  paddingVertical: Sizes.s30,
                }}
              >
                {danhsachcauhoi[vitri].a}
              </Text>
            </View>
          </View>
          <View style={styles.dapan}>
            <View style={styles.wrapper}>
              <CheckBox
                onPress={() =>
                  this.checkItemketquab(
                    danhsachcauhoi[vitri].idcauhoi,
                    (dapanhchonb = "b"),
                    (ketquab = danhsachcauhoi[vitri].dapan)
                  )
                }
                checked={this.state.checkedb.includes(
                  danhsachcauhoi[vitri].idcauhoi,
                  (dapanhchonb = "b"),
                  (ketquab = danhsachcauhoi[vitri].dapan)
                )}
              />
              <Text
                style={{
                  fontSize: Sizes.h32,
                  width: "80%",
                  paddingVertical: Sizes.s30,
                }}
              >
                {danhsachcauhoi[vitri].b}
              </Text>
            </View>
          </View>
          <View style={styles.dapan}>
            <View style={styles.wrapper}>
              <CheckBox
                onPress={() =>
                  this.checkItemketquac(
                    danhsachcauhoi[vitri].idcauhoi,
                    (dapanhchonc = "c"),
                    (ketquac = danhsachcauhoi[vitri].dapan)
                  )
                }
                checked={this.state.checkedc.includes(
                  danhsachcauhoi[vitri].idcauhoi,
                  (dapanhchonc = "c"),
                  (ketquac = danhsachcauhoi[vitri].dapan)
                )}
              />
              <Text
                style={{
                  fontSize: Sizes.h32,
                  width: "80%",
                  paddingVertical: Sizes.s30,
                }}
              >
                {danhsachcauhoi[vitri].c}
              </Text>
            </View>
          </View>
          <View style={styles.dapan}>
            <View style={styles.wrapper}>
              <CheckBox
                onPress={() =>
                  this.checkItemketquad(
                    danhsachcauhoi[vitri].idcauhoi,
                    (dapanhchond = "d"),
                    (ketquad = danhsachcauhoi[vitri].dapan)
                  )
                }
                checked={this.state.checkedd.includes(
                  danhsachcauhoi[vitri].idcauhoi,
                  (dapanhchond = "d"),
                  (ketquad = danhsachcauhoi[vitri].dapan)
                )}
              />
              <Text
                style={{
                  fontSize: Sizes.h32,
                  width: "80%",
                  paddingVertical: Sizes.s30,
                }}
              >
                {danhsachcauhoi[vitri].d}
              </Text>
            </View>
          </View>
        </View>
      );
      return <ScrollView>{listQuestion}</ScrollView>;
    }
  };

  componentDidMount() {
    fetch(`${API_PUBLIC}/thi/thongtinde.php?makiemtra=${this.state.makiemtra}`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("thong tin kiem tra", responseJson);
        this.setState({
          thongtibaikiemtra: responseJson,
          startedTime: !this.state.startedTime,
        }, () => {
          this.checkDisplay()
          this.timeOut()
        })
      })
      .catch((error) => {
        console.error(error);
      });
    this.getData();
  }

  getData = () => {
    const url = `${API_PUBLIC}/thi/chitietbaithi.php?makiemtra=${this.state.makiemtra}`;
    this.setState({ loading: true });

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          danhsachcauhoi: res,
          error: res.error || null,
          loading: false,
        });
        this.arrdapan = res;
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  };
  handleChange(e) {
    let isChecked = e.target.checked;
    // do whatever you want with isChecked value
    alert("dấd");
  }
  nopbai() {
    fetch(`${API_PUBLIC}/thi/chamdiem.php`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idkiemtra: this.state.idkiemtra,
        idthanhvien: userProfile.data.idthanhvien,
        diemso: this.state.point,
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("data tra ve", responseData);
        if (responseData.statusCode === "200") {
          this.props.navigation.navigate("KetQuaThi", {
            makiemtra: this.state.makiemtra,
            diemso: this.state.point,
          });
        }
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headers
            title="Bài Kiểm tra"
            onPressBackButton={() => {
              this.props.navigation.goBack("");
            }}
          />
        </View>
        <View>
          {
          this.state.thongtibaikiemtra.map((item) => (
            <View style={{
              paddingHorizontal: Sizes.s30,
              backgroundColor: '#E9E1E6',
              paddingVertical: Sizes.s20,
            }}>
              <View style={{ flexDirection: "row" }}>
                <UserAvatar
                  style={{ width: Sizes.s140, height: Sizes.s140 }}
                  name={item.tenbaikiemtra}
                  bgColors={["#3498db", "#34495e", "#e67e22"]}
                />
                <View>
                  <Text style={styles.title}>
                    Môn kiểm tra :{item.tenbaikiemtra}{" "}
                  </Text>
                  <Text style={styles.title}>
                    Thời gian: {this.state.time} phút{" "}
                  </Text>
                  <View style={styles.time}>
                      <Text style={styles.timeText}>{this.state.minutes} : {this.state.seconds}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
     {
       this.state.danhsachcauhoi ===  '' ?(
        <View
        style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Image
          source={require('../../../res/images/errors.png')}
          style={{
            height: Sizes.s340 + Sizes.s340,
            width: Sizes.s340 + Sizes.s340,
            resizeMode: 'contain',
          }}
        />
        <Text style={{fontSize: Sizes.s40}}>
          Vui lòng chờ giảng viên xác nhận kiểm tra
        </Text>
      </View>
       ):
       <View style={{flex:1}}>
         <View style={{ flex: 1 }}>{this.renderItem()}</View>
<View
  style={{
    flexDirection: "row",
    paddingHorizontal: Sizes.s50,
    paddingVertical: Sizes.s15,
    alignItems: "center",
    backgroundColor: "#DDD",
  }}
>
  {this.state.vitri === 0 ? (
    <View style={{ width: "50%" }} />
  ) : (
    <View style={{ width: "50%" }}>
      <TouchableOpacity
        onPress={() => {
          if (this.state.vitri < this.state.danhsachcauhoi.length) {
            if (this.state.vitri > 0) {
              this.setState({
                vitri: this.state.vitri - 1,
              });
            }
          }
        }}
        style={{
          width: Sizes.s200,
          backgroundColor: "#2674B7",
          borderRadius: Sizes.s10,
        }}
      >
        <Text
          style={{
            fontSize: Sizes.h30,
            paddingVertical: Sizes.s15,
            textAlign: "center",
            color: "#FFF",
          }}
        >
          Câu trước
        </Text>
      </TouchableOpacity>
    </View>
  )}
  {this.state.vitri === 5 ? (
    <View style={{ width: "50%" }} />
  ) : (
  <View style={{ width: "50%", alignItems: "flex-end" }}>
    <TouchableOpacity
      onPress={() => {
        if (this.state.vitri < this.state.danhsachcauhoi.length) {
          this.setState({
            vitri: this.state.vitri + 1,
          });
        } else {
        }
      }}
      style={{
        width: Sizes.s200,
        backgroundColor: "#2674B7",
        borderRadius: Sizes.s10,
      }}
    >
      <Text
        style={{
          fontSize: Sizes.h30,
          paddingVertical: Sizes.s15,
          textAlign: "center",
          color: "#FFF",
        }}
      >
        Câu sau
      </Text>
    </TouchableOpacity>
  </View>
  )}
</View>
         </View>

     }
        <View style={{ flex: 1 / 7, backgroundColor: "#DDD" }}>
          <TouchableOpacity onPress={() => this.nopbai()}>
            <View
              style={{
                marginHorizontal: Sizes.s40,
                backgroundColor: "#f06c5b",
                alignItems: "center",
                borderRadius: Sizes.s10,
              }}
            >
              <Text
                style={{
                  fontSize: Sizes.h38,
                  color: "#FFFF",
                  paddingVertical: Sizes.s20,
                }}
              >
                NỘP BÀI
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFF",
  },
  header: {
    height: Sizes.s200,
    backgroundColor: "#f06c5b",
  },
  img: {
    width: Sizes.s260,
    height: Sizes.s260,
    alignSelf: "center",
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    width: width - 50,
  },
  label: {
    textTransform: "uppercase",
  },
  input: {
    backgroundColor: "rgba(224, 231, 255, 0.20)", // '#E0E7FF' 20%
    borderWidth: 0.5,
    borderColor: "#4abf91",
    borderRadius: 5,
    fontSize: 20,
    color: "#2E384D",
    height: 45,
    paddingVertical: 11,
    paddingHorizontal: 16,
  },
  btn: {
    height: Sizes.s80,
    backgroundColor: "#f06c5b",
    marginHorizontal: Sizes.s30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: Sizes.s20,
  },
  textbtn: {
    fontSize: Sizes.s50,
    color: "#FFFF",
  },
  dapan: {
    width: "100%",
    alignItems: "center",
  },
  wrapper: {
    width: width - Sizes.s30,
    backgroundColor: "#edf7ff",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    marginVertical: Sizes.s10,
    paddingVertical: 0,
    flexDirection: "row",
  },
  title: {
    fontSize: Sizes.h40,
    marginHorizontal: Sizes.s30,
    marginTop: Sizes.s10,
  },
  img: {
    width: Sizes.s340 + Sizes.s200,
    height: Sizes.s340 + Sizes.s200,
  },
  time: {
    backgroundColor: '#FFF',
    marginTop: Sizes.s20,
    borderRadius: Sizes.s10,
    borderColor: '#FF6600',
    borderWidth: 1,
},
timeText: {
    fontSize: Sizes.h40,
    textAlign: 'center',
    paddingVertical: Sizes.s10,
    fontWeight: 'bold'
},
});