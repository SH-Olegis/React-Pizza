import React, { useState } from 'react'

const Categories = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    const categoriesNames = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    return <div className="categories">
        <ul>
            {
                categoriesNames.map((category, index) => (
                    <li key={category}
                        className={activeCategory === index ? 'active' : ''}
                        onClick={() => (setActiveCategory(index))}
                    >{category}</li>
                ))
            }
        </ul>
    </div>
}

export default Categories
