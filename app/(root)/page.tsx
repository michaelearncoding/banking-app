
import React from 'react';
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
    const loggedIn = {
        firstName: 'Michael'
    };


  return (
      <section className="home">
          <div className="home-content">
              <header className="home-header">
                  <HeaderBox
                      type={"greeting"}
                      title={"Welcome"}
                      user={loggedIn?.firstName || 'Guest'}
                      subtext={"Access and manage your account/transactions efficiently."}
                  />

                  <TotalBalanceBox
                      accounts={[]}
                      totalBanks={3     }
                      totalCurrentBalance={1000002}
                  />

              </header>


          </div>
      </section>
  );
};

export default Home;