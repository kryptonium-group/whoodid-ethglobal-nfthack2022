import styled from "styled-components";
import { List, ListItem, ListItemButton } from "@mui/material";

export const SocialClubList = styled(List)`
  &.MuiList-root {
    display: flex;
    flex-direction: column;
    margin-top: 72px;
    position: fixed;
    width: 260px;
    height: calc(100vh - 72px);
    overflow-y: auto;
    overflow-x: hidden;
    padding: 2px;
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background: #71b67f;
      transition: 0.5s;
    }

    &::-webkit-scrollbar-track {
      background: lightgray;
    }
  }
`;

export const SocialClubListItem = styled(ListItem)`
  &.MuiListItem-root {
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    margin: 1px 0;

    &.Mui-selected {
      background-color: darkgreen;
    }
  }
`;
