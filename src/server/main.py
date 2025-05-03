from flask import Flask, request, jsonify  # type: ignore
import os
from flask_cors import CORS  # type: ignore
from flask import url_for, json  # type: ignore

app = Flask(__name__)
CORS(app)


@app.route("/foodData")
def data():
    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    json_url = os.path.join(SITE_ROOT, "../data/", "food.json")
    data = json.load(open(json_url))
    for i, item in enumerate(data):
        item["id"] = i

    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True, port=4000)
