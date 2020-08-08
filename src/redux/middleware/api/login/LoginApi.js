import {/* userProfile,*/ API_PUBLIC} from '../../../../config/settings';

const errorServerFail = 'Không kết nối được với máy chủ';

export function postLoginApi(input) {
  console.log("ten dang nhap",input.username)
  console.log("mat khai",input.password)
  return fetch(
    `${API_PUBLIC}/thanhvien/dangnhap.php`,
    {
      method: 'POST',
      body: JSON.stringify({
        maso: input.username,
        matkhau: input.password,
      }),
    },
  )
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      return {statusCode: -1, msg: errorServerFail};
    });
}
