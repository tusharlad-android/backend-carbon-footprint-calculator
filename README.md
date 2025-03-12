📌 Carbon Footprint Calculator - Backend
A Node.js backend that calculates carbon footprints using AI-powered estimations.


🚀 Features
✅ AI-powered carbon footprint calculations
✅ Scalable Node.js & Express backend
✅ OpenAI API integration
✅ Deployed on Vercel


🛠 Installation & Setup
🛠 Installation & Setup
1️⃣ Clone the Repository

git clone https://github.com/tusharlad-android/backend-carbon-footprint-calculator.git
cd backend-carbon-footprint-calculator

2️⃣ Install Dependencies

npm install

3️⃣ Configure Environment Variables
Create a .env file in the root folder and add:

OPENAI_API_KEY=your_openai_api_key
PORT=5000

4️⃣ Run the Backend

npm start
The server will start on http://localhost:5000

🌐 API Endpoints
🔹 Calculate Carbon Footprint
POST /api/calculate

Request Body:
{
  "travelType": "driving",
  "distance": 50,
  "frequency": "petrol",
  "transportType":"personal"
}

Response:
{
  "footprint": "5.2 kg CO2"
}

🚀 Made with ❤️ by Tushar lad🎉
