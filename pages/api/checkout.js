import Cors from "cors";
import Stripe from "stripe";

// Initializing the cors middleware
const cors = Cors({
  methods: ["POST"],
});

// Initializing the Stripe API
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  const { mode } = req.query;
  console.log(mode);

  const session =
    mode == "payment"
      ? await stripe.checkout.sessions.create({
          line_items: [
            {
              price: "price_1MXSAsESpJvicGI5FxgiiqRd",
              adjustable_quantity: { enabled: true, minimum: 1, maximum: 50 },
              quantity: 1,
            },
          ],
          mode: "payment",
          success_url: "https://resumerocket.xyz/pricing",
          cancel_url: "https://resumerocket.xyz/pricing",
        })
      : await stripe.checkout.sessions.create({
          line_items: [
            {
              price: "price_1MXS9JESpJvicGI5SCEEs3Us",
              quantity: 1,
            },
          ],
          mode: "subscription",
          success_url: "https://resumerocket.xyz/pricing",
          cancel_url: "https://resumerocket.xyz/pricing",
        });

  res.redirect(303, session.url);
}
