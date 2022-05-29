from flask import Flask, render_template


app = Flask(__name__)
app.debug = True
app.config['SECRET_KEY'] = 'secret'


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/otra-pagina')
def otra_pagina():
    return render_template('nueva-pagina.html')


if __name__ == '__main__':
    app.run()