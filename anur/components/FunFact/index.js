import React from 'react'


const FunFact = (props) => {

    const funfact = [
        {
            title: '8',
            subTitle: 'Nedelja HTML i CSS',
        },
        {
            title: '8',
            subTitle: 'Nedelja Javascripta',
        },
        {
            title: '8',
            subTitle: 'Nedelja Reacta',
        },
        {
            title: '6',
            subTitle: 'Meseci ceo kurs',
        },
    ]

    return (

        <section className={`wpo-fun-fact-section ${props.fClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-fun-fact-grids clearfix">
                            {funfact.map((funfact, fitem) => (
                                <div className="grid" key={fitem}>
                                    <div className="info">
                                        <h3>{funfact.title}</h3>
                                        <p>{funfact.subTitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FunFact;