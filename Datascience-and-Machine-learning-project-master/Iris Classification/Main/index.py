from flask import Flask,redirect,url_for,\
render_template,request
import pickle
from sklearn.datasets import load_iris

iris=load_iris()



app=Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route('/send_message',methods=['GET'])
def send_message(url=None):
    s1=request.args.get('a1')
    s2=request.args.get('a2')
    s3=request.args.get('a3')
    s4=request.args.get('a4')

    with open('iris_model.pkl','rb') as m:
        model=pickle.load(m)
    try:
        nameOfFlower=iris.target_names[model.predict([[s1,s2,s3,s4]])[0]]
        return nameOfFlower
    except ValueError:
        return 'false'
    
    
if __name__=='__main__':
    app.run()