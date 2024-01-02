import styled from 'styled-components/native';

import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
    flex: 1;

`;

export const Header = styled.View`
    padding: 15px;
    padding-top: ${getStatusBarHeight() + 10}px;
    background: #05042F;
    align-items: center;

`;

export const LogoImage = styled.Image`
    align-self: center;
    width: 250px;
    height: 70px;
    margin-bottom: 13px;

`;

export const UserAvatar = styled.Image`
`;




