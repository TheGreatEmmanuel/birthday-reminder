import React from "react";

const List = ({people}) => {
   
    return (
        <>
        {people.map((person)=>{
         const {id,name,age,image} = person;
         return (
         <article key={id} className='person'>
                <img src={image}  alt={name} className="birthday-image"/>
            <div className="solve">
                 <h4 className="name1">{name}</h4>
                 <p className="year1">{age} years old</p>
            </div>
         </article>

         
         );
   
         })}
    

        </>
    );
     

};

export default List;