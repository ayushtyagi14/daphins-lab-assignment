import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="filter">
                <div className="heading">Related Category</div>
                <div className="item">Paracetamol Tablets</div>
                <div className="item">Paracetamol Syrup</div>
                <div className="item">Paracetamol Powder</div>
                <div className="item select">Aceclofenac <img src="https://img.icons8.com/ios/18/ffffff/multiply.png" /></div>
                <div className="item">Megaladrate Simethicone Oral Suspension</div>
                <div className="item">Mefanmic Paracetamol Syrup</div>
            </div>
            <div className="filter">
                <div className="heading">Related Brands</div>
                <div className="item">Cipmol Paracetamol</div>
                <div className="item">Pandal Paracetamol Tablets</div>
                <div className="item">Combiflam</div>
                <div className="item">Crocin Tablets</div>
                <div className="item">Calpol Paracetamol Tablets</div>
                <div className="item">Sumo Tablet</div>
            </div>
            <div className="filter">
                <div className="heading">Buisness Type</div>
                <div className="item">Wholesaler</div>
                <div className="item">Manufacturer</div>
                <div className="item">Retailer</div>
                <div className="item">Exporter</div>
            </div>
            <div className="filter">
                <div className="heading">Strength</div>
                <div className="item select">500 mg <img src="https://img.icons8.com/ios/18/ffffff/multiply.png" /></div>
                <div className="item">650 mg</div>
            </div>
            <div className="filter">
                <div className="heading">Manufacturer</div>
                <div className="item">Intas Pharmaceutical Ltd</div>
                <div className="item">Alkem Laboratories Ltd</div>
            </div>
            <div className="filter">
                <div className="heading">Prescription/Non prescription</div>
                <div className="item">Intas Pharmaceutical Ltd</div>
                <div className="item">Alkem Laboratories Ltd</div>
            </div>
        </div>
    )
}

export default Sidebar
