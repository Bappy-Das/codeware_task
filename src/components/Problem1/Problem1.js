import React, { useEffect, useState } from 'react';

const Problem1 = () => {

    return (
        <section className="container mx-auto py-10 px-40">
            <div className="md:text-center mx-auto font-Roboto font-bold lg:w-2/4 xl:w-2/6">
                <h1 className="text-3xl lg:text-4xl text-[#F7941D]">Problem 1</h1>
            </div>
            <div className="mx-auto md:p-16 lg:p-20">
                <p>GET request to find those keys as array where age's value is equal to 30 from the
                    <br />
                    API below
                    <br />
                    https://coderbyte.com/api/challenges/json/age-counting</p>
            </div>
        </section>
    );
};

export default Problem1;