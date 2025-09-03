import React from 'react';

function MyProfile() {
  const profile = {
    name: "Suwapich Arsa",
    age: 20,
    phone: "080-2144589",
    email: "arsa_s4@silpakorn.edu",
    university: "Silpakorn University",
    faculty: "Science",
    major: "Information Technology",
  };

  return (
    <div style={{
      maxWidth: "500px",
      margin: "0 auto",
      padding: "20px",
      border: "1px solid #eee",
      borderRadius: "10px",
      backgroundColor: "#fafafa"
    }}>
      <h2>👤 My Profile</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Age:</strong> {profile.age}</p>
      <p><strong>Phone:</strong> {profile.phone}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Phone:</strong> {profile.university}</p>
      <p><strong>Phone:</strong> {profile.faculty}</p>
      <p><strong>Phone:</strong> {profile.major}</p>

    </div>
  );
}

export default MyProfile;
