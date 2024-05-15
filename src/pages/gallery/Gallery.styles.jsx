import styled from 'styled-components';

export const Card = styled.div`
  width: 255px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: baseline;

  background-color: #2c3531;
  padding-bottom: 10px;
  margin-top: 20px;
  border: 1px #0b191a solid;
  border-radius: 2px;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 5px #ccc;
  }
`;

export const CardImg = styled.div`
  width: 223px;
  height: 120px;
  margin-top: 10px;
  margin-left: 16px;

  & img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;
export const CardContent = styled.div``;

export const CardTitle = styled.h4`
  margin-left: 16px;
  margin-top: 20px;
  margin-bottom: 50px;
  color: #ffffff;
`;
