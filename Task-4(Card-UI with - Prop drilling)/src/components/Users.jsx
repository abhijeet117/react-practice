const Users = [
  {
    id: 1,
    name: "Neel Litoriya",
    role: "Photographer",
    location: "Indore, India",
    bannerImage:
      "https://plus.unsplash.com/premium_photo-1682095831819-df014ef95cc9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXNpYW4lMjBnaXJsfGVufDB8fDB8fHww",
    profileImage:
      "https://plus.unsplash.com/premium_photo-1682095831819-df014ef95cc9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXNpYW4lMjBnaXJsfGVufDB8fDB8fHww",
    stats: { views: 624, followers: 142, likes: 104 },
  },
  {
    id: 2,
    name: "Aarav Mehta",
    role: "UI Designer",
    location: "Mumbai, India",
    bannerImage:
      "https://images.unsplash.com/photo-1534083220759-4c3c00112ea0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profileImage:
      "https://images.unsplash.com/photo-1534083220759-4c3c00112ea0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats: { views: 812, followers: 210, likes: 189 },
  },
  {
    id: 3,
    name: "Riya Sharma",
    role: "Fashion Model",
    location: "Delhi, India",
    bannerImage:
      "https://plus.unsplash.com/premium_photo-1706026420430-717b8e2fda72?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profileImage:
      "https://plus.unsplash.com/premium_photo-1706026420430-717b8e2fda72?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats: { views: 1024, followers: 398, likes: 356 },
  },
  {
    id: 4,
    name: "Kabir Singh",
    role: "Content Creator",
    location: "Chandigarh, India",
    bannerImage:
      "https://images.unsplash.com/photo-1723211945446-afc7718df136?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profileImage:
      "https://images.unsplash.com/photo-1723211945446-afc7718df136?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats: { views: 540, followers: 120, likes: 98 },
  },
  {
    id: 5,
    name: "Simran Kaur",
    role: "Stylist",
    location: "Amritsar, India",
    bannerImage:
      "https://images.unsplash.com/photo-1513097633097-329a3a64e0d4?q=80&w=1096&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profileImage:
      "https://images.unsplash.com/photo-1513097633097-329a3a64e0d4?q=80&w=1096&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats: { views: 930, followers: 275, likes: 240 },
  },
  {
    id: 6,
    name: "Rahul Verma",
    role: "Developer",
    location: "Bangalore, India",
    bannerImage:
      "https://images.unsplash.com/photo-1656771793175-ba3fce94106a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profileImage:
      "https://images.unsplash.com/photo-1656771793175-ba3fce94106a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats: { views: 760, followers: 188, likes: 160 },
  },
  {
    id: 7,
    name: "Ananya Gupta",
    role: "Influencer",
    location: "Jaipur, India",
    bannerImage:
      "https://plus.unsplash.com/premium_photo-1682095831819-df014ef95cc9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXNpYW4lMjBnaXJsfGVufDB8fDB8fHww",
    profileImage:
      "https://plus.unsplash.com/premium_photo-1682095831819-df014ef95cc9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXNpYW4lMjBnaXJsfGVufDB8fDB8fHww",
    stats: { views: 1150, followers: 420, likes: 399 },
  },
  {
    id: 8,
    name: "Dev Patel",
    role: "Cinematographer",
    location: "Ahmedabad, India",
    bannerImage:
      "https://images.unsplash.com/photo-1534083220759-4c3c00112ea0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profileImage:
      "https://images.unsplash.com/photo-1534083220759-4c3c00112ea0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats: { views: 680, followers: 155, likes: 130 },
  },
];

export default Users;
