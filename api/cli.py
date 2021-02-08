import fire
import requests


def list_files():
    url = "http://localhost:5000/api/files"
    res = requests.get(url)
    return res.text


def upload_file(filepath):
    url = "http://localhost:5000/api/files"
    files = {'file': open(filepath, 'rb')}
    res = requests.post(url, files=files)
    return res.text


def delete_file(filename):
    url = "http://localhost:5000/api/files/"+filename
    res = requests.delete(url)
    return res.text


if __name__ == '__main__':
    fire.Fire()
