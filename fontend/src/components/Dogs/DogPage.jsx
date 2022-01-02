import React from 'react'
import DogsCard from './DogsCard'

export default function DogPage(props) {
    const {allDogs} = props
    return (
        <>
        <section className="dogs-container">
            {allDogs.map((dog, index) => {
                return (
                    <div key={dog.id}>
                       <DogsCard 
                       id={dog.id} 
                       name={dog.name} 
                       breed={dog.breed} 
                       description={dog.description} 
                       price={dog.price} 
                       img={dog.imgaeUrl}/>
                    </div>
                )
            })}
        </section>
        </>
    )
}
