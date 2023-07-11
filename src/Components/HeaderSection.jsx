import React from 'react'

export default function HeaderSection() {
    return (
        <>
            <div className="bg-primary my-0 mx-0">
                <div style={{ width: '95vw', height: '100vh' }} className="d-flex justify-content-center align-items-center">
                   
                    <div className="container ">
                        <h1 className="text-drk fw-bold ">
                         A-Z STORES
                        </h1>
                        <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facilis explicabo, soluta dolore non commodi? Eaque sunt veniam blanditiis quasi, accusamus numquam voluptates maxime necessitatibus reprehenderit vero ullam quo amet.</p>
                    </div>
                    <div>
                        <img className='img-fluid' src="https://png.pngtree.com/png-clipart/20210530/original/pngtree-online-shopping-design-concept-couples-are-on-e-commerce-via-smartphone-png-image_6337629.jpg" alt="" srcset="" />
                    </div>

                </div>
            </div>
        </>
    )
}