import os
import time

from flask import Flask, flash, request, jsonify
from flask_cors import CORS
from hurry.filesize import size
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = './files/'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg',
                      'gif', 'epub', 'doc', 'docs', 'xls', 'xlsx', 'ppt', 'pptx', 'xml'}

app = Flask(__name__)
app.secret_key = os.urandom(24)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
CORS(app)


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/')
def welcome():
    return "Welcome to the file storage server API! Go to ./api/files to see the file list."


@app.route('/api/files', methods=['GET'])
def list_files():
    filesInfos = []
    dirs = os.listdir(UPLOAD_FOLDER)
    for fileName in dirs:
        path = UPLOAD_FOLDER+fileName
        fileSize = size(os.path.getsize(path))
        fileDateUnix = os.path.getmtime(path)
        fileDate = time.ctime(fileDateUnix)
        fileInfo = {"name": fileName, "size": fileSize,
                    "date": fileDate, "unix_time": fileDateUnix}
        filesInfos.append(fileInfo)
    return jsonify(filesInfos)


@app.route('/api/files', methods=['POST'])
def upload_file():
    if request.method == 'POST':
        if 'file' not in request.files:
            flash('No file part')
            return 'no file part'
        file = request.files['file']
        if file.filename == '':
            flash('No selected file')
            return 'no selected file'
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            return 'success!'


@app.route('/api/files/<filename>', methods=['DELETE'])
def delete_file(filename):
    if os.path.exists("./files/"+filename):
        os.remove("./files/"+filename)
        return 'success!'
    else:
        return 'no such file'


if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0')
