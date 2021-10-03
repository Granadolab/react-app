import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif';
import { GitGrifItem } from './GitGrifItem';


export const GifGrid = ({category}) => {


const {data:images, loading} = useFetchGif(category); 



    return (

     <>
        <h4 className='animate__animated animate__fadeIn'>{category}</h4>

        {loading && <p className='animate__animated animate__flash'>Loading...</p>}

            <div className='card-grid'>
                 
                {
                    images.map(img =>(
                        <GitGrifItem 
                        key={img.id}
                        {...img} />
                    
                    ))
                }
                    
            </div>
     </>
    )
}
