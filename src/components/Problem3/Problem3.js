import React from 'react';

const Problem3 = () => {
    return (
        <section className="container mx-auto py-10 px-40">
            <div className="md:text-center mx-auto font-Roboto font-bold lg:w-2/4 xl:w-2/6">
                <h1 className="text-3xl lg:text-4xl text-[#F7941D]">Problem 3</h1>
            </div>
            <div className="mx-auto md:p-16 lg:p-20">
                <p>
                    Jake is a very habitual person. He eats breakfast at 7:00 a.m. each morning, lunch at 12:00 p.m. and dinner at 7:00 p.m. in the evening.
                    Create a function that takes in the current time as a string and determines the duration of time before Jake's next meal.
                    Represent this as an array with the first and second elements representing hours and minutes, respectively.
                </p>
            </div>
        </section>
    );
};

export default Problem3;