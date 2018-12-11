import React, { Component } from 'react'
import Picture from './PictureCollectionItem'
import styled from 'styled-components'
import uuid from 'uuid/v1'

const collection = [
  {
    url: 'collections/1.jpg',
    title: 'Soxix Dlisw'
  }, {
    url: 'collections/2.jpg',
    title: 'Soxix Dlisw'
  }, {
    url: 'collections/3.jpg',
    title: 'Soxix Dlisw'
  },
  {
    url: 'collections/4.jpg',
    title: 'Soxix Dlisw'
  }, {
    url: 'collections/5.jpg',
    title: 'Soxix Dlisw'
  }, {
    url: 'collections/6.jpg',
    title: 'Soxix Dlisw'
  }, {
    url: 'collections/7.jpg',
    title: 'Soxix Dlisw'
  }, {
    url: 'collections/8.jpg',
    title: 'Soxix Dlisw'
  },
  {
    url: 'collections/9.jpg',
    title: 'Soxix Dlisw'
  }
  , {
    url: 'collections/10.jpg',
    title: 'Soxix Dlisw'
  },
  {
    url: 'collections/11.jpg',
    title: 'Soxix Dlisw'
  }
]

export default class extends Component {
  render() {
    return (
      <Collection className="container mb-5">
        <div className="row">
          <div className="w-100">
            <p className="subtitle text-muted">Dịch vụ tang lễ</p>
            <p className="title h2">Sinh Phúc Thọ</p>
            <div className="collection-divider mb-4 mt-2" />
          </div>
          <div className="col-6 col-md-4 p-0">
            <Picture imgURL={collection[0].url} className=""/>
            <Picture imgURL={collection[1].url} className=""/>
            <Picture imgURL={collection[2].url} className=""/>
          </div>
          <div className="col-6 col-md-4 p-0">
            <Picture imgURL={collection[3].url} className=""/>
            <Picture imgURL={collection[4].url} className=""/>
            <Picture imgURL={collection[5].url} className=""/>
            <Picture imgURL={collection[10].url} className=""/>
          </div>
          <div className="col-6 col-md-4 p-0">
            <Picture imgURL={collection[6].url} className=""/>
            <Picture imgURL={collection[7].url} className=""/>
            <Picture imgURL={collection[8].url} className=""/>
            <Picture imgURL={collection[9].url} className=""/>
          </div>
        </div>
      </Collection>
    )
  }
}

const Collection = styled.div`
  padding-top: 4rem;
  .title{
    margin-bottom: 0;
    text-align: center;
    font-family: 'Playfair Display', serif;
  }
  .subtitle{
    text-align: center;
    font-family: 'Lato,sans-serif';
    margin-bottom: 0;
  }
  .collection-divider{
    border-bottom: 4px solid black;
    margin: auto;
    width: 3rem;
  }
`