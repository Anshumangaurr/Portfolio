from flask import Flask, render_template, request
from transformers import pipeline

app = Flask(__name__)

# Load AI model (only once at start)
summarizer = pipeline("summarization")

@app.route("/", methods=["GET", "POST"])
def index():
    summary_text = ""
    if request.method == "POST":
        input_text = request.form["input_text"]
        if input_text.strip():
            summary = summarizer(input_text, max_length=50, min_length=20, do_sample=False)
            summary_text = summary[0]['summary_text']
    return render_template("index.html", summary=summary_text)

if __name__ == "__main__":
    app.run(debug=True)
