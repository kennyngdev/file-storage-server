FROM python:3.9-slim

RUN apt-get update && \
    apt-get -y install netcat && \
    apt-get clean

WORKDIR /usr/src/app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . /usr/src/app

EXPOSE 5000
CMD [ "python", "server.py" ]
