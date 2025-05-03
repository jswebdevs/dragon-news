import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const Marqueee = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('/news.json')
            .then(response => response.json())
            .then(data => setNews(data))
            .catch(error => console.error('Error fetching news:', error));

    }, [])

    
    return (
        <div className='px-[5%] bg-white py-2'>
            <div className="flex">
                <h2 className='text-xl bg-red-500 px-4 py-2'> Latest </h2>
                <Marquee className='text-xl bg-green-300 px-4 py-2' speed={100} gradient={false}>
                    {
                        news.map((singleNews)=> <h2 key={singleNews.id} className='text-[18px] me-4 ms-4 text-black'> {singleNews.title} | </h2>)
                    }
                </Marquee>

            </div>
        </div>
    );
};

export default Marqueee;