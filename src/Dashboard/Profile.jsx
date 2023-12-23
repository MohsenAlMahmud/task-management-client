import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../ClientAuthentication/AuthProvider';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Fetch profile data when the component mounts
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`/profiles?email=${user.email}`);
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, [user.email]);

  return (
    <div>
      <div>
        <h2>Image : </h2>
        <h2>Name : {profile?.name}</h2>
        <h2>Address : {profile?.address}</h2>
        <h2>Date of Birth : {profile?.dateOfBirth}</h2>
        <h2>Email : {user.email}</h2>
        <h2>Phone : {profile?.phone}</h2>
        <h2>Occupation : {profile?.occupation}</h2>
        <br />
        <br />
        <Link to="updateProfile">
          <button className="btn btn-accent">Update Your Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;