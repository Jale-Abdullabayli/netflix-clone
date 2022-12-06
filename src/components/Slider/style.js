import style from "styled-components";


export const StyledLine = style.div`
background: rgba(109, 109, 110, 0.7);
height: 3px;
width: 70%;
margin: 0 auto;
margin-top:8px;
position:relative;
&:before{
position:absolute;
left:0;
top:0;
height:100%;
content:'';
background: #B9090B;
width: ${(props) => `${props.randomWidth}%`};
}
`


export const StyledSlider = style.div`
iframe{
    width:100%;
}
z-index: 1;

.title{
    font-weight: 500;
font-size: 26px;
line-height: 33px;
color: #E5E5E5;
margin-bottom:10px;
}
.splide__arrow--prev{
    display:none;
}
.splide__arrow {
    background:transparent;
    height:auto;
    width:auto;
    outline:none !important;
    &:hover{
        svg{
            height:42px;
            width:25px;
        }
    }
    svg{
        transition:0.3s;
        fill: #E5E5E5;
        height:32px;
        width:18px;
    }
}
li{
    padding: 10px 0;
}
.top{
    padding-left: 60px;
    position:relative;
    .topNumber{
        font-size: 150px;
        line-height: ${(props) => `${props.sliderHeight}px`};;
        color: #808080;
  -webkit-text-fill-color: transparent; 
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #808080;
  position: absolute;
  left:0;
  top:0;
  z-index:-1;
    }
  
}
.custom{
    margin-left:-60px;
    .splide__arrow--prev{
        display:block;
    }
    .splide__arrow--next{
        display:none;
    }
}
img{
    cursor:pointer;
width:100%;
object-fit:cover;
height:${(props) => `${props.sliderHeight}px`};
transition: .3s;
&:hover{
   margin-top:-10px;
   margin-bottom:-10px;
   height:calc(${props  => props.sliderHeight}px + 20px);
}



`