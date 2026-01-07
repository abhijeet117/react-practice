import React, { createContext } from 'react'

export const data = createContext()

const UserContext = ({children}) => {

    const users = [
  {
    id: 1,
    name: "Aarav Sharma",
    username: "aarav_01",
    email: "aarav@gmail.com",
    role: "Frontend Developer",
    location: "Delhi, India",
    isOnline: true,
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    id: 2,
    name: "Riya Verma",
    username: "riya_v",
    email: "riya@gmail.com",
    role: "UI/UX Designer",
    location: "Mumbai, India",
    isOnline: false,
    avatar: "https://i.pravatar.cc/150?img=32"
  },
  {
    id: 3,
    name: "Kabir Singh",
    username: "kabir_dev",
    email: "kabir@gmail.com",
    role: "Backend Developer",
    location: "Bangalore, India",
    isOnline: true,
    avatar: "https://i.pravatar.cc/150?img=45"
  },
  {
    id: 4,
    name: "Ananya Patel",
    username: "ananya_p",
    email: "ananya@gmail.com",
    role: "Product Manager",
    location: "Ahmedabad, India",
    isOnline: false,
    avatar: "https://i.pravatar.cc/150?img=20"
  },
  {
    id: 5,
    name: "Rahul Mehta",
    username: "rahul_m",
    email: "rahul@gmail.com",
    role: "Full Stack Developer",
    location: "Pune, India",
    isOnline: true,
    avatar: "https://i.pravatar.cc/150?img=60"
  }
];



  return (
    <data.Provider value={users}>
        {children}
    </data.Provider>
  )
}

export default UserContext