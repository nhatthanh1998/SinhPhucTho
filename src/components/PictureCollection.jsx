import React, { Component } from 'react'
import Picture from './PictureCollectionItem'
import styled from 'styled-components'
import uuid from 'uuid/v1'

const collection1 = [
  {
    url: 'https://simpleqode.bitbucket.io/touche/assets/img/11.jpg',
    title: 'Soxix Dlisw'
  }, {
    url: 'https://simpleqode.bitbucket.io/touche/assets/img/15.jpg',
    title: 'Soxix Dlisw'
  }, {
    url: 'https://simpleqode.bitbucket.io/touche/assets/img/18.jpg',
    title: 'Soxix Dlisw'
  },
  {
    url: 'https://simpleqode.bitbucket.io/touche/assets/img/13.jpg',
    title: 'Soxix Dlisw'
  }, {
    url: 'https://simpleqode.bitbucket.io/touche/assets/img/14.jpg',
    title: 'Soxix Dlisw'
  }, {
    url: 'https://simpleqode.bitbucket.io/touche/assets/img/17.jpg',
    title: 'Soxix Dlisw'
  }, {
    url: 'https://simpleqode.bitbucket.io/touche/assets/img/16.jpg',
    title: 'Soxix Dlisw'
  }, {
    url: 'https://simpleqode.bitbucket.io/touche/assets/img/12.jpg',
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
          {collection1.map(item => <Picture imgURL={item.url} className="col-6 col-md-4" key={uuid()} title={item.title} />)}
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