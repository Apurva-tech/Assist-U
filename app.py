#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from flask import Flask, render_template

DEVELOPMENT_ENV  = True

app = Flask(__name__)



@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=DEVELOPMENT_ENV)