import React from 'react'
import { StyledFooter } from "./style";
import sosialMedia1 from '../../images/sosialMedia1.png';
import sosialMedia2 from '../../images/sosialMedia2.png';
import sosialMedia3 from '../../images/sosialMedia3.png';
import sosialMedia4 from '../../images/sosialMedia4.png';


function Footer() {
  return (
    <StyledFooter>
        <div className='socialMedia'>
            <img src={sosialMedia1} alt='sosialMedia'/>
            <img src={sosialMedia2} alt='sosialMedia'/>
            <img src={sosialMedia3} alt='sosialMedia'/>
            <img src={sosialMedia4} alt='sosialMedia'/>
        </div>
        <div className='links'>
            <div className='column'>
                <ul>
                    <li>Seslendirme ve Alt Yazı</li>
                    <li>Medya Merkezi</li>
                    <li>Gizlilik</li>
                    <li>Bize Ulaşın</li>
                </ul>
            </div>
            <div className='column'>
                <ul>
                    <li>Sesli Betimleme</li>
                    <li>Yatırımcı İlişkileri</li>
                    <li>Yasal Hükümler</li>
                </ul>
            </div>
            <div className='column'>
                <ul>
                    <li>Yardım Merkezi</li>
                    <li>İş İmkanları</li>
                    <li>Çerez Tercihleri</li>
                </ul>
            </div>
            <div className='column'>
                <ul>
                    <li>Çerez Tercihleri</li>
                    <li>Kullanım Koşulları</li>
                    <li>Kurumsal Bilgiler</li>
                </ul>
            </div>
        </div>
        <button className='serviceCode'>Hizmet Kodu</button>
        <div className='copy'>© 1997-2021 Netflix, Inc.  {'{i-062d573a0ee099242}'}</div>
    </StyledFooter>
  )
}

export default Footer