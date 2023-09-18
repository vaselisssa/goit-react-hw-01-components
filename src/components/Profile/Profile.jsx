import { AiFillHeart, AiOutlineEye } from 'react-icons/ai';
import { BsPeopleFill } from 'react-icons/bs';

import {
  UserProfile,
  Description,
  Avatar,
  Name,
  UserInfo,
  StatsList,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <UserProfile>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Description>

      <StatsList>
        <StatsItem>
          <StatsLabel>
            <BsPeopleFill />
            Followers
          </StatsLabel>
          <StatsQuantity>{followers}</StatsQuantity>
        </StatsItem>

        <StatsItem>
          <StatsLabel>
            <AiOutlineEye />
            Views
          </StatsLabel>
          <StatsQuantity>{views}</StatsQuantity>
        </StatsItem>

        <StatsItem>
          <StatsLabel>
            <AiFillHeart />
            Likes
          </StatsLabel>
          <StatsQuantity>{likes}</StatsQuantity>
        </StatsItem>
      </StatsList>
    </UserProfile>
  );
};
