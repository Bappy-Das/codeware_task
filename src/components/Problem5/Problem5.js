import React from 'react';

const Problem5 = () => {
    return (
        <section className="container mx-auto py-10 px-40">
            <div className="md:text-center mx-auto font-Roboto font-bold lg:w-2/4 xl:w-2/6">
                <h1 className="text-3xl lg:text-4xl text-[#F7941D]">Problem 5</h1>
            </div>
            <div className="mx-auto md:p-16 lg:p-20">
                <p>
                    Write a React component that presents users with a button. The button text says "click me" but on every third click (e.g. the 3rd click, the 6th click, the 9th click, etc...), the button text changes to "bang" but reverts back to "click me" when a users presses it again. Remember to properly export your component using export default.
                </p>
            </div>
        </section>
    );
};

export default Problem5;