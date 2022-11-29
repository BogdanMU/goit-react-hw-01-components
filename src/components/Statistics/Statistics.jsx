import PropTypes from 'prop-types';
import { StatsBox, StatsTitle, StatsList, StatsItem } from "./Statistics.styled"


export const Statistics = ({title, stats}) => {
    return (
    <StatsBox>
      {title && <StatsTitle>{title}</StatsTitle>}
  
    <StatsList>
     {stats.map(stat => (
        <StatsItem key={stat.id}>
        <span>{stat.label}</span>
        <span>{stat.percentage}%</span>
      </StatsItem>
     ))}
    </StatsList>
  </StatsBox>)
}


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ).isRequired,
  };