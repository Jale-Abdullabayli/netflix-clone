import style from "styled-components";

export const StyledBanner = style.div`

background-image: ${(props) => `url(${props.bgImg})`}; 
background-size: cover;
display:flex;
height: calc(100vh - 80px);
flex-direction:column;
justify-content: flex-end;
padding-left:60px;
position:relative;

&:before{
    position:absolute;
    bottom:0;
    height:30vh;
    filter: blur(20px);
    width:100%;
    content:'';
    background-image: linear-gradient(to top, rgba(0,0,0,0.9), #68616180);
    left:0;

}
.content{
    display:flex;
    flex-direction:column;
    width:50%;
margin-bottom:15px;
.name{
    color: #ffffff;
    font-size:50px;
    margin-bottom:15px;
}
.overview{
    font-weight: 400;
font-size: 26px;
line-height: 33px;
color: #FFFFFF;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 4;
        line-clamp: 4; 
-webkit-box-orient: vertical;
margin-bottom:15px;

}
.btns{
    display:flex;
    align-items:center;
    button{
        cursor:pointer;
    }
    .play{
        display: flex;
justify-content: center;
align-items: center;
padding: 15px 30px;
background: #FFFFFF;
border-radius: 4px;
border:none;
margin-right:15px;
img{
margin-right:24px;
}
span{
    font-weight: 500;
font-size: 22px;
line-height: 28px;
color: #141414;
}
    }
    .info{
        display: flex;
justify-content: center;
align-items: center;
padding: 15px 30px;
background: rgba(255, 255, 255, 0.3);
border-radius: 4px;
border:none;
img{
    margin-right:22px;
    }
    span{
        font-weight: 500;
font-size: 22px;
line-height: 28px;
color: #FFFFFF;
    }
    }
}

}
`