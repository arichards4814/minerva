import React, { useState, useEffect } from 'react';
import '../../App.css';


const TikTok = props => {
    const [content, setContent] = useState({})

    useEffect(()=> {
        //fetch oEmbed TikTok
        fetch(`https://www.tiktok.com/oembed?url=${props.tiktok_url}`)
            .then(resp => resp.json())
                .then(body => {
                    setContent(body)
                })
    })

    return (
        <div >
            {content.html && <div dangerouslySetInnerHTML={{__html: content.html}}></div>}
        </div>
    );
}


export default TikTok;
