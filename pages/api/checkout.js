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

export default async function handler(req) {
  return new Response(
    JSON.stringify({
      name: "Jim Halpert",
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
