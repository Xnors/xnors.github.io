# A very simple Flask Hello World app for you to get started with...

from flask import Flask, request, jsonify
from flask_cors import CORS
import json


app = Flask(__name__)
cors = CORS(app)


@app.route("/")
def hello_world():
    return """<h1>这是 Xnors 的服务器</h1><br>
    试试post{name:xnors}到 hello 节点～<br>

    <code>
    curl -X POST http://xnors.pythonanywhere.com/hello -H "Content-Type: application/json" -d '{"name":"Xnors"}'
    </code><br>
    """


@app.route("/hello", methods=["POST"])
def hello():
    return f'你好啊{request.json["name"]}，这里是Xnors工作室！'


@app.route("/get_web_data", methods=["GET"])
def get_web_data():
    with open("/home/xnors/xnors/web_data.json", "r", encoding="utf-8") as f:
        data = json.load(f)
        print(data)
    return jsonify(json.dumps(data))


@app.route("/web_data_add1", methods=["POST"])
def web_data_add1():
    with open("/home/xnors/xnors/web_data.json", "r", encoding="utf-8") as f:
        data = json.load(f)

    with open("/home/xnors/xnors/web_data.json", "w", encoding="utf-8") as f:
        print("WHAT: ",what := request.json["what"])
        data[what] += 1
        json.dump(data, f, ensure_ascii=False, indent=4)

    return jsonify(json.dumps(data))


if __name__ == "__main__":
    app.run()
