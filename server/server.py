from flask import Flask, render_template, url_for, request, redirect
from flask_cors import CORS
from flask import jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import json
import random

app = Flask(__name__, static_folder="../static/dist", template_folder="../static")
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////Users/ryanyoungdale/python-projects/react-python/hello.db'
db = SQLAlchemy(app)
migrate = Migrate(app, db)
CORS(app)

user_hellos = db.Table('user_hellos',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id')),
    db.Column('hello_id', db.Integer, db.ForeignKey('hello.id'))
)

class Hello(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    language = db.Column(db.String(200), unique=True, nullable=False)
    word = db.Column(db.String(50))
    languages = db.relationship('User', secondary=user_hellos, backref=db.backref('languages', lazy='dynamic'))

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(200), unique=True, nullable=False)
    last_name = db.Column(db.String(50))

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/create', methods=['POST'])
def create():
    hello = Hello(language=request.get_json()['language'], word=request.get_json()['word'])
    # from IPython import embed; embed()
    db.session.add(hello)
    db.session.commit()
    return redirect(url_for('index'))

@app.route('/hello')
def hello():
    return jsonify(get_hello())

def get_hello():
    greeting_list = Hello.query.all()
    # from IPython import embed; embed()

    return random.choice(greeting_list).word

if __name__ == '__main__':
    app.run(debug=True)
