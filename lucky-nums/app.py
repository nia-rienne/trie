import random
import requests
from flask import Flask, render_template, jsonify, request

app = Flask(__name__)
HOST = 'http://numbersapi.com'


@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")


@app.route("/api/get-lucky-num", methods=["POST"])
def retrieve_luckynum_data():
    """Handle lucky-num data:

        params = {
            "name": name of user (required),
            "email": email of user (required),
            "year": birth year (required, must be between 1900 and 2000, inclusive),
            "color": favorite color (required and must be one of “red”, “green”, “orange”, “blue”)
        }
    """

    data = request.json

    try:
        int(data["year"])
    except ValueError:
        data["year"] = None

    errors = dict()
    if data["name"] is None or data["name"] == "":
        errors["name"] = ["This field is required."]
    if data["email"] is None or data["email"] == "":
        errors["email"] = ["This field is required."]
    if data["year"] is None or data["year"] == "" or int(data["year"]) < 1900 or int(data["year"]) > 2000:
        errors["year"] = [
            "This field is required and must be between 1900 and 2000."]
    if data["color"] is None or data["color"] == "" or data["color"] not in ('red', 'green', 'orange', 'blue'):
        errors["color"] = [
            "This field is required and must be one of “red”, “green”, “orange”, “blue”."]

    num = random.randint(1, 100)
    num_fact = requests.get(f"{HOST}/{num}")
    year = str(data["year"])
    year_fact = requests.get(f"{HOST}/{year}/year")

    num_data = {
        "fact": num_fact.text,
        "num": num
    }
    year_data = {
        "fact": year_fact.text,
        "year": year
    }

    return jsonify(num=num_data, year=year_data, errors=errors)
