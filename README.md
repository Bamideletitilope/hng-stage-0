Name Classifier API
This is a Node.js/Express microservice that predicts the gender of a name using the Genderize.io API. This service processes raw data to determine prediction confidence and ensures standardized error handling.

Public API Base URL:https://hng-stage-0-rouge.vercel.app/api/classify

** Features
~ Gender Prediction: It integrates with the Genderize.io API.

~ Confidence Logic: Custom heuristic to determine if a prediction is reliable based on a probability of(P >= 0.7) and sample size (N >= 100).

~ Input Validation: Robust handling of missing, empty, or malformed query parameters.

~ Standardized Responses: Clean, consistent JSON structure for both success and error states.

~ CORS Enabled

** Tech Stack
~ Runtime: Node.js

~ Framework: Express

~ HTTP Client: Axios

~ Deployment: Vercel