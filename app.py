#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from flask import Flask, render_template, request
import string 
import random 
from flask_cors import CORS, cross_origin

DEVELOPMENT_ENV  = True

app = Flask(__name__)
cors = CORS(app)

################################## *** PREDICT MODEL FUNCTION *** ##################################
import os
os.environ["CUDA_VISIBLE_DEVICES"] = "-1"
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


@app.route('/fileupload', methods=['POST', 'GET'])
@cross_origin()
def index():
    if request.method == 'POST':
        if 'file' not in request.files:
            return 'no file'
        else:
            file = request.files['file']
            img_path = './static/img/'+str(''.join(random.choices(string.ascii_uppercase + string.digits, k = 7)))+'.png'

            file.save(img_path)
            result = Predict_emotion(img_path)
            return result



if __name__ == '__main__':
    app.run(debug=DEVELOPMENT_ENV)
