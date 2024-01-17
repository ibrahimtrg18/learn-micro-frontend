import styled from "@emotion/styled";

export const Container = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 300px;
  margin: 16px;
  padding: 16px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

export const Title = styled.div`
  text-transform: capitalize;
  margin: 8px 0;
`;

export const Description = styled.div`
  color: #555;
`;

export const Price = styled.div`
  font-weight: bold;
  color: #333;
  margin-top: 8px;
`;
