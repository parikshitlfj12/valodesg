export default function HappyFarm() {
    return(
      <section>
        <b>User App</b>{" "}
        <small>
          - The User app is normal as an ecommerce application where you can
          buy stuff online. It got different features. Like Shopping cart,
          Checkout, Orders Details. The payment gateway Paypal is also
          included. For less literate people we have this feature of people
          adding their phone number and email address form submission. A
          text message from twilio API would be send and Email would be send
          to the user about the company.
        </small>{" "}
        <br /><br />
        <b>Vendor App</b> -{" "}
        <small>
          The vendor service panel is at the url localhost:8080/vendor. Here
          we have a dashboard for vendor to manage their inventory and
          stock. They can add new products, details about them and delete
          them as well. Another interesting feature we have is whenever an
          order is placed from the user App . 
        </small>
        <br /><br />
        <b>Customer Service App</b> -{" "}
        <small>
          The customer support also maintains a dashboard where whenever a
          user asks for help. They submit their number on the user app and
          that number will all the other details about the customer will be
          shown here. What the customer support panel has to do is to make a
          call and clear all of their doubts. As soon as the customer is
          satisfied the service people toggles the status to complete and
          close the case.
        </small>
      </section>
    )
}