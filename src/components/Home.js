import React from 'react';
function Home() {
    return (
        <div class="home div"> 
            <h1>Welcome to the Travel Journal App</h1>
            <div class='main'>
                <p>
                    This is your personal travel journal where you can log all your travel experiences.
                    Use the "Add Entry" link to create a new travel log, or click on "View Entries" to see all your previous logs.
                </p>
                {/* <img src={`${process.env.PUBLIC_URL}/img/travel.jpg`} alt="Travel" /> */}
                
            </div>

        </div>
    );
}

export default Home;
