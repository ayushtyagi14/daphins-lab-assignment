import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="tabs">
                Medical Darpan
                <img src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-chevron-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya-3.png" />
                Search
                <img src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-chevron-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya-3.png" />
                FabiFlu Tablets
            </div>
            <div className="search">
                <div className="search-area">
                    <img className='search-img' src="https://img.icons8.com/ios-glyphs/18/000000/search--v1.png" />
                    <input type="search" name="search" placeholder='Paracetamol' className='search-bar' />
                </div>
                <button className='search-btn'>Search</button>
            </div>
            <div className="opt">
                <div className="name">
                    <h2>Paracetamol</h2>
                    <h5 className='brac'>(128 Products)</h5>
                </div>
                <div className="selected">
                    Aceclofenac
                    <img src="https://img.icons8.com/ios/20/ffffff/multiply.png" />
                </div>
                <div className="selected">
                    500 mg
                    <img src="https://img.icons8.com/ios/20/ffffff/multiply.png" />
                </div>
                <div className="remove">Remove all</div>
            </div>
        </div>
    )
}

export default Hero
