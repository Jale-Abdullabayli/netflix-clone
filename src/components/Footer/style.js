import style from "styled-components";

export const StyledFooter = style.footer`
background: #282828;
padding-left:278px;
padding-right:278px;
.socialMedia{
    display:flex;
    margin-bottom:20px;
    align-items:center;
    img{
        margin-right:20px;
    }
}
.links{
    display:flex;
    justify-content:space-between;
    ul{
        list-style:none;
        li{
            font-weight: 400;
font-size: 13px;
line-height: 17px;
color: #808080;
margin-bottom:15px;
cursor:pointer;

        }
    }
}
.serviceCode{
    padding:10px 15px;
    font-weight: 400;
font-size: 13px;
line-height: 17px;
color: #808080;
background:transparent;
border:1px solid #808080;
cursor:pointer;
margin-bottom:20px;
}
.copy{
    font-weight: 300;
font-size: 11px;
line-height: 14px;
color: #808080;
padding-bottom:20px;

}
`