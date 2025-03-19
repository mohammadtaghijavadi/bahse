const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/api/ask", (req, res) => {
    const question = req.body.question;
    if (!question) return res.status(400).json({ error: "سوال را وارد کنید" });

    res.json({ answer: `پاسخ به: ${question}` });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
