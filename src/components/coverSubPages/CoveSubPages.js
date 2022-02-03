import './coveSubPages.css'

const CoveSubPages = ({ background, title }) => {
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

export default CoveSubPages
