# Yusuf Quddus — Cloud-Powered Portfolio

Welcome to the source for my portfolio site, where I demonstrate a modern, serverless cloud architecture and end-to-end CI/CD pipeline. This document explains the cloud services and technologies used to host, deploy, and develop my portfolio site. 

---

## 🔗 Live Demo

[https://d3lnymsmiws1n8.cloudfront.net](https://d3lnymsmiws1n8.cloudfront.net)

---

## Architecture Overview
```[Diagram Here]```

* **Frontend**: React app, pushed to S3, and served via CloudFront
* **Backend**: AWS Lambda (Node.js) behind API Gateway handles a serverless contact form, sending mail via SES
* **CI/CD**: GitHub Actions pipeline builds & deploys backend (Lambda) then frontend (S3 + invalidation)
* **Security & Permissions**:

  * IAM roles for Lambda execution and CI/CD user
  * S3 bucket locked down with Origin Access Control
  * API Gateway CORS configured for the CloudFront origin
  * SES identity & DKIM/SPF for deliverability

---

## Deployment & CI/CD

* **GitHub Actions**

  * **`backend` job**

    * `npm ci` → zip & `aws lambda update-function-code`
  * **`frontend` job** (depends on `backend`)

    * `npm ci && npm run build` → `aws s3 sync` → `aws cloudfront create-invalidation`
  * **Secrets & Env**

    * Stored in an `aws-deploy` environment on Github (access keys + `CONTACT_API_URL`)
    * Frontend reads `REACT_APP_CONTACT_API` at build time

---

## What I’ve Implemented

* **Static hosting** with S3 & CloudFront (private bucket + OAC)
* **CI/CD pipeline** using GitHub Actions & AWS CLI
* **Serverless API** with HTTP API Gateway + Lambda
* **Contact form** emailing via SES
* **CORS** configured end‑to‑end for secure browser calls
* **Environment‑specific builds** via CRA env variables
* **Automatic notifications** on form submit (success/error banners)
* **Logging & monitoring** with CloudWatch (Lambda logs)

---

## Future Improvements (To Do)

* **Custom domain & HTTPS**

* **Staging environment**

* **End‑to‑end tests**

* **Monitoring & alerts**

---

## Repository Structure

```
/
├── backend/
│   └── contact-form/       # Lambda code & package.json
├── public/                 # Static assets & index.html
├── src/                    # React app source
│   ├── components/         # UI components (including ContactForm)
│   └── App.js
├── .github/
│   └── workflows/
│       └── deploy.yml      # CI/CD pipeline
├── package.json          
└── README.md               
```

---
