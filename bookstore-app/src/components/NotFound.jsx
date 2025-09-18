import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>ขออภัย หน้านี้ไม่มีอยู่ในระบบ</p>

      {/* ปุ่มกลับไปหน้า Home */}
      <button onClick={() => navigate("/")}>กลับหน้าแรก</button>

      {/* หรือใช้ Link */}
      <p>
        <Link to="/">ไปที่ Home</Link>
      </p>
    </div>
  );
};

export default NotFound;