import React from 'react';

const Problem2 = () => {
    return (
        <section className="container mx-auto py-10 px-40">
            <div className="md:text-center mx-auto font-Roboto font-bold lg:w-2/4 xl:w-2/6">
                <h1 className="text-3xl lg:text-4xl text-[#F7941D]">Problem 2</h1>
            </div>
            <div className="mx-auto md:p-16 lg:p-20">
                <p>
                    A countdown sequence is a descending sequence of k integers from k down to 1 (e.g. 5, 4, 3, 2, 1).
                    Write a function that returns an array of the form[x, y] where x is the number of countdown
                    sequences in the given array and y is the array of those sequences in the order in which they
                    appear in the array.
                </p>
            </div>
        </section>
    );
};

export default Problem2;