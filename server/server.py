from flask import Flask, render_template, url_for
from flask_cors import CORS
from flask import jsonify
import random

app = Flask(__name__, static_folder="../static/dist", template_folder="../static")
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/hello')
def hello():
    return jsonify(get_hello())

def get_hello():
    greeting_list = ['Ciao', 'Hei' 'Salu', 'Hola', 'Hall', 'Hej']
    # from IPython import embed; embed()
    return random.choice(greeting_list)

if __name__ == '__main__':
    app.run(debug=True)
