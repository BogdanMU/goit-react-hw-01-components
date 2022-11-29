import PropTypes from 'prop-types';
import { Description, Image,Container, Name, Text, Stats, StatName, StatValue  } from "./Profile.styled"

export const Profile = ({user: {username, tag, location, avatar, stats},}) => {
    return (
    <Container>
    <Description>
      <Image
        src={avatar}
        alt={username}
      />
      <Name>{username}</Name>
      <Text>@{tag}</Text>
      <Text>{location}</Text>
    </Description>
  
    <Stats>
      <li>
        <StatName>Followers</StatName>
        <StatValue>{stats.followers}</StatValue>
      </li>
      <li>
        <StatName>Views</StatName>
        <StatValue>{stats.views}</StatValue>
      </li>
      <li>
        <StatName>Likes</StatName>
        <StatValue>{stats.likes}</StatValue>
      </li>
    </Stats>
  </Container>)
}


Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
  })
}
