from flask import *
import requests,json,sys

app=Flask(__name__)

@app.route('/')
def home():
	return render_template('index.html')

@app.route('/customer')
def customer():
	return render_template('PersonalInformation.html')

@app.route('/billing')
def billing():
	return render_template('CreditCardInfo.html')


if __name__=="__main__":
	app.run(debug=True);