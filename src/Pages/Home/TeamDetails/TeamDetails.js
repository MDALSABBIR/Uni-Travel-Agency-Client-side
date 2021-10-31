import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useHistory } from 'react-router';
import './TeamDetails.css';



const TeamDetails = () => {
    let history = useHistory();

    const handleAbout = () => {
        history.push("/about")
    }


    return (
        <div>
            <h2 className="m-5 value-title">EXPLORING ABOUT US !!</h2>
            <div className="content">
                <div>
                    <h3>Who we are ?</h3>
                    <h2><span className="team-heading">WHY</span> <span className="team-title">CHOOSE US</span> </h2>
                    <p>Researching and organising your own holiday can be a stressful task. Let us do the work for you! By choosing us you can save both time and money. Our staff always ready to handle any unforeseen situations. Welcome to learn the world with us.
                        <br />
                        Ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum.</p>
                    <br />
                    <address>
                        <h4>United State</h4>
                    </address>
                    <img className="flag" src="https://images.unsplash.com/photo-1518563077661-23ad56581d77?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc3fHx0cmF2ZWxsaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div>
                    <img className="drimg" src="https://images.unsplash.com/photo-1532364158125-02d75a0f7fb9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHBsYW5lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>

            </div>
            <Button onClick={handleAbout} className="btn" variant="secondary" size="lg" active>
                Team Details
            </Button>
        </div>

    );
};

export default TeamDetails;