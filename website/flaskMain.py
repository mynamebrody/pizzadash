from flask import *
import requests,json,sys

app=Flask(__name__)

app.secret_key="b'\xfd\xd3Y\x1b\xeb\xad\xbbK\xeeV\\x92${\\x96\xb2\xee\xf1]\xc4\\x90$+\xc3!'"

@app.route('/')
def home():
	return render_template('index.html')

@app.route('/customer')
def customer():
	return render_template('PersonalInformation.html')

@app.route('/customer', methods=['POST'])
def customer_process():
	session['json']={}
	session['json']['order']={}
	session['json']['order']['customer']={}
	session['json']['order']['customer']['firstName']=request.form['firstname']
	session['json']['order']['customer']['lastName']=request.form['lastname']
	session['json']['order']['customer']['address']={}
	session['json']['order']['customer']['address']['Street']=request.form['streetaddress']
	session['json']['order']['customer']['address']['City']=request.form['city']
	session['json']['order']['customer']['address']['Region']=request.form['state']
	session['json']['order']['customer']['address']['PostalCode']=request.form['zip']
	session['json']['order']['customer']['email']=request.form['email']
	session['json']['order']['customer']['phone']=request.form['phone']
	return redirect(url_for('billing'))

@app.route('/billing')
def billing():
	return render_template('CreditCardInfo.html')

@app.route('/billing', methods=['POST'])
def billing_process():
	session['json']['cardNum']=request.form['cardNum']
	session['json']['cardExp']=request.form['cardExp']
	session['json']['cardSec']=request.form['cardSec']
	session['json']['cardPost']=request.form['cardPost']
	return redirect(url_for('order'))

@app.route('/order')
def order():
	print(session['json'],file=sys.stderr)
	return redirect("www.dominos.com")


if __name__=="__main__":
	app.run(debug=True);