from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/faq")
def faq():
    return render_template("faq.html")

@app.route("/start")
def start():
    return render_template("start.html")

@app.route("/errors")
def errors():
    return render_template("errors.html")

@app.route("/support")
def contacts():
    return render_template("support.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
