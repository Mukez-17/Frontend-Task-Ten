import React from 'react';

const CityContent = ({ titleContent}) => {

    const divShowStyle = {
        display: "block",
        paddingTop : "40px"
    }

    const divHideStyle = {}

  return (
    <div className="col-lg-6">
        <h3 
            style={{
                padding:"20px 0 40px", 
                display:titleContent.id % 2 !== 0 ? "block" : "none"
            }}
        >
            {titleContent.ids + ". " + titleContent.Heading}
        </h3>
        <div style={titleContent.id % 2 === 0 ? divShowStyle : divHideStyle}>
            <h5>What is the best time to visit:</h5>
            <p 
                style={{textAlign:"justify"}}
            >
                <span className='span-content' style={{marginLeft:"270px"}}></span>
                {titleContent.content.content1}
                <br/><br/>
                <span className='span-content' style={{marginLeft:"270px"}}></span>
                {titleContent.content.content2}
                <br/><br/>
            </p>
        </div>
    </div>
  )
}

export default CityContent;