import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
  border-radius: 8px;
  margin: auto;
  margin-top: 50px;
  width: 20%;
  background-color: #fff;
  text-align: center;
`;

export const Description = styled.div``;

export const Image = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 50%;
  margin-right: auto;
  margin-left: auto;
`;
export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const Text = styled.p`
  color: rgba(0, 0, 0, 0.5);
  margin-top: 5px;
  margin-bottom: 8px;
`;

export const Stats = styled.ul`
  padding: 0;
  display: flex;
  list-style: none;
  justify-content: center;
  gap: 20px;
  margin-bottom: 0;
`;

export const StatName = styled.span`
  display: block;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 5px;
`;
export const StatValue = styled.span`
  display: block;
  font-weight: 700;
`;
