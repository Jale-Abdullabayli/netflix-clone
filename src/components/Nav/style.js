import style from "styled-components";

export const StyledNav = style.div`
background: #141414;
padding: 0 60px;
height:80px;
display:flex;
justify-content: space-between;
align-items: center;
.left{
    display:flex;
    align-items: center;
    .logo{
        margin-right: 30px;
    }
    ul{
        display:flex;
        align-items: center;
        list-style:none;
        li{
            cursor:pointer;
            margin-left:20px;
            font-weight: 500;
            font-size: 14px;
          line-height: 18px;
            color: #E5E5E5;
            &.active{
                font-weight: 900;
            }
        }
    }
}
.right{
    display:flex;
    align-items: center;
    *{
        margin-left:20px
    }
    .category{
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        color: #FFFFFF;
    }
    .arrowDown{
        margin-left:10px

    }
}
`;
