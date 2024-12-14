import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router
import AuthPage from '../components/AuthPage/AuthPage';
import ResetPasswordPage from '../components/ResetPasswordPage/ResetPasswordPage'; // Import trang reset mật khẩu
import HomePage from '../components/HomePage/HomePage';
import Homepage from '../components/UserHomePage/homepage';
import CoBan from "../components/UserHomePage/CoBan";
//import ChuyenKhoa from "./components/ChuyenKhoa";
import BacSi from "../components/UserHomePage/bacSi";
import TongQuat from "../components/UserHomePage/TongQuat";
import UserProfile from "../components/UserHomePage/UserProfile";
import CoSo from "../components/UserHomePage/CoSo";
import CoSoDetail from '../components/UserHomePage/CoSoDetail'
import Login from "../components/UserHomePage/Login";
import DoctorDetail from '../components/UserHomePage/DoctorDetail';
import BookingForm from '../components/UserHomePage/BookingForm';
import LichKham from '../components/UserHomePage/LichKham'
//const ProtectedRoute = ({ element, redirectTo }) => {
// const isAuthenticated = localStorage.getItem('authToken');  // Kiểm tra token trong localStorage

// return isAuthenticated ? element : <Navigate to={redirectTo} />;
//};
function App() {
  // const [userRole, setUserRole] = useState(null);  // null - chưa xác định, 'admin' - admin, 'user' - user

  // useEffect(() => {
  //   // Giả sử bạn kiểm tra role từ localStorage hoặc từ API (ví dụ sau khi đăng nhập)
  //   const role = localStorage.getItem('role'); // Ví dụ: role được lưu trong localStorage
  //   setUserRole(role);  // Đặt role là 'admin' hoặc 'user' sau khi xác thực
  // }, []);

  // if (userRole === null) {
  //   return <div>Loading...</div>; // Hoặc có thể redirect đến trang đăng nhập
  // }
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Routes cho Admin */}
          <Route path="/AuthPage" element={<AuthPage />} /> {/* Trang đăng nhập */}
          <Route path="/reset-password" element={<ResetPasswordPage />} /> {/* Trang reset mật khẩu */}
          <Route path="/HomePage" element={<HomePage />} />{/* Trang chủ */}
          <Route path="/Login" element={<Login />} />
          {/* Routes cho User */}
          <Route path="/CoBan" element={<CoBan />} />
          <Route path="/CoSo" element={<CoSo />} />
          <Route path="/CoSo/:id" element={<CoSoDetail />} />
          {/* <Route path="/chuyenKhoa" element={<ChuyenKhoa />} /> */}
          <Route path="/bacSi" element={<BacSi />} />
          <Route path="/bacSi/:id" element={<DoctorDetail />} />
          <Route path="/booking/:id" element={<BookingForm />} />
          <Route path="/TongQuat" element={<TongQuat />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path='/lichkham' element={<LichKham />} />
          {/* <Route path="/profile" element={<UserProfile />} />
          <Route path="/CoBan" element={<ProtectedRoute element={<CoBan />} redirectTo="/" />} />
          <Route path="/bacSi" element={<ProtectedRoute element={<BacSi />} redirectTo="/" />} />
          <Route path="/TongQuat" element={<ProtectedRoute element={<TongQuat />} redirectTo="/" />} />
          <Route path="/profile" element={<ProtectedRoute element={<UserProfile />} redirectTo="/" />} />
          */}
          <Route path="/" element={<Homepage />} /> Trang đăng nhập
        </Routes>
      </div>
    </Router>
  );
}

export default App;

