// import { Col, Row } from 'antd'
// import React from 'react'

// export const loginSignUp = () => {
//   return (
//     <div>
//         <Row>
//             <Col span={6}></Col>
//             <Col span={12} style={{ backgroundColor: 'white', borderRadius: '5px', height:'500px', marginTop:'5%'}}> haha</Col>
//             <Col span={6}></Col>
//         </Row>

//     </div>
//   )
// }
import React, {useState} from 'react';
import { useNavigate } from 'react-router';

const LoginSignUp = () => {
  // State để lưu trữ giá trị nhập vào từ người dùng
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Hàm xử lý khi người dùng thay đổi giá trị trường tên người dùng
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Hàm xử lý khi người dùng thay đổi giá trị trường mật khẩu
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Hàm xử lý khi người dùng nhấn nút đăng nhập
  const navigate = useNavigate();
  const handleLogin = () => {
    // Kiểm tra tên người dùng và mật khẩu
    // Ở đây bạn có thể thêm logic kiểm tra với backend
    if (username === 'admin' && password === 'password') {
      alert('Đăng nhập thành công!');
    } else {
      alert('Đăng nhập thất bại. Vui lòng thử lại!');
      navigate('/')
    }
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <div>
        <label>Tên người dùng:</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        <label>Mật khẩu:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
};

export default LoginSignUp;
