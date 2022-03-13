import './coverSubPages.css'
import React from 'react'
const CoverSubPages = ({ background, title }) => {
    return (
        <section className='cover-sub-pages'>
            <div className="sub-page-cover" style={ background }>
                <div className="overlay">
                    <p className="main-title">{ title }</p>
                </div>
            </div>
        </section>
    )
}

export default CoverSubPages
