import React from 'react'
import "./Details.scss"
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import DetailsBanner from './detailsBanner/DetailsBanner'
import Cast from './cast/cast'
import VideosSection from './videoSection/VideosSection'
import Similar from './carousels123/Similar'
import Recommendation from './carousels123/Recommendation'


function Details() {
  const {mediaType,id} = useParams()
  const {data,loading} = useFetch(`/${mediaType}/${id}/videos`)
  
  const {data :credits,loading :creditsLoading} = useFetch(`/${mediaType}/${id}/credits`)
 
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading}  />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  )
}

export default Details
