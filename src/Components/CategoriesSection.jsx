import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
export default function CategoriesSection() {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories').then(json => setCategories(json.data))

  }, [])

  return (
    <div className="container bg-secondary  py-5">
      <div className="my-5 text-center ">
        <h1 className='text-light'>CATEGORIES</h1>
        <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illum, laudantium earum sit saepe dolore aperiam vitae ullam iusto deserunt, ipsam asperiores temporibus! Quis exercitationem neque porro nisi saepe autem?</p>
      </div>

      <div className="row">
        {
          categories.map((val, key) =>
            <div className="col-md-6 my-3 " key={key}>
              <Link className='text-decoration-none' to={`/products/category/${val}`}>
                <Card>
                  <Card.Body className='my-3 bg-light'>
                    <Card.Title>{key + 1} - {val.toUpperCase().replace('-', ' ')}</Card.Title>
                    <Card.Text className=' border  lh-lg text-light bg-secondary mt-5 mb-0'>
          Some quick example text to build on the card title and make  up the
          bulk of the card's content.
        </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          )
        }

      </div>
    </div>
  )
}

