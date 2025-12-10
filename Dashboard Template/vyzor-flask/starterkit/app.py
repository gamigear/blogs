from flask import Flask, redirect, url_for, render_template

app = Flask(__name__)

###### dashboards ######

@app.route('/')
def root():
    return redirect(url_for('index'))

@app.route('/index')
def index():
    return render_template('pages/dashboards/index.html')
    
    
if __name__ == '__main__':
    app.run(debug=True)