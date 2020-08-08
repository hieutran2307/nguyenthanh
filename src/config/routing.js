export default routing = {
    navigate: null
}

export function goToBAOnLine() {
    routing.navigation.navigate('BA_OnLine');
}

export function goToELearning() {

    routing.navigation.navigate('eLearning');
}

export function goToETMS() {
    routing.navigation.navigate('ETMS');

}

export function goToRMIT() {

    routing.navigation.navigate('RMIT');
}

export function goToWifiAttendace() {

    routing.navigation.navigate('WifiAttendance');
}

export function goToFis() {

    routing.navigation.navigate('FIS');

}

export function goToEDU_1() {
    routing.navigation.navigate('EDU', { index: 1 });
}
export function goToEDU_2() {

    routing.navigation.navigate('EDU', { index: 0 });
}