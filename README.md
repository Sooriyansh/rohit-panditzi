# श्री पारदेश्वर महादेव मंदिर — Website

Hindi-first Next.js App Router site for puja, jyotish and contact information in Ujjain.

## Run locally

1. Install Node.js 20.9 or newer.
2. Copy `.env.example` to `.env` and set the values below.
3. Run `npm install`, then `npm run dev`.
4. Visit `http://localhost:3000`.

## Deployment settings

- `SITE_URL`: public HTTPS origin used by canonical metadata and the sitemap.
- `PORT`: server port for `npm run dev` and `npm run start` (defaults to `3000`). The scripts preload `.env` before launching Next.js.
- `MONGODB_URI`: server-only MongoDB connection string. Without it, booking submissions return a clear configuration message and no data is accepted.
- `MONGODB_DATABASE`: optional database name; defaults to `ujjain_services`.
- `ADMIN_USER` and `ADMIN_PASSWORD`: server-only credentials for HTTP Basic Authentication on `/admin` and `/api/admin/*`. Use a unique, long password and serve the site over HTTPS.

Bookings are saved to the `bookings` collection with `pending` status. The admin dashboard supports search, service/date/status filters and status updates. No user account is required to send a booking request.

Before launch, create the MongoDB database/user with access limited to the application database, configure the deployment platform's request rate limit for `/api/bookings`, set `SITE_URL`, and keep `.env` out of source control.
