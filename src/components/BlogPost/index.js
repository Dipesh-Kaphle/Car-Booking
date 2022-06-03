import React from 'react'
import { PRODUCT_LIST } from '../../utils/constants/appConfigs'
import { loadState } from '../../utils/storageUtil'
import BlogPosts from './blog'

const BlogPost =()=>{
    const carDetailsList=loadState(PRODUCT_LIST)

    return(
        <React.Fragment>
            <BlogPosts carDetailsList={carDetailsList}/>
        </React.Fragment>
    )
}
export default BlogPost