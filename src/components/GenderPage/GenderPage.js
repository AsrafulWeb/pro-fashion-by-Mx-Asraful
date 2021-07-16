import React, { useEffect } from 'react';

const GenderPage = ({ gender }) => {

    const genderCategories = []

    useEffect(() => {
        fetch(`http://localhost:3001/products/${gender}`)
            .then(res => res.json())
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    const element = data[i];
                    console.log(element)
                    const findData = genderCategories?.find(element.categories === genderCategories)
                    console.log(findData)
                    if (findData) {
                        
                    } else {
                        genderCategories.push(element.categories)
                    }
                }
            })
    }, [])

    console.log(genderCategories)

    return (
        <div className="genderPageComp">
            <div className="container">

            </div>
        </div>
    );
};

export default GenderPage;