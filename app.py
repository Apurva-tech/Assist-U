#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from flask import Flask, render_template

DEVELOPMENT_ENV  = True

app = Flask(__name__)

################################## *** PREDICT MODEL FUNCTION *** ##################################
import tensorflow as tf
from keras.preprocessing import image
from skimage import io
import numpy as np

new_model = tf.keras.models.load_model('model_filter.h5')
        
def Predict_emotion(file_path):
    img = image.load_img(file_path, grayscale=True, target_size=(48, 48))
    show_img=image.load_img(file_path, grayscale=False, target_size=(200, 200))
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis = 0)
    x /= 255
    
    custom = new_model.predict(x)
    
    objects = ('angry', 'disgust', 'fear', 'happy', 'sad', 'surprise', 'neutral')
    
    m=0.000000000000000000001
    a=custom[0] 
    for i in range(0,len(a)):
        if a[i]>m:
            m=a[i]
            ind=i
            
    return objects[ind]


@app.route('/')
def index():
    img_path = './static/img/happy.jpeg'
    result = Predict_emotion(img_path)
    return render_template('index.html', result=result)


if __name__ == '__main__':
    app.run(debug=DEVELOPMENT_ENV)
