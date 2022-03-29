import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions =
        [
            {
                id: 1, name: 'Free', price: 0, benifits: [
                    'life time free',
                    'unlimited deals',
                    'localized deals',
                    'fantastic deals',
                    'crazy deals'
                ]
            },
            { id: 2, name: 'Regular', price: 9.99, benifits: [
                'everything time free',
                'unlimited deals',
                'localized deals',
                'fantastic deals',
                'crazy deals'
            ] },
            { id: 3, name: 'Premium', price: 19.0,  benifits: [
                'everything Regular free',
                'unlimited deals',
                'localized deals',
                'fantastic deals',
                'crazy deals'
            ] }
        ]

    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl font-mono text-white'>Best deal of the town</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor neque minima qui sequi. Veritatis provident tempore facere voluptas ea eveniet sequi earum, deserunt ipsam in quas perspiciatis a repudiandae!</p>

            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOptions.map(option => <PricingOption
                        key={option.id}
                        option={option}
                    ></PricingOption>)
                }
            </div>

        </div>
    );
};

export default Pricing;