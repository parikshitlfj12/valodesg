export default function TradingApp() {
  return (
    <section>
      This was an assignment project, the motive of this project was to create a dashboard or a portfolio, to maintain your stocks in Indian market.
      The backend calls to NSE Api's were requested using nodeJS server and sidewise, a React application was rendering the frontend.
      <br/><br/>
      You Can Read More About NSE Api endpoint here - <a href="https://www.nseindia.com/market-data/real-time-data-subscription" style={{color: "#5E9284"}}>
        https://www.nseindia.com/market-data/real-time-data-subscription
        </a> <br/><br/>
      The functionality allows you to add or drop off a particular stock from your portfolio and gives you a breif data about your holding, Moreover you cannot insert more than
      10 stocks in your portfolio
      
    </section>
  )
}