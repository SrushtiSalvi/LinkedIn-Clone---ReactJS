import { FiberManualRecord, InfoOutlined } from '@mui/icons-material'
import React from 'react'
import './style/widgets.css'

function Widgets() {

    const newsArticle = (heading, subtitle) => {
        return(
        <div className='widgets_article'>
            <div className='widgets_articleLeft'>
                <FiberManualRecord />
            </div>
            <div className='widgets_articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
        )
    }

    return (
        <div className='widgets'>
            <div className='widgets_header'>
                <h2>LinkedIn News</h2>
                <InfoOutlined />
            </div>
            {newsArticle('React is back', 'Top news - 9099 readers')}
            {newsArticle('Corona Virus news update UK', 'Top news - 886 readers')}
            {newsArticle('Lockdown to be imposed in Maharashtra', 'Top news - 5689 readers')}
            {newsArticle('Tesla hit new highs', 'cars and sports - 658 readers')}
            {newsArticle('Bitcoin breaks $22k', 'crypto - 425 readers')}
            {newsArticle('Is Redux good?', 'code - 5411 readers')}
        </div>
    )
}

export default Widgets
