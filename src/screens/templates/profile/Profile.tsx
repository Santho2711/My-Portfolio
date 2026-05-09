import React from 'react';
import './profile.scss';
import { profile } from '../../../utilities/content';

const Profile:React.FC = () => {
  return (
    <div className='profile' >
      <div className="img_blk">
        <img src={profile.image} alt="" />
      </div>

      <strong>{profile.name}</strong>
      <p>{profile.description}</p>
    </div>
  )
}

export default Profile